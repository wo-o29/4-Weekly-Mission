import { API_PATH } from './apiPath';
import api from './axios';
import { userInfoType } from '../types/type';
import { setCookie } from './cookie';
import ACCESS_TOKEN from '../constant/accessToken';

// // 로그인 로직
export const login = async (userInfo: userInfoType) => {
  const response = await api.post(API_PATH.SIGNIN, userInfo);
  setCookie(ACCESS_TOKEN, response.data.accessToken, {
    'max-age': 43200 // 24시간
  });
};

// 회원가입 로직(이메일 중복 확인)
export const register = async (userInfo: userInfoType) => {
  await api.post(API_PATH.CHECK_EMAIL, {
    email: userInfo.email
  });

  const response = await api.post(API_PATH.SIGNUP, userInfo);
  setCookie(ACCESS_TOKEN, response.data.accessToken, {
    'max-age': 43200 // 24시간
  });
};
