import api from './axios';
import { API_PATH } from './apiPath';

export const getUserInfo = async () => {
  try {
    const response = await api.get(API_PATH.GET_USER_INFO);
    return response.data[0];
  } catch (error: any) {
    return console.error(error);
  }
};
