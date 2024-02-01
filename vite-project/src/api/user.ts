import { mainAxios } from "./http";
import { AxiosHeaders } from "axios";
import { useNavigate } from "react-router-dom";
import { RegisterUser, RegisterSeller } from "../types/DataTypes";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "users";

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
    try {
        const response = await http.get(`${url}/join/check-login-id/${data.id}`)
        const responseData = response.data;
        if (responseData.status === 200 && responseData.data.isDuplicate === false) {
            console.log("사용 가능한 아이디입니다.");
            return 1
        } else {
            console.log("아이디가 중복되었거나 요청에 문제가 있습니다.");
        }
    } catch (error) {
        console.error(error);
    }
}

async function sendEmailAPI(data: {email: string}) {
    console.log("이메일인증s날려~!!!!!!", JSON.stringify(data))
    http.post(`${url}/join/check-email/`, data)
}

async function checkEmailAPI(data: {email: string, code: string}) {
    console.log("인증번호확인~!~!!!!!!", JSON.stringify(data))
    try {
        const response = await http.get(`${url}/join/check-email-verifications/${data.email}/${data.code}`)
        const responseData = response.data;
        if (responseData.status === 200 && responseData.data.isVerify === true) {
            console.log("이메일 인증이 성공적으로 완료됐습니다");
        } else {
            console.log("아이디가 중복되었거나 요청에 문제가 있습니다.");
        }
    } catch (error) {
        console.error(error);
    }
}

async function registerSellerAPI(data: RegisterSeller) {
    console.log("판매자신청좀하겠습니다.~!!!!!!!", JSON.stringify(data))
    try {
        await http.post(`${url}/sellers`, data)
        return 1
    } catch (error) {
        console.error(error);
        alert('폼 재확인 plz~');
    }
}

export { loginUser, SignupUserAPI, checkIdAPI, sendEmailAPI, checkEmailAPI, registerSellerAPI };
