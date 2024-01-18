import axios from "axios";

function mainAxios() {
    return axios.create({
        baseURL: `"http://localhost:3000"`,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}

function kurentoAxios() {
    return null;
}

export { mainAxios, kurentoAxios };
