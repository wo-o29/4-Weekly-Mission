import api from './axios';
import { API_PATH } from './apiPath';

interface LinkType {
  url: string;
  folderId: number;
}

export const addLink = async (data: LinkType): Promise<any> => {
  try {
    const response = await api.post(API_PATH.LINK, data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const deleteLink = async (id: number): Promise<any> => {
  try {
    const response = await api.delete(`${API_PATH.LINK}/${id}`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const deleteFolder = async (id: number): Promise<any> => {
  try {
    const response = await api.delete(`${API_PATH.FOLDER}/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};
