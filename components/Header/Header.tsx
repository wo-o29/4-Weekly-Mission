import Link from 'next/link';
import Image from 'next/image';
import * as Styled from './Header.styled';
import PAGE_PATH from '../../constant/pagePath';
import { useUserInfo } from '../../hooks/useUserInfo';

const HeaderLogoImg = '/icon/header-logo.svg';

interface HeaderProps {
  isSticky?: boolean;
}

function Header({ isSticky = true }: HeaderProps) {
  const userInfo = useUserInfo();

  return (
    <Styled.Header $isSticky={isSticky}>
      <Styled.Nav>
        <Link href={PAGE_PATH.main}>
          <Image width="133" height="24" src={HeaderLogoImg} alt="롤링 로고 이미지" priority />
        </Link>
        {userInfo ? (
          <Styled.UserInfoBox>
            <Styled.UserImage width={28} height={28} src={userInfo?.image_source} alt="유저 프로필 이미지" />
            <Styled.UserEmail>{userInfo?.email}</Styled.UserEmail>
          </Styled.UserInfoBox>
        ) : (
          <Styled.LoginButton href="/signin">로그인</Styled.LoginButton>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
}

export default Header;
