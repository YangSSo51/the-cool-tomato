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
    console.log("UserVideoComponent streamManager");
    console.log(streamManager);
    return (
        <>
            {streamManager !== undefined ? (
                <div className="streamcomponent" style={{ height: "100%" }}>
                    {/* <div>
                        <p>{getNicknameTag(streamManager)}</p>
                    </div> */}
                    <OpenViduVideoComponent streamManager={streamManager} />
                </div>
            ) : null}
        </>
    );
}

export default UserVideoComponent;
