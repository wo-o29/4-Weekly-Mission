import { useState, ChangeEvent, forwardRef, ForwardedRef } from 'react';
import * as Styled from './AuthInput.styled';
import validateUserInput from '../../utils/validateUserInput';

interface InitialErrorMessage {
  [key: string]: string;
}

interface ErrorScript {
  [key: string]: {
    [key: string]: string;
  };
}

interface InputProps {
  ref: HTMLInputElement;
  type: string;
  labelText: string;
  placeholder: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<InitialErrorMessage>>;
}

const TYPE_PASSWORD = 'password';
const TYPE_TEXT = 'text';
const EMAIL = '이메일';
const PASSWORD = '비밀번호';
const PASSWORD_CONFIRM = '비밀번호 확인';
const EMPTY_VALUE = 'EMPTY_VALUE';
const VALIDATION = 'VALIDATION';
const NO_ERROR = 'NO_ERROR';

const eyeIcon = '/icon/eye-on.svg';
const eyeSlashIcon = '/icon/eye-off.svg';

const ERROR_SCRIPT: ErrorScript = {
  [EMAIL]: {
    [NO_ERROR]: '',
    [EMPTY_VALUE]: '이메일을 입력해 주세요',
    [VALIDATION]: '올바른 이메일 주소가 아닙니다.'
  },
  [PASSWORD]: {
    [NO_ERROR]: '',
    [EMPTY_VALUE]: '비밀번호를 입력해 주세요',
    [VALIDATION]: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
  },
  [PASSWORD_CONFIRM]: {
    [NO_ERROR]: '',
    [EMPTY_VALUE]: '비밀번호를 입력해 주세요',
    [VALIDATION]: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요'
  }
};
let errorType: string;
const AuthInput = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
    if (!inputValue) {
      errorType = EMPTY_VALUE;
    } else if (validateUserInput(labelText, inputValue)) {
      errorType = VALIDATION;
    } else {
      errorType = NO_ERROR;
    }

    setError((prev) => ({
      ...prev,
      [labelText]: ERROR_SCRIPT[labelText][errorType]
    }));
  };

  return (
    <>
      <Styled.InputBox>
        <Styled.LabelText htmlFor={labelText}>{labelText}</Styled.LabelText>
        <Styled.Input
          ref={ref}
          id={labelText}
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
          onBlur={handleError}
          type={type === TYPE_PASSWORD && !isView ? TYPE_PASSWORD : TYPE_TEXT}
          placeholder={placeholder}
          $error={error}
          autoComplete="current-password"
        />
        {type === TYPE_PASSWORD && (
          <Styled.EyeIcon
            data-status={labelText}
            src={isView ? eyeIcon : eyeSlashIcon}
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
