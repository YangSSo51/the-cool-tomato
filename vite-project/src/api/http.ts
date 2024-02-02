import axios from "axios";

function mainAxios() {
    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function kurentoAxios() {
    return null;
}

function ItemAxios() {
    return axios.create({
        baseURL: "http://3.39.6.29:8082/v1",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function AuthAxios() {
    return axios.create({
        baseURL: "http://i10a501.p.ssafy.io:8080/v1",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        }
    })
}

export { mainAxios, kurentoAxios, ItemAxios, AuthAxios };
