import { NextRouter } from 'next/router';

const ACCESSTOKEN = 'accessToken';

const authCheck = (router: NextRouter) => {
  // localStorage.clear();
  if (localStorage.getItem(ACCESSTOKEN)) {
    router.push('/folder');
  }
};

export default authCheck;
