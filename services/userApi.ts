import api from './axios';
import { API_PATH } from './apiPath';
import { TFolderInfo } from '../types/type';

export const getUserInfo = async () => {
  try {
    const response = await api.get(API_PATH.GET_USER_INFO);
    return response.data[0];
  } catch (error: any) {
    return console.error(error);
  }
};

export const getFolderInfo = async (id: any) => {
  try {
    const response = await api.get(API_PATH.FOLDER + id);
    return response.data[0];
  } catch (error: any) {
    return console.error(error);
  }
};

export const getFolderOwnerInfo = async (id: any) => {
  try {
    const response = await api.get(API_PATH.GET_FOLDER_OWNER_INFO + id);
    return response.data[0];
  } catch (error: any) {
    return console.error(error);
  }
};

export const getLinkList = async (id: any) => {
  try {
    const response = await api.get(`${API_PATH.FOLDER}${id}/links`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    return console.error(error);
  }
};
