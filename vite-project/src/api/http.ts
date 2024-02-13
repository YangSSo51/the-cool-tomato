import axios from "axios";
import SockJS from "sockjs-client";

const BASEURL = "cool-tomato.duckdns.org";
const credential = true;

const chatWebSocketUrl = "wss://" + BASEURL + "/v1/chat/ws-stomp/websocket";

const chatbotWebSocketUrl = "wss://" + BASEURL + "/stomp/chat/websocket";

function mainAxios() {
    return axios.create({
        baseURL: "https://" + BASEURL + "/v1",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        withCredentials: credential,
    });
}

// axios 통합
const liveAxios = mainAxios;
const itemAxios = mainAxios;
const chatbotAxios = mainAxios;
const authAxios = mainAxios;
const chatAxios = mainAxios;

// SockJS
function chatSocket() {
    const base_url = "https://" + BASEURL + "/v1";
    const sock = new SockJS(`${base_url}/chat/ws-stomp`);
    sock.onclose = (ev: CloseEvent) => {
        console.log("chatting socket close");
        console.log(ev);
    };
    sock.onopen = (ev: Event) => {
        console.log("chatting socket open");
        console.log(ev);
    };
    return sock;
}

function chatbotSocket() {
    const base_url = "https://" + BASEURL;
    const sock = new SockJS(`${base_url}/stomp/chat`);
    sock.onclose = (ev: CloseEvent) => {
        console.log("chatting socket close");
        console.log(ev);
    };
    sock.onopen = (ev: Event) => {
        console.log("chatting socket open");
        console.log(ev);
    };
    return sock;
}

// function liveAxios() {
//     return axios.create({
//         baseURL: "https://" + BASEURL + "/v1",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         withCredentials: credential,
//     });
// }

// function itemAxios() {
//     return axios.create({
//         baseURL: "https://" + BASEURL + "/v1",
//         headers: {
//             "Content-Type": "application/json;charset=utf-8",
//         },
//         withCredentials: credential,
//     });
// }

// function chatbotAxios() {
//     return axios.create({
//         baseURL: "https://" + BASEURL + "/v1",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         withCredentials: credential,
//     });
// }

// function authAxios() {
//     return axios.create({
//         baseURL: "https://" + BASEURL + "/v1",
//         // 테스트용 API: 위에 서버가 작동을 안해서 테스트할 땐 아래 써주세욤
//         // baseURL: "http://211.63.208.201:8080/v1/",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         withCredentials: credential,
//     });
// }

// function chatAxios() {
//     return axios.create({
//         baseURL: "https://" + BASEURL + "/v1",
//         headers: {
//             "Content-Type": "application/json;charset=utf-8",
//         },
//         withCredentials: credential,
//     });
// }

export {
    mainAxios,
    liveAxios,
    itemAxios,
    chatbotAxios,
    authAxios,
    chatAxios,
    chatSocket,
    chatWebSocketUrl,
    chatbotSocket,
    chatbotWebSocketUrl,
};
