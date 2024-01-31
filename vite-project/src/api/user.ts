import { mainAxios } from "./http";
import { AxiosHeaders } from "axios";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../types/DataTypes";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "/v1/users";

async function loginUser(data: { id: string; password: string }) {
    console.log("loginUser data: " + JSON.stringify(data));
    return http.post(`${url}/login`, data);
}

async function SignupUserAPI(data: RegisterUser) {
    console.log("회원가입~!!!!!!!", JSON.stringify(data))
    const navigate = useNavigate();
    try {
        await http.post(`${url}/join`, data)
        navigate("/v1/sign");
    } catch (error) {
        console.error(error);
        alert('이미 가입된 유저입니다. 로그인을 진행해주세요.');
    }
}

async function checkIdAPI(data: {id: string}) {
    console.log("아이디중복췤~!!!!!!", JSON.stringify(data))
    http.get(`${url}/join/check-login-id/`, data)
}

export { loginUser, SignupUserAPI, checkIdAPI };
