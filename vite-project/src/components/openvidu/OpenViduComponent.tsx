import {
    OpenVidu,
    Publisher,
    Session,
    StreamManager,
    Subscriber,
} from "openvidu-browser";

import axios, { AxiosError, AxiosResponse } from "axios";
import UserVideoComponent from "./UserVideoComponent";
import { useCallback, useEffect, useState } from "react";

interface OpenViduType {
    mySessionId: string;
    myUserName: string;
    session: Session | undefined;
    mainStreamManager: StreamManager | undefined;
    publisher: StreamManager | undefined;
    subscribers: StreamManager[];
}

function OpenViduComponent({
    mySessionId,
    myUserName,
}: {
    mySessionId: string;
    myUserName: string;
}) {
    const OPENVIDU_SERVER_URL = `https://i10a501.p.ssafy.io/openvidu/`;
    const [session, setSession] = useState<Session | null>(null);
    const [subscriber, setSubscriber] = useState<Subscriber | null>(null);
    const [publisher, setPublisher] = useState<Publisher | null>(null);
    const [OV, setOV] = useState<OpenVidu | null>(null);

    console.log("OpenViduComponent");

    const leaveSession = useCallback(() => {
        if (session) {
            session.disconnect();
        }
        setSession(null);
        setSubscriber(null);
        setPublisher(null);
        setOV(null);
    }, [session]);

    const joinSession = () => {
        // if (OV != null) return;
        const OVs = new OpenVidu();
        setOV(OVs);
        setSession(OVs.initSession());
    };

    useEffect(() => {
        console.log("useEffect eventListener");
        window.addEventListener("beforeunload", leaveSession);

        return () => {
            window.removeEventListener("beforeunload", leaveSession);
        };
    }, [leaveSession]);

    useEffect(() => {
        console.log("useEffect streamDestroyed");
        if (session === null) return;

        session.on("streamDestroyed", (event) => {
            if (
                subscriber &&
                event.stream.streamId === subscriber.stream.streamId
            ) {
                setSubscriber(null);
            }
        });
    }, [session, subscriber]);

    useEffect(() => {
        if (session === null) {
            joinSession();
            return;
        }
        console.log("useEffect streamCreated");

        session.on("streamCreated", (event) => {
            const subscribers = session.subscribe(event.stream, "");
            setSubscriber(subscribers);
        });

        async function createSession(sessionId: string): Promise<string> {
            try {
                const response: AxiosResponse = await axios.post(
                    OPENVIDU_SERVER_URL + "api/sessions",
                    { customSessionId: sessionId },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
                        },
                    }
                );
                return (response.data as { id: string }).id; // The sessionId
            } catch (error) {
                console.error(error);
                return Promise.reject(error);
            }
        }
        async function createToken(sessionId: string): Promise<string> {
            try {
                const response: AxiosResponse = await axios.post(
                    OPENVIDU_SERVER_URL +
                        "api/sessions/" +
                        sessionId +
                        "/connection",
                    {},
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
                        },
                    }
                );
                return (response.data as { token: string }).token; // The token
            } catch (error) {
                console.error(error);
                return Promise.reject(error);
            }
        }
        const getToken = async (): Promise<string> => {
            try {
                if (session === null) throw new Error("No active session");
                const sessionIds = await createSession(mySessionId);
                console.log("getToken sessionIds");
                console.log(sessionIds);
                const token = await createToken(sessionIds);
                console.log("getToken token");
                console.log(token);
                return token;
            } catch (error) {
                throw new Error("Failed to get token.");
            }
        };

        getToken()
            .then((token) => {
                if (!session) return;
                session
                    .connect(token)
                    .then(() => {
                        if (OV) {
                            const publishers = OV.initPublisher(undefined, {
                                audioSource: undefined,
                                videoSource: undefined,
                                publishAudio: true,
                                publishVideo: true,
                                mirror: true,
                                resolution: "480x854", // The resolution of your video
                                frameRate: 30, // The frame rate of your video
                            });

                            console.log("session connect publishers");
                            console.log(publishers);
                            setPublisher(publishers);
                            session
                                .publish(publishers)
                                .then(() => {})
                                .catch(() => {});
                        }
                    })
                    .catch(() => {});
            })
            .catch(() => {});
    }, [OPENVIDU_SERVER_URL, OV, mySessionId, session]);
    return (
        <>
            {publisher == null ? null : (
                <UserVideoComponent streamManager={publisher} />
            )}
            {/* {subscriber == null ? null : (
                <UserVideoComponent streamManager={subscriber} />
            )} */}
        </>
    );
}

export default OpenViduComponent;
