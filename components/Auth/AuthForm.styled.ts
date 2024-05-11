import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 1rem 1.25rem;
  border-radius: 0.4rem;
  background: var(--gra-purpleblue-to-skyblue);
  border: none;
  outline: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--Grey-Light);
  margin-top: 1.68rem;

  &:disabled {
    background: var(--gray20);
    color: var(--black);
  }
`;
