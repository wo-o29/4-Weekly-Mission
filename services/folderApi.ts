import { DefaultCategoryType } from '../types/type';
import { API_PATH } from './apiPath';
import api from './axios';

const INITIAL_CATEGORY: DefaultCategoryType[] = [
  {
    id: 0,
    name: '전체',
    link: { count: 0 }
  }
];

export const userCategoryLoad = async (): Promise<any> => {
  try {
    const response = await api.get(API_PATH.FOLDER);
    return [...INITIAL_CATEGORY, ...response.data];
  } catch (error) {
    return console.error(error);
  }
};

export const allLinkLoad = async (): Promise<any> => {
  try {
    const response = await api.get(API_PATH.LINK);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const selectLinkLoad = async (id: number): Promise<any> => {
  try {
    const response = await api.get(`${API_PATH.FOLDER}/${id}/links`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

// eslint-disable-next-line consistent-return
export const bookMarkLink = async (linkInfo: any) => {
  try {
    await api.put(`${API_PATH.LINK}/${linkInfo.id}`, {
      favorite: !linkInfo.isFavorite
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
