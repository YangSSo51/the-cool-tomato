import axios from "axios";

function mainAxios() {
    return axios.create({
        baseURL: "http://localhost:3000/v1/",
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
        baseURL: "http://i10a501.p.ssafy.io:8083/v1/live",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export { mainAxios, openViduDirectAxios, liveAxios };
