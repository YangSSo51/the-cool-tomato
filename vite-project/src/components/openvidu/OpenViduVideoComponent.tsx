import { StreamManager } from "openvidu-browser";
import { useEffect, useRef } from "react";

function OpenViduVideoComponent({
    streamManager,
}: {
    streamManager: StreamManager;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (streamManager && videoRef.current) {
            streamManager.addVideoElement(videoRef.current);
        }
    }, [streamManager]);
    return <video autoPlay={true} ref={videoRef}></video>;
}

export default OpenViduVideoComponent;
