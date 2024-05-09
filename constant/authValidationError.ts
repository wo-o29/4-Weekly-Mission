import AUTH_TEXT from './authText';

interface ErrorScript {
  [key: string]: {
    [key: string]: string;
  };
}

const AUTH_VALIDATION_ERROR: ErrorScript = {
  [AUTH_TEXT.TYPE_EMAIL]: {
    [AUTH_TEXT.EMPTY_VALUE]: '이메일을 입력해 주세요',
    [AUTH_TEXT.VALIDATION]: '올바른 이메일 주소가 아닙니다.'
  },
  [AUTH_TEXT.TYPE_PASSWORD]: {
    [AUTH_TEXT.EMPTY_VALUE]: '비밀번호를 입력해 주세요',
    [AUTH_TEXT.VALIDATION]: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
  },
  [AUTH_TEXT.PASSWORD_CONFIRM]: {
    [AUTH_TEXT.EMPTY_VALUE]: '비밀번호 확인을 입력해 주세요',
    [AUTH_TEXT.VALIDATION]: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
  }
} as const;

export default AUTH_VALIDATION_ERROR;
