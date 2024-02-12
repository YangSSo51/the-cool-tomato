import axios from "axios";

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

function chatbotAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8086/v1/",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function authAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8080/v1/",
        // 테스트용 API: 위에 서버가 작동을 안해서 테스트할 땐 아래 써주세욤
        // baseURL: "http://211.63.208.201:8080/v1/",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function chatAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8085/v1/",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

export { mainAxios, openViduDirectAxios, liveAxios, itemAxios, chatbotAxios, authAxios, chatAxios };
