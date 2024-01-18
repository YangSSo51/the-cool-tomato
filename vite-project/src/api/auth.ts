import { authAxios } from './common';

type UserInfo = {
    id: string;
    pw?: string;
    token: string;
}

// 계정 정보 조회
export const getUserInfoAPI = async (id: string) => {
  let userinfo: UserInfo = {
    id: '',
    token: '',
  };
  await authAxios
    .get(`/user/${id}`)
    .then(({ data }: { data: UserInfo }) => {
      console.log(data);
      userinfo = data;
    })
    .catch(err => {
      console.log(err);
      alert('유저 정보 조회에 실패했습니다.');
    });
  return userinfo;
};

// 계정 정보 업데이트
export const updateUserInfoAPI = (
  id: string,
  password: string,
  token: string,
) => {
  authAxios
    .put(`/user`, { id: id, pw: password, token: token })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      alert('updateUserInfoAPI failed');
    });
};
