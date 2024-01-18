import { mainAxios } from "./http";
import { AxiosHeaders, AxiosResponse } from "axios";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "/v1/users";

function loginUser(
    data: { id: string; password: string },
    success: (response: AxiosResponse) => void,
    fail: (response: AxiosResponse) => void
) {
    http.post(`${url}/login`, data).then(success).catch(fail);
}

export { loginUser };
