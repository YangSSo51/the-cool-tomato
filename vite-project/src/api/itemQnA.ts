import { AxiosHeaders } from "axios";
import { itemAxios } from "./http";

const http = itemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "/product-questions";

async function getQnAList(params: {
    page: number;
    size: number;
    "product-id": number;
}) {
    return await http.get(url + "/list", { params });
}
async function sellerPutQnaAPI(params: type) {
    try {
        const response = await http.put(`${URL}`);
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

async function qnaDetailAPI(data: { productQuestionId: number }) {
    try {
        const response = await http.get(`${URL}/${data.productQuestionId}`);
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

async function buyerGetQnaAPI(params: type) {
    try {
        const response = await http.get(`${URL}/buyer/my/list`);
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

async function sellerGetQnaAPI(params: type) {
    try {
        const response = await http.get(`${URL}/buyer/my/list`);
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

async function postItemQnA(
    data: {
        productId: number;
        questionContent: string;
    },
    accessToken: string
) {
    headers.set("Authorization", `Bearer ${accessToken}`);
    return await http.post(url, data, { headers });
}

async function deleteItemQnA(productQuestionId: number, accessToken: string) {
    headers.set("Authorization", `Bearer ${accessToken}`);
    return await http.delete(`${url}/${productQuestionId}`, { headers });
}

export {
    getQnAList,
    sellerPutQnaAPI,
    qnaDetailAPI,
    buyerGetQnaAPI,
    sellerGetQnaAPI,
    postItemQnA,
    deleteItemQnA,
};
