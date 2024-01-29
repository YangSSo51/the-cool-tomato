import { StreamManager } from "openvidu-browser";
import OpenViduVideoComponent from "./OpenViduVideoComponent";

function getNicknameTag(streamManager: StreamManager) {
    return JSON.parse(streamManager.stream.connection.data).clientData;
}

function UserVideoComponent({
    streamManager,
}: {
    streamManager: StreamManager;
}) {
    return (
        <div style={{ height: "100%" }}>
            {streamManager !== undefined ? (
                <div className="streamcomponent" style={{ height: "100%" }}>
                    {/* <div>
                        <p>{getNicknameTag(streamManager)}</p>
                    </div> */}
                    <OpenViduVideoComponent streamManager={streamManager} />
                </div>
            ) : null}
        </div>
    );
}

export default UserVideoComponent;
