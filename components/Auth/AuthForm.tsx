import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { API_PATH } from '../../services/api-path';
import * as Styled from './AuthForm.styled';
import FETCH_API from '../../services/fetch-data';
import AuthInput from './AuthInput';
import setLocalstroage from '../../utils/setLocalstroage';
import AUTH_ERROR from '../../constant/authError';

interface AuthFormProps {
  isRegister: boolean;
}

const EMAIL = '이메일';
const PASSWORD = '비밀번호';
const PASSWORD_CONFIRM = '비밀번호 확인';

interface InitialErrorMessage {
  [key: string]: string;
}

const INITIAL_ERROR_MESSAGE: InitialErrorMessage = {
  [EMAIL]: '',
  [PASSWORD]: '',
  [PASSWORD_CONFIRM]: ''
};

const ACCESSTOKEN = 'accessToken';

function AuthForm({ isRegister }: AuthFormProps) {
  const [errorMessage, setErrorMessage] = useState<InitialErrorMessage>(INITIAL_ERROR_MESSAGE);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 로그인 로직
  const login = async () => {
    try {
      const userInfo = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      };
      const response = await FETCH_API.post(API_PATH.SIGNIN, userInfo);
      if (!response.ok) {
        throw AUTH_ERROR.LOGIN;
      }
      const result = await response.json();
      setLocalstroage(ACCESSTOKEN, result.data.accessToken);
      router.push('/folder');
    } catch (error: any) {
      setErrorMessage((prev) => ({
        ...prev,
        [EMAIL]: error[EMAIL],
        [PASSWORD]: error[PASSWORD]
      }));
    }
  };

  // 패스워드 인풋 값 비교
  const passwordCompare = (password: string | undefined, passwordConfirm: string | undefined) => {
    if (password === passwordConfirm) {
      return;
    }
    throw AUTH_ERROR.PASSWORD_COMPARE;
  };

  // 회원가입 로직(이메일 중복 확인)
  const register = async () => {
    try {
      passwordCompare(passwordRef.current?.value, passwordConfirmRef.current?.value);
      const emailCheckResponse = await FETCH_API.post(API_PATH.CHECK_EMAIL, {
        email: emailRef.current?.value
      });
      if (!emailCheckResponse.ok) {
        throw AUTH_ERROR.EMAIL_DUPLICATION;
      }
      const userInfo = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      };
      const registerResponse = await FETCH_API.post(API_PATH.SIGNUP, userInfo);
      if (!registerResponse.ok) {
        throw AUTH_ERROR.REGISTER;
      }
      const result = await registerResponse.json();
      setLocalstroage(ACCESSTOKEN, result.data.accessToken);
      router.push('/folder');
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  // 폼 제출
  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegister) {
      // isRegister => true일 경우 회원가입, false인 경우 로그인
      register();
      return;
    }
    login();
  };

  return (
    <Styled.Form onSubmit={handleFormSumbit}>
      <AuthInput
        ref={emailRef}
        type="email"
        labelText={EMAIL}
        placeholder="이메일을 입력해주세요"
        error={errorMessage[EMAIL]}
        setError={setErrorMessage}
      />
      <AuthInput
        ref={passwordRef}
        type="password"
        labelText={PASSWORD}
        placeholder={isRegister ? '영문, 숫자를 조합해 8자 이상 입력해 주세요' : '비밀번호를 입력해 주세요'}
        error={errorMessage[PASSWORD]}
        setError={setErrorMessage}
      />
      {isRegister && (
        <AuthInput
          ref={passwordConfirmRef}
          type="password"
          labelText={PASSWORD_CONFIRM}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          error={errorMessage[PASSWORD_CONFIRM]}
          setError={setErrorMessage}
        />
      )}
      <Styled.Button type="submit">{isRegister ? '회원가입' : '로그인'}</Styled.Button>
    </Styled.Form>
  );
}

export default AuthForm;
