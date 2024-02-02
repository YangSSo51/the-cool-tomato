import { liveAxios } from "./http";

const http = liveAxios();

async function getLiveStartToken(data: {
    accessToken: string;
    liveBroadcastId: number;
}): Promise<string> {
    const res = await http.post(`/start`, data);
    return res.data.data.token;
}

async function getLiveJoinToken(data: { liveBroadcastId: number }) {
    const res = await http.post(`/participation`, data);
    return res.data.data.token;
}

async function stopLive(data: {
    accessToken: string;
    liveBroadcastId: number;
}) {
    return http.post(`/stop`, data);
}

// async function createSessionDeprecated(sessionId: string): Promise<string> {
//     try {
//         const options = {
//             url: OPENVIDU_SERVER_URL + "api/sessions",
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
//             },
//         };
//         if (type === "broadcast") {
//             Object.assign(options, {
//                 data: { customSessionId: sessionId },
//             });
//         } else {
//             options.method = "GET";
//             options.url += "/" + sessionId;
//         }
//         const response: AxiosResponse = await axios(options);
//         return (response.data as { id: string }).id; // The sessionId
//     } catch (error) {
//         console.log("createSession error");
//         return Promise.reject(error);
//     }
// }
// async function createTokenDeprecated(sessionId: string): Promise<string> {
//     try {
//         const response: AxiosResponse = await axios.post(
//             OPENVIDU_SERVER_URL +
//                 "api/sessions/" +
//                 sessionId +
//                 "/connection",
//             {},
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
//                 },
//             }
//         );
//         return (response.data as { token: string }).token; // The token
//     } catch (error) {
//         console.log("createToken error");
//         return Promise.reject(error);
//     }
// }
// const getTokenDeprecated = async (): Promise<string> => {
//     try {
//         if (session === null) throw new Error("No active session");
//         const sessionIds = await createSessionDeprecated(mySessionId);
//         console.log("getToken sessionIds :");
//         // console.log(sessionIds);
//         const token = await createTokenDeprecated(sessionIds);
//         console.log("getToken token :");
//         // console.log(token);
//         return token;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };

export { getLiveStartToken, getLiveJoinToken, stopLive };
