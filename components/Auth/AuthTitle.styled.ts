import styled from 'styled-components';
import Link from 'next/link';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ActionText = styled(Link)`
  color: var(--Linkbrary-primary-color);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  display: inline;
`;
