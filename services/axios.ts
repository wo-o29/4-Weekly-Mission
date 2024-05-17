import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
});

api.interceptors.request.use((config) => {
  const [_, accessToken] = document.cookie.split('=');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;
