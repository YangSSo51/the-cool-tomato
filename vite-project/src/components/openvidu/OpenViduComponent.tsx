import { OpenVidu, Publisher, Session, Subscriber } from "openvidu-browser";

import UserVideoComponent from "./UserVideoComponent";
import { useCallback, useEffect, useState } from "react";

import { getLiveStartToken, getLiveJoinToken } from "../../api/openVidu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { useParams } from "react-router-dom";

function OpenViduComponent({ type }: { type: string }) {
    const [session, setSession] = useState<Session | null>(null);
    const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
    const [subscriber, setSubscriber] = useState<Subscriber | null>(null);
    const [publisher, setPublisher] = useState<Publisher | null>(null);
    const [OV, setOV] = useState<OpenVidu | null>(null);

    const accessToken: string = useSelector(
        (state: RootState) => state.user.accessToken
    );
    const { roomId } = useParams() as { roomId: string };
    const liveBroadcastId = parseInt(roomId);

    console.log("OpenViduComponent");

    const leaveSession = useCallback(() => {
        if (session) {
            session.disconnect();
        }
        setSession(null);
        setSubscribers(null);
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
        window.addEventListener("beforeunload", leaveSession, true);

        return () => {
            window.removeEventListener("beforeunload", leaveSession, true);
        };
    }, [leaveSession]);

    useEffect(() => {
        if (session === null) return;

        session.on("streamDestroyed", (event) => {
            console.log("useEffect streamDestroyed");
            if (subscribers === null) return;
            const stream = event.stream;
            const index = subscribers.findIndex(
                (subscriber) => subscriber.stream === stream
            );
            if (index !== -1) {
                const newSubscribers = [...subscribers].splice(index, 1);
                setSubscribers(newSubscribers);
            }
            setSubscriber(null);
        });

        session.on("streamCreated", (event) => {
            console.log("useEffect streamCreated");
            const stream = session.subscribe(event.stream, undefined);
            setSubscriber(stream);
            setSubscribers(subscribers ? [...subscribers, stream] : [stream]);
        });
    }, [session, subscribers]);

    useEffect(() => {
        if (session === null) {
            console.log("joinSession");
            joinSession();
            return;
        }

        async function getToken(): Promise<string> {
            try {
                if (session === null) throw new Error("No active session");
                let token = "";
                if (type === "broadcast") {
                    const test_data = {
                        accessToken,
                        liveBroadcastId,
                    };
                    token = await getLiveStartToken(test_data);
                } else {
                    const test_data = {
                        liveBroadcastId,
                    };
                    token = await getLiveJoinToken(test_data);
                }
                return token;
            } catch (error) {
                return Promise.reject(error);
            }
        }

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
                        if (type === "live") return;
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
    }, [OV, session, type]);

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
