import { liveProduct } from "../types/DataTypes";
import { itemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = itemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "/live-products";

async function postLiveProduct(data: Array<liveProduct>, accessToken: string) {
    headers.set("Authorization", `Bearer ${accessToken}`);
    return await http.post(url, data, { headers });
}

export { postLiveProduct };
