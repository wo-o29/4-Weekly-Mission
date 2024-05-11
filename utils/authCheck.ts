import { NextRouter } from 'next/router';
import localstorageControl from './localstorageControl';
import PAGE_PATH from '../constant/pagePath';

const ACCESS_TOKEN = 'accessToken';
const userAccessUrl = /[share|folder]/;
const guestAccessUrl = /[signin|signup]/;

const authCheck = (router: NextRouter) => {
  // localStorage.clear();
  const Token = localstorageControl('get', ACCESS_TOKEN);
  const Path = router.asPath;
  if (!Token && userAccessUrl.test(Path)) {
    router.push(PAGE_PATH.signin);
  }
};

export default authCheck;
