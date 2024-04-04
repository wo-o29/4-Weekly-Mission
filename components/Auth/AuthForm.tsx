import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { API_PATH } from '../../services/api-path';
import * as Styled from './AuthForm.styled';
import FETCH_API from '../../services/fetch-data';
import AuthInput from './AuthInput';
import setLocalstroage from '../../utils/setLocalstroage';
import AUTH_ERROR from '../../constant/authError';
import AUTH_TEXT from '../../constant/authText';
import { UserInput, UserInputType } from '../../types/type';

interface AuthFormProps {
  isRegister: boolean;
}

const ACCESSTOKEN = 'accessToken';

function AuthForm({ isRegister }: AuthFormProps) {
  const router = useRouter();
  const methods = useForm<UserInput>({ mode: 'onBlur' });

  const setFieldError = (fieldName: UserInputType, errorMessage: string) => {
    methods.setError(fieldName, {
      type: 'error',
      message: errorMessage
    });
  };

  // 로그인 로직
  const login = async (userInput: UserInput) => {
    try {
      const response = await FETCH_API.post(API_PATH.SIGNIN, userInput);
      if (!response.ok) {
        throw AUTH_ERROR.LOGIN;
      }
      const result = await response.json();
      setLocalstroage(ACCESSTOKEN, result.data.accessToken);
      router.push('/folder');
    } catch (error: any) {
      setFieldError(AUTH_TEXT.TYPE_EMAIL, error[AUTH_TEXT.EMAIL]);
      setFieldError(AUTH_TEXT.TYPE_PASSWORD, error[AUTH_TEXT.PASSWORD]);
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
  const register = async (userInput: UserInput) => {
    try {
      passwordCompare(userInput.password, userInput[AUTH_TEXT.PASSWORD_CONFIRM]);
      const emailCheckResponse = await FETCH_API.post(API_PATH.CHECK_EMAIL, {
        email: userInput.email
      });
      if (!emailCheckResponse.ok) {
        throw AUTH_ERROR.EMAIL_DUPLICATION;
      }

      const registerResponse = await FETCH_API.post(API_PATH.SIGNUP, userInput);
      if (!registerResponse.ok) {
        throw AUTH_ERROR.REGISTER;
      }
      const result = await registerResponse.json();
      setLocalstroage(ACCESSTOKEN, result.data.accessToken);
      router.push('/folder');
    } catch (error: any) {
      setFieldError(AUTH_TEXT.TYPE_EMAIL, error[AUTH_TEXT.EMAIL]);
      setFieldError(AUTH_TEXT.TYPE_PASSWORD, error[AUTH_TEXT.PASSWORD]);
      setFieldError(AUTH_TEXT.PASSWORD_CONFIRM, error[AUTH_TEXT.PASSWORD_CONFIRM]);
    }
  };

  const onSubmit = (userInput: UserInput) => {
    if (isRegister) {
      // isRegister => true일 경우 회원가입, false인 경우 로그인
      register(userInput);
      return;
    }
    login(userInput);
  };

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={methods.handleSubmit(onSubmit)}>
        <AuthInput
          type="email"
          name={AUTH_TEXT.TYPE_EMAIL}
          labelText={AUTH_TEXT.EMAIL}
          placeholder="이메일을 입력해주세요"
        />
        <AuthInput
          type="password"
          name={AUTH_TEXT.TYPE_PASSWORD}
          labelText={AUTH_TEXT.PASSWORD}
          placeholder={isRegister ? '영문, 숫자를 조합해 8자 이상 입력해 주세요' : '비밀번호를 입력해 주세요'}
        />
        {isRegister && (
          <AuthInput
            type="password"
            name={AUTH_TEXT.PASSWORD_CONFIRM}
            labelText={AUTH_TEXT.PASSWORD_CONFIRM}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          />
        )}
        <Styled.Button type="submit">{isRegister ? '회원가입' : '로그인'}</Styled.Button>
      </Styled.Form>
    </FormProvider>
  );
}

export default AuthForm;
