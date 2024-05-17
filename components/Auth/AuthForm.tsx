import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Styled from './AuthForm.styled';
import AuthInput from './AuthInput';
import AUTH_ERROR from '../../constant/authError';
import AUTH_TEXT from '../../constant/authText';
import { UserInputs, UserInputType } from '../../types/type';
import { LoginSchema, RegisterSchema } from '../../constant/schema';
import PAGE_PATH from '../../constant/pagePath';
import { useAuthMutation } from '../../hooks/useAuthMutation';

interface AuthFormProps {
  isRegister: boolean;
}

function AuthForm({ isRegister }: AuthFormProps) {
  const router = useRouter();
  const methods = useForm<UserInputs>({
    mode: 'onBlur',
    resolver: zodResolver(isRegister ? RegisterSchema : LoginSchema)
  });

  const setFieldError = (errorInfo: UserInputs): void => {
    Object.entries(errorInfo).forEach((info) => {
      const [key, value] = info;
      methods.setError(key as UserInputType, {
        type: 'error',
        message: value
      });
    });
  };

  const { mutate, isPending } = useAuthMutation(isRegister);

  const onSubmit = (userInput: UserInputs): void => {
    const userInfo = {
      email: userInput.email,
      password: userInput.password
    };

    mutate(userInfo, {
      onSuccess: () => {
        router.push(PAGE_PATH.folder);
      },
      onError: (error: any) => {
        if (error.response.status === 409) {
          // 이메일 중복 확인 에러
          setFieldError(AUTH_ERROR.EMAIL_DUPLICATION);
        }

        if (error.response.status === 400) {
          if (error.response.data.message === 'Invalid login credentials') {
            // 로그인 에러
            setFieldError(AUTH_ERROR.LOGIN);
            return;
          }

          // 회원가입 에러
          setFieldError(AUTH_ERROR.REGISTER);
        }
      }
    });
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
        <Styled.Button disabled={isPending} type="submit">
          {isRegister ? '회원가입' : '로그인'}
        </Styled.Button>
      </Styled.Form>
    </FormProvider>
  );
}

export default AuthForm;
