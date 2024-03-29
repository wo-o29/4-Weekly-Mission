import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: var(--Linkbrary-bg);
  height: 100vh;
`;

export const Main = styled.main`
  padding: 12rem 0 0;
  margin: 0 auto;
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1199px) {
    padding: 12rem 0 0rem;
  }

  @media (max-width: 767px) {
    padding: 7.5rem 2rem 0rem;
    width: auto;
    max-width: 25rem;
  }
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
`;
