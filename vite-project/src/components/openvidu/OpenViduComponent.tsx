import { OpenVidu, Publisher, Session, Subscriber } from "openvidu-browser";

import axios, { AxiosResponse } from "axios";
import UserVideoComponent from "./UserVideoComponent";
import { useCallback, useEffect, useState } from "react";

function OpenViduComponent({
    mySessionId,
    type,
}: {
    mySessionId: string;
    type: string;
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
        if (session === null) return;

        session.on("streamDestroyed", (event) => {
            console.log("useEffect streamDestroyed");
            if (
                subscriber &&
                event.stream.streamId === subscriber.stream.streamId
            ) {
                setSubscriber(null);
            }
        });

        console.log("useEffect streamCreated");

        session.on("streamCreated", (event) => {
            const subscribers = session.subscribe(event.stream, undefined);
            setSubscriber(subscribers);
        });
    }, [session, subscriber]);

    useEffect(() => {
        if (session === null) {
            console.log("joinSession");
            joinSession();
            return;
        }

        async function createSession(sessionId: string): Promise<string> {
            try {
                const options = {
                    url: OPENVIDU_SERVER_URL + "api/sessions",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
                    },
                };
                if (type === "broadcast") {
                    Object.assign(options, {
                        data: { customSessionId: sessionId },
                    });
                } else {
                    options.method = "GET";
                    options.url += "/" + sessionId;
                }
                const response: AxiosResponse = await axios(options);
                return (response.data as { id: string }).id; // The sessionId
            } catch (error) {
                console.log("createSession error");
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
                console.log("createToken error");
                return Promise.reject(error);
            }
        }
        const getToken = async (): Promise<string> => {
            try {
                if (session === null) throw new Error("No active session");
                const sessionIds = await createSession(mySessionId);
                console.log("getToken sessionIds :");
                console.log(sessionIds);
                const token = await createToken(sessionIds);
                console.log("getToken token :");
                console.log(token);
                return token;
            } catch (error) {
                return Promise.reject(error);
            }
        };

        console.log("useEffect getToken start");
        getToken()
            .then((token) => {
                if (!session) return;
                session
                    .connect(token)
                    .then(() => {
                        if (!OV) {
                            return Promise.reject("OV is not initialized");
                        }
                        const publishers = OV.initPublisher(undefined, {
                            audioSource: undefined,
                            videoSource: undefined,
                            publishAudio: true,
                            publishVideo: true,
                            mirror: true,
                            resolution: "360x720", // The resolution of your video
                            frameRate: 30, // The frame rate of your video
                        });

                        console.log("session connect setPublishers");
                        console.log(publishers);
                        setPublisher(publishers);
                        session
                            .publish(publishers)
                            .then(() => {
                                console.log("session publish publishers");
                            })
                            .catch((e) => {
                                console.log("session publish error");
                                return Promise.reject(e);
                            });
                    })
                    .catch((e) => {
                        console.log("session connect error");
                        return Promise.reject(e);
                    });
            })
            .catch((e) => {
                console.log("getToken error");
                console.log(e);
            });
    }, [OPENVIDU_SERVER_URL, OV, mySessionId, session, type]);

    function View() {
        if (type === "broadcast" && publisher !== null) {
            return <UserVideoComponent streamManager={publisher} />;
        } else if (type === "live" && subscriber !== null) {
            return <UserVideoComponent streamManager={subscriber} />;
        } else return null;
    }
    return <View />;
}

export default OpenViduComponent;
