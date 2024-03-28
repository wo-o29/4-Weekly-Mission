import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { API_PATH } from '../../services/api-path';
import * as Styled from './AuthForm.styled'
import FETCH_API from '../../services/fetch-data';
import AuthInput from './AuthInput';

interface AuthFormProps {
  isRegister: boolean;
}

interface InitialErrorMessage{
  email: string;
  password: string;
  passwordConfirm: string;
}

const INITIAL_ERROR_MESSAGE: InitialErrorMessage = {
  email: '',
  password: '',
  passwordConfirm: ''
}

const ACCESSTOKEN = 'accessToken';

function AuthForm({ isRegister }: AuthFormProps) {
  const [errorMessage, setErrorMessage] = useState(INITIAL_ERROR_MESSAGE);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 로그인 로직
  const login = async () => {
    try{
      const userInfo = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      };
      const response = await FETCH_API.post(API_PATH.SIGNIN, userInfo);
      if (!response.ok) {
        setErrorMessage((prev) => ({
          ...prev,
          email: '이메일을 확인해 주세요.',
          password: '비밀번호를 확인해 주세요.'
        }));
        throw new Error("로그인 실패 ㅇ_ㅇ!")
      }
      const result = await response.json();
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      router.push('/share');
    }catch(err){
      console.error(err)
    }
   
  };

  // 패스워드 인풋 값 비교
  const passwordCompare = (password: string | undefined, passwordConfirm: string | undefined) => {
    if (password === passwordConfirm) {
      return;
    }
    setErrorMessage((prev) => ({
      ...prev,
      passwordConfirm: '비밀번호가 일치하지 않아요.'
    }));
    throw new Error('비밀번호 일치 오류!');
  };

  // 회원가입 로직(이메일 중복 확인)
  const register = async () => {
    try {
      passwordCompare(passwordRef.current?.value, passwordConfirmRef.current?.value);
      const emailCheckResponse = await FETCH_API.post(API_PATH.CHECK_EMAIL, {
        email: emailRef.current?.value,
      });
      if (!emailCheckResponse.ok) {
        setErrorMessage((prev) => ({
          ...prev,
          email: '이미 사용 중인 이메일입니다.',
        }));
        throw new Error('중복된 이메일 ㅇ_ㅇ!');
      }
      const userInfo = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      };
      const registerResponse = await FETCH_API.post(API_PATH.SIGNUP, userInfo);
      if (!registerResponse.ok) {
        throw new Error('회원가입 실패 ㅇ_ㅇ!');
      }
      const result = await registerResponse.json();
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      router.push('/share');
    } catch (err) {
      console.error(err);
    }
  };

  // 폼 제출
  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegister) { // isRegister => true일 경우 회원가입, false인 경우 로그인
      register();
      return;
    }
    login();
  };

  return (
    <Styled.Form onSubmit={handleFormSumbit}>
      <AuthInput ref={emailRef} type='text' labelText='이메일' placeholder='이메일을 입력해주세요' error={errorMessage.email} setError={setErrorMessage}/>
      <AuthInput ref={passwordRef} type='password' labelText='비밀번호' placeholder={isRegister ? '영문, 숫자를 조합해 8자 이상 입력해 주세요' : '비밀번호를 입력해 주세요'} error={errorMessage.password} setError={setErrorMessage}/>
      {isRegister && <AuthInput ref={passwordConfirmRef} type='password' labelText='비밀번호 확인' placeholder='비밀번호와 일치하는 값을 입력해 주세요' error={errorMessage.passwordConfirm} setError={setErrorMessage}/>  }
      <Styled.Button type="submit">
        {isRegister ? '회원가입' : '로그인'}
      </Styled.Button>
    </Styled.Form>
  );
}

export default AuthForm;
