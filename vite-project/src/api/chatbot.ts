import { chatbotAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = chatbotAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "chatbots";

// 챗봇 질의응답 등록
async function RegisterChatbotAPI(data: { roomId: number; question: string; answer: string; }, accessToken: string) {
    headers.set("Authorization", `Bearer ${accessToken}`);
    await http.post(`${url}`, data, {headers});
}

// 챗봇 질의응답 수정
async function EditChatbotAPI(data: { chatbotId: number; roomId: number; question: string; answer: string; }, accessToken: string) {
    const response = await http.put(`${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    const responseData = response.data
    console.log(responseData)
}

// 챗봇 질의응답 삭제
async function DeleteChatbotAPI(chatbotId: number, accessToken: string) {
    await http.delete(`${url}/${chatbotId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
}

// 내가 등록한 챗봇 질의응답 확인
async function GetChatbotListAPI(params: {
    page?: number;
    size?: number;
}, accessToken: string) {
    const response =  await http.get(`${url}/list`, { 
        params: params,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    return response.data.data
}

export {
    RegisterChatbotAPI,
    EditChatbotAPI,
    DeleteChatbotAPI,
    GetChatbotListAPI,
};
