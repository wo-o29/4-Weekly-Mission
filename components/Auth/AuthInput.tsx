import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Styled from './AuthInput.styled';
import AUTH_TEXT from '../../constant/authText';

interface InputProps {
  type: string;
  name: string;
  labelText: string;
  placeholder: string;
}

const eyeIcon = '/icon/eye-on.svg';
const eyeSlashIcon = '/icon/eye-off.svg';

function AuthInput({ type, name, labelText, placeholder }: InputProps) {
  const [isView, setIsView] = useState<boolean>(false);
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const handleClick = () => {
    setIsView((prev) => !prev);
  };

  const handleInputType = (defaultType: string, isViewStatus: boolean): string => {
    if (defaultType === AUTH_TEXT.TYPE_EMAIL) {
      return AUTH_TEXT.TYPE_EMAIL;
    }
    if (isViewStatus) {
      return AUTH_TEXT.TYPE_TEXT;
    }
    return AUTH_TEXT.TYPE_PASSWORD;
  };

  return (
    <>
      <Styled.InputBox>
        <Styled.LabelText htmlFor={labelText}>{labelText}</Styled.LabelText>
        <Styled.Input
          id={labelText}
          type={handleInputType(type, isView)}
          placeholder={placeholder}
          $error={errors[name]?.message}
          autoComplete="current-password"
          {...register(name)}
        />
        {type === AUTH_TEXT.TYPE_PASSWORD && (
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
      {errors[name] && <Styled.ErrorMessage>{`${errors[name]?.message}`}</Styled.ErrorMessage>}
    </>
  );
}

export default AuthInput;
