import { mainAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "/v1/users";

async function loginUser(data: { id: string; password: string }) {
    console.log("loginUser data: " + JSON.stringify(data));
    return http.post(`${url}/login`, data);
}

export { loginUser };
