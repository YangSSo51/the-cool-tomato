import axios from "axios";

const mainAxios = axios.create({
    baseURL: `"http://localhost:3000"`,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

const kurentoAxios = null;

export { mainAxios, kurentoAxios };
