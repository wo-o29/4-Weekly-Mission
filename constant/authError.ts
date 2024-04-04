const EMAIL = '이메일';
const PASSWORD = '비밀번호';
const PASSWORD_CONFIRM = '비밀번호 확인';

const AUTH_ERROR = {
  LOGIN: {
    [EMAIL]: '이메일을 확인해 주세요.',
    [PASSWORD]: '비밀번호를 확인해 주세요.'
  },
  PASSWORD_COMPARE: {
    [EMAIL]: '',
    [PASSWORD]: '',
    [PASSWORD_CONFIRM]: '비밀번호가 일치하지 않아요.'
  },
  EMAIL_DUPLICATION: {
    [EMAIL]: '이미 사용 중인 이메일입니다.',
    [PASSWORD]: '',
    [PASSWORD_CONFIRM]: ''
  },
  REGISTER: {
    [EMAIL]: '회원가입에 실패하였습니다. 잠시 후에 다시 회원가입 해주세요!',
    [PASSWORD]: '',
    [PASSWORD_CONFIRM]: ''
  }
};

export default AUTH_ERROR;
