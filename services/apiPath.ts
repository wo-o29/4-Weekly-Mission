interface ApiPath {
  SIGNIN: string;
  SIGNUP: string;
  CHECK_EMAIL: string;
  GET_FOLDER_OWNER_INFO: string;
  FOLDER: string;
  LINK: string;
  GET_USER_INFO: string;
}

const API_PATH: ApiPath = {
  SIGNIN: '/auth/sign-in',
  SIGNUP: '/auth/sign-up',
  CHECK_EMAIL: '/users/check-email',
  GET_FOLDER_OWNER_INFO: '/users/',
  FOLDER: '/folders',
  LINK: '/links',
  GET_USER_INFO: '/users'
} as const;

export { API_PATH };
