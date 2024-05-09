interface ApiPath {
  SIGNIN: string;
  SIGNUP: string;
  CHECK_EMAIL: string;
  HEADER_USER_INFO: string;
  GET_FOLDER_OWNER_INFO: string;
  FOLDER: string;
  ALL_LINK: string;
  CATEGORY_LINK: string;
  GET_USER_INFO: string;
}

const API_PATH: ApiPath = {
  SIGNIN: '/auth/sign-in',
  SIGNUP: '/auth/sign-up',
  CHECK_EMAIL: '/users/check-email',
  HEADER_USER_INFO: '/api/users/1',
  GET_FOLDER_OWNER_INFO: '/users/',
  FOLDER: '/folders/',
  ALL_LINK: '/api/users/11/links',
  CATEGORY_LINK: '/api/users/11/links?folderId=',
  GET_USER_INFO: '/users'
};

export { API_PATH };
