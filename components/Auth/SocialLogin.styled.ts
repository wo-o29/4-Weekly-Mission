import styled from 'styled-components';
import Image from 'next/image';

export const SnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background-color: var(--Linkbrary-gray10);
  border: 1px solid var(--Linkbrary-gray20);
  border-radius: 0.5rem;
`;

export const SnsText = styled.p`
  font-size: 0.875rem;
  color: var(--Linkbrary-gray100);
`;

export const SnsList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-top: 0.3rem;
`;

export const SnsListItem = styled.li`
  position: relative;
`;

export const AbsoluteImage = styled(Image)`
  position: absolute;
  z-index: 999;
`;

export const KakaoImage = styled(AbsoluteImage)`
  top: 0.6rem;
  left: 0.5rem;
`;

export const GoogleImage = styled(AbsoluteImage)`
  top: 0.6rem;
  left: 0.7rem;
`;
