import { NextRouter } from 'next/router';
import localstorageControl from './localstorageControl';
import PAGE_PATH from '../constant/pagePath';

const ACCESS_TOKEN = 'accessToken';

const authCheck = (router: NextRouter) => {
  // localStorage.clear();
  const TOKEN = localstorageControl('get', ACCESS_TOKEN);
  if (!TOKEN) {
    router.push(PAGE_PATH.signin);
  }
};

export default authCheck;
