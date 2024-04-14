import { NextRouter } from 'next/router';
import { API_PATH } from '../services/api-path';
import FETCH_API from '../services/fetch-data';

const ACCESSTOKEN = 'accessToken';

const authCheck = async (router: NextRouter) => {
  // localStorage.clear();
  const TOKEN = localStorage.getItem(ACCESSTOKEN);
  if (!TOKEN) {
    router.push('/signin');
  }
  const res = await FETCH_API.post(API_PATH.GET_USER_INFO, TOKEN);
};

export default authCheck;
