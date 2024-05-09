import axios from 'axios';
import localstorageControl from '../utils/localstorageControl';

const ACCESS_TOKEN = 'accessToken';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
});

api.interceptors.request.use((config) => {
  const accessToken = localstorageControl('get', ACCESS_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;
