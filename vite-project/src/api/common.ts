import axios, { AxiosInstance } from 'axios';

const SERVER_ADDRESS = '/api';

export const authAxios: AxiosInstance = axios.create({
    baseURL: `${SERVER_ADDRESS}`,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token') || '',
    },
  });
  
  authAxios.defaults.withCredentials = true;
  
  export const defaultAxios: AxiosInstance = axios.create({
    baseURL: `${SERVER_ADDRESS}`,
  });
  
  authAxios.interceptors.response.use(
    res => res,
    err => {
      console.log('interceptor:' + err.response.status);
      if (err.response.status === 403) refreshAPI();
    },
  );

  // token에서 유저 정보 파싱하기
export const getUserID = () => {
    const token = localStorage.getItem('access_token');
    if (token === null) return '';
  
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.id;
  };
  
  export const logout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  };
  