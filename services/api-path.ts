interface ApiPath {
  SIGNIN: string;
  SIGNUP: string;
  CHECK_EMAIL: string;
  HEADER_USER_INFO: string;
  SAMPLE_FOLDER: string;
  USER_FOLDER: string;
  ALL_LINK: string;
  CATEGORY_LINK: string;
  GET_USER_INFO: string;
}

const API_PATH: ApiPath = {
  SIGNIN: '/auth/sign-in',
  SIGNUP: '/auth/sign-up',
  CHECK_EMAIL: '/users/check-email',
  HEADER_USER_INFO: '/api/users/1',
  SAMPLE_FOLDER: '/api/sample/folder',
  USER_FOLDER: '/api/users/11/folders',
  ALL_LINK: '/api/users/11/links',
  CATEGORY_LINK: '/api/users/11/links?folderId=',
  GET_USER_INFO: '/api/users'
};

export { API_PATH };
