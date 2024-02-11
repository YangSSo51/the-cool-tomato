import { chatbotAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = chatbotAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "chatbots";

// 챗봇 질의응답 등록
async function RegisterChatbotAPI(data: { roomId: number; question: string; answer: string; }, accessToken: string) {
    headers.set("Authorization", `Bearer ${accessToken}`);
    const response = await http.post(`${url}`, data, {headers});
    const responseData = response.data
    console.log(responseData)
}

// 챗봇 질의응답 수정
async function EditChatbotAPI(data: { chatbotId: number; roomId: number; question: string; answer: string; }) {
    const response = await http.put(`${url}`, data);
    const responseData = response.data
    console.log(responseData)
}

// 챗봇 질의응답 수정
async function DeleteChatbotAPI(chatbotId: number) {
    const response = await http.put(`${url}/${chatbotId}`);
    const responseData = response.data
    console.log(responseData)
}

// 내가 등록한 챗봇 질의응답 확인
async function GetChatbotListAPI(params?: {
    page?: number;
    size?: number;
}) {
    return await http.get(`${url}/list`, { params });
}

export {
    RegisterChatbotAPI,
    EditChatbotAPI,
    DeleteChatbotAPI,
    GetChatbotListAPI,
};
