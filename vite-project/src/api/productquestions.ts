import { productsAxios } from "./http";
import { AxiosHeaders } from "axios";

const HTTP = productsAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const URL = "/product-questions";

export async function SellerPutQnaAPI(params: type) {
    try {
        const response = await HTTP.put(`${URL}`);
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("응~잘돼");
            return responseData;
        } else {
            console.log("안돼~");
        }
    } catch (error) {
        console.error(error);
        console.log("응 에러야~");
    }
}

export async function qnaDetailAPI(data: { productQuestionId: number }) {
    try {
        const response = await HTTP.get(`${URL}/${data.productQuestionId}`);
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("응~잘돼");
            return responseData;
        } else {
            console.log("안돼~");
        }
    } catch (error) {
        console.error(error);
        console.log("응 에러야~");
    }
}

export async function buyerGetQnaAPI(params: type) {
    try {
        const response = await HTTP.get(`${URL}/buyer/my/list`);
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("응~잘돼");
            return responseData;
        } else {
            console.log("안돼~");
        }
    } catch (error) {
        console.error(error);
        console.log("응 에러야~");
    }
}

export async function SellerGetQnaAPI(params: type) {
    try {
        const response = await HTTP.get(`${URL}/buyer/my/list`);
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("응~잘돼");
            return responseData;
        } else {
            console.log("안돼~");
        }
    } catch (error) {
        console.error(error);
        console.log("응 에러야~");
    }
}
