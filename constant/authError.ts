import AUTH_TEXT from './authText';

const AUTH_ERROR = {
  LOGIN: {
    [AUTH_TEXT.TYPE_EMAIL]: '이메일을 확인해 주세요.',
    [AUTH_TEXT.TYPE_PASSWORD]: '비밀번호를 확인해 주세요.',
    [AUTH_TEXT.PASSWORD_CONFIRM]: ''
  },
  PASSWORD_COMPARE: {
    [AUTH_TEXT.TYPE_EMAIL]: '',
    [AUTH_TEXT.TYPE_PASSWORD]: '',
    [AUTH_TEXT.PASSWORD_CONFIRM]: '비밀번호가 일치하지 않아요.'
  },
  EMAIL_DUPLICATION: {
    [AUTH_TEXT.TYPE_EMAIL]: '이미 사용 중인 이메일입니다.',
    [AUTH_TEXT.TYPE_PASSWORD]: '',
    [AUTH_TEXT.PASSWORD_CONFIRM]: ''
  },
  REGISTER: {
    [AUTH_TEXT.TYPE_EMAIL]: '회원가입에 실패하였습니다. 잠시 후에 다시 회원가입 해주세요!',
    [AUTH_TEXT.TYPE_PASSWORD]: '',
    [AUTH_TEXT.PASSWORD_CONFIRM]: ''
  }
} as const;

export default AUTH_ERROR;
