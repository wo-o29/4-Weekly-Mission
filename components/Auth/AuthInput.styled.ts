import styled from 'styled-components';
import Image from 'next/image';

interface InputStyleProps {
  $error: unknown;
}

export const InputBox = styled.div`
  position: relative;
`;

export const LabelText = styled.label`
  font-size: 0.875rem;
  margin: 1.5rem 0 0.75rem;
  display: inline-block;
`;

export const Input = styled.input<InputStyleProps>`
  padding: 1.125rem 0.9375rem;
  border-radius: 0.5rem;
  background-color: #fff;
  outline: none;
  border: ${({ $error }) => ($error ? '1px solid #ff5b56' : '1px solid #ccd5e3')};
  width: calc(100% - 2.1rem);

  &:focus {
    border: 1px solid #6d6afe;
  }
`;
export const ErrorMessage = styled.div`
  font-size: 0.875rem;
  color: #ff5b56;
  margin-top: 0.5rem;
`;

export const EyeIcon = styled(Image)`
  position: absolute;
  right: 1rem;
  top: 4.2rem;
  cursor: pointer;
  font-size: 0.9rem;
`;
