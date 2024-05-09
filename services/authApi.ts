import { API_PATH } from './api-path';
import api from './axios';
import { userInfoType } from '../types/type';

// // 로그인 로직
export const login = async (userInfo: userInfoType) => {
  const response = await api.post(API_PATH.SIGNIN, userInfo);
  return response.data;
};

// 회원가입 로직(이메일 중복 확인)
export const register = async (userInfo: userInfoType) => {
  await api.post(API_PATH.CHECK_EMAIL, {
    email: userInfo.email
  });

  const response = await api.post(API_PATH.SIGNUP, userInfo);
  return response.data;
};
