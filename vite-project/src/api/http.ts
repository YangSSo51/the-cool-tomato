import axios from "axios";
import SockJS from "sockjs-client";

function mainAxios() {
    return axios.create({
        baseURL: "http://3.39.6.29:8084/v1/",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function openViduDirectAxios() {
    return axios.create({
        baseURL: "https://i10a501.p.ssafy.io/openvidu/api/sessions",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic T1BFTlZJRFVBUFA6c3NhZnk",
        },
    });
}

function liveAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8083/v1",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function itemAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8082/v1",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function chatSocket() {
    const base_url = "http://i10a501.p.ssafy.io:8085/v1";
    const sock = new SockJS(`${base_url}/chat/ws-stomp`);
    sock.onclose = (ev: CloseEvent) => {
        console.log("chatting socket close");
        console.log(ev);
    };
    sock.onopen = (ev: Event) => {
        console.log("chatting socket open");
        console.log(ev);
    };
    sock.onmessage = (e) => {
        console.log("chatting socket message");
        console.log(e);
    };
    return sock;
}

export { mainAxios, openViduDirectAxios, liveAxios, itemAxios, chatSocket };
