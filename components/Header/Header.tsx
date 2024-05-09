import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import * as Styled from './Header.styled';
import { getUserInfo } from '../../services/userApi';
import PAGE_PATH from '../../constant/pagePath';
import QUERY_KEY from '../../services/queryKey';

const HeaderLogoImg = '/icon/header-logo.svg';

interface HeaderProps {
  isSticky?: boolean;
}

function Header({ isSticky = true }: HeaderProps) {
  const { data } = useQuery({
    queryKey: QUERY_KEY.userInfo,
    queryFn: getUserInfo,
    staleTime: 60 * 60 * 1000,
    gcTime: 600 * 60 * 1000
  });

  return (
    <Styled.Header $isSticky={isSticky}>
      <Styled.Nav>
        <Link href={PAGE_PATH.main}>
          <Image width="133" height="24" src={HeaderLogoImg} alt="롤링 로고 이미지" />
        </Link>
        {data ? (
          <Styled.UserInfoBox>
            <Styled.UserImage width={28} height={28} src={data?.image_source} alt="유저 프로필 이미지" />
            <Styled.UserEmail>{data?.email}</Styled.UserEmail>
          </Styled.UserInfoBox>
        ) : (
          <Styled.LoginButton href="/signin">로그인</Styled.LoginButton>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
}

export default Header;
