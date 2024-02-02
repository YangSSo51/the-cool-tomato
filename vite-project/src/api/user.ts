import { mainAxios } from "./http";
import { AxiosHeaders, AxiosError } from "axios";
import { RegisterUser, RegisterSeller } from "../types/DataTypes";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "users";

async function loginUser(data: { loginId: string; password: string }) {
    try {
        const response = await http.post(`${url}/login`, data);
        const responseData = response.data
        if (responseData.status === 201) {
            console.log("로그인");
            return responseData
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error);
            if (error.response) {
              console.log(error.response.data.reason); // 'reason' 출력
              if (error.response.status === 401) {
                if (error.response.data.divisionCode === 'B003') {
                    throw new Error("비밀번호가 일치하지 않습니다.");
                } else {
                    console.log("미가입");
                    throw new Error("가입된 아이디가 아닙니다.");
                }
              }
            }
            console.log("에러에러에러에러에러");
          }
        }
}

async function signupUserAPI(data: RegisterUser) {

    try {
        const response = await http.post(`${url}/join`, data)
        const responseData = response.data
        if (responseData.status === 201) {
            console.log("잘됨");
            return 1
        } else if (responseData.status === 409) {
            console.log("이미 가입된 이메일");
            return 33
        }
    } catch (error) {
        if (error instanceof Error) {
            const axiosError = error as AxiosError;
            console.error(error);
            if (axiosError.response && axiosError.response.status === 409) {
              console.log("이미 가입된 이메일");
              return 33;
            }
            console.log("에러에러에러에러에러");
        }
    }
}

async function checkIdAPI(data: {id: string}) {

    try {
        const response = await http.get(`${url}/join/check-login-id/${data.id}`)
        const responseData = response.data;
        console.log(responseData)
        if (responseData.status === 200 && responseData.data.duplicate === false) {
            return 1
        } else {
            console.log("아이디가 중복되었거나 요청에 문제가 있습니다.");
        }
    } catch (error) {
        console.error(error);
    }
}

async function sendEmailAPI(data: {email: string}) {

    try {
        const response = await http.post(`${url}/join/check-email`, data);
        const responseData = response.data;
        if (responseData.status === 201) {
            console.log("이메일 인증이 성공적으로 완료됐습니다");
            return 1
        } else {
            console.log("아이디가 중복되었거나 요청에 문제가 있습니다.");
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
}

async function checkEmailAPI(data: {email: string, code: string}) {
    try {
        const response = await http.get(`${url}/join/check-email-verifications/${data.email}/${data.code}`)
        const responseData = response.data;
        if (responseData.status === 200 && responseData.data.verify === true) {
            console.log("이메일 인증이 성공적으로 완료됐습니다");
            return 1
        } else {
            console.log(responseData)
        }
    } catch (error) {
        console.error(error);
    }
}

async function registerSellerAPI(data: RegisterSeller, accessToken: string) {
    console.log("판매자신청좀하겠습니다.~!!!!!!!", JSON.stringify(data))
    try {
        const response = await http.post(`${url}/sellers`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
        const responseData = response.data
        if (responseData.status === 201) {
            console.log("성공~!");
            return responseData
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error);
            if (error.response) {
              console.log(error.response.data.reason); // 'reason' 출력
              if (error.response.status === 401) {
                if (error.response.data.divisionCode === 'B008') {
                    throw new Error("로그인 여부를 다시 확인해주세요");
                } else {
                    console.log("미가입");
                    throw new Error("JWT 문제");
                }
              }
            }
            console.log("에러에러에러에러에러");
        }
    }
}

async function findIdAPI(data: {email: string}) {
    console.log("아 아이디 찾을거라고~!")
    try {
        const response = await http.get(`${url}/find-login-id/${data.email}`)
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("이메일 전송이 완료되었습니다");
        } else if (responseData.status === 401 && responseData.divisionCode === "B005") {
            console.log("가입된 이메일이 아닙니다 회원가입 ㄱ");
        } else {
            console.log(responseData)
            console.log("걍 문제있음")
        }
    } catch (error) {
        console.error(error);
        console.log("오류임")
    }
}

async function findPwAPI(data: {loginId: string, email: string}) {
    console.log("비번 찾자.. 할수잇어")
    try {
        const response = await http.post(`${url}/find-password`, data)
        if (response.status === 201) {
            console.log("비밀번호 찾기 성공");
            return 1; // 성공을 나타내는 값 (원하는 값으로 변경 가능)
          } else if (response.status === 400) {
            console.log("올바른 아이디 혹은 이메일이 아님요");
            return 0;
          } else if (response.status === 401) {
            console.log("아이디와 이메일의 가입정보가 일치하지 않습니다")
          }
        } catch (error) {
          console.error("비밀번호 찾기 실패", error);
          return 0;
        }
}

async function logoutAPI(accessToken: string) {
    console.log("로그아웃")
    console.log(accessToken)
    try {
        const response = await http.delete(`${url}/logout`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });
        const responseData = response.data;
        if (responseData.status === 200) {
            console.log("로그아웃 성공")
            }
        return response
        } catch(error) {
            console.log(error)
            throw error;
        }
}

export { loginUser, signupUserAPI, checkIdAPI, sendEmailAPI, checkEmailAPI, registerSellerAPI, findIdAPI, findPwAPI, logoutAPI };

