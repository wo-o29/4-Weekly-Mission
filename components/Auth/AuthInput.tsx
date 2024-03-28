import { useState, ChangeEvent, forwardRef, ForwardedRef } from 'react';
import * as Styled from './AuthInput.styled';
import { REGEXP_EMAIL, REGEXP_PASSWORD } from '../../utils/regExp';

interface InitialErrorMessage {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface InputProps {
  ref: any;
  type: string;
  labelText: string;
  placeholder: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<InitialErrorMessage>>;
}

const PASSWORD: string = 'password';
const TEXT: string = 'text';

const eyeIcon = '/icon/eye-on.svg';
const eyeSlashIcon = '/icon/eye-off.svg';

const AuthInput = forwardRef(function AuthInput(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { type, labelText, placeholder, error, setError } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const [isView, setIsView] = useState<boolean>(false);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setIsView((prev) => !prev);
  };

  const handleError = () => {
    // 이메일 에러
    switch (labelText) {
      case '이메일':
        if (!inputValue) {
          setError((prev) => ({
            ...prev,
            email: '이메일을 입력해 주세요'
          }));
          return;
        }

        if (!REGEXP_EMAIL.test(inputValue)) {
          setError((prev) => ({
            ...prev,
            email: '올바른 이메일 주소가 아닙니다.'
          }));
          return;
        }
        setError((prev) => ({
          ...prev,
          email: ''
        }));
        return;

      case '비밀번호':
        if (!inputValue) {
          setError((prev) => ({
            ...prev,
            password: '비밀번호를 입력해 주세요'
          }));
          return;
        }

        if (!REGEXP_PASSWORD.test(inputValue)) {
          setError((prev) => ({
            ...prev,
            password: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
          }));
          return;
        }
        setError((prev) => ({
          ...prev,
          password: ''
        }));
        return;

      case '비밀번호 확인':
        if (!inputValue) {
          setError((prev) => ({
            ...prev,
            password: '비밀번호를 입력해 주세요'
          }));
          return;
        }

        if (!REGEXP_PASSWORD.test(inputValue)) {
          setError((prev) => ({
            ...prev,
            passwordConfirm: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
          }));
          return;
        }
        setError((prev) => ({
          ...prev,
          passwordConfirm: ''
        }));
        return;
    }
  };

  return (
    <>
      <Styled.InputBox>
        <Styled.LabelText htmlFor={labelText}>{labelText}</Styled.LabelText>
        <Styled.Input
          ref={ref}
          id={labelText}
          value={inputValue}
          onBlur={handleError}
          onChange={(e) => handleInputValue(e)}
          type={type === TEXT ? TEXT : isView ? TEXT : PASSWORD}
          placeholder={placeholder}
          $error={error}
          autoComplete="current-password"
        />
        {type === PASSWORD && (
          <Styled.EyeIcon
            data-status={labelText}
            src={isView ? eyeSlashIcon : eyeIcon}
            width={16}
            height={16}
            alt="눈 모양 아이콘"
            onClick={handleClick}
          />
        )}
      </Styled.InputBox>
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </>
  );
});

export default AuthInput;
