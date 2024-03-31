import { NextRouter } from 'next/router';

const ACCESSTOKEN = 'accessToken';

const authCheck = (router: NextRouter) => {
  if (localStorage.getItem(ACCESSTOKEN)) {
    router.push('/folder');
  }
};

export default authCheck;
