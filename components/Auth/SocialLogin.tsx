import Image from 'next/image';
import * as Styled from './SocialLogin.styled';

const GoogleBackgroundImg = '/icon/google-background.svg';
const GoogleImg = '/images/google.webp';
const KaKaoImg = '/icon/kakao.svg';
const KaKaoBackgroundImg = '/icon/kakao-background.svg';

const GOOGLE_LOGIN_URL = 'https://accounts.google.com/v3/sign/';
const KAKAO_LOGIN_URL = 'https://accounts.kakao.com/login/';

function SocialLogin() {
  return (
    <Styled.SnsBox>
      <Styled.SnsText>소셜 로그인</Styled.SnsText>
      <Styled.SnsList>
        <Styled.SnsListItem>
          <a href={GOOGLE_LOGIN_URL} target="_blank" rel="noopener noreferrer">
            <Image width={44} height={44} src={GoogleBackgroundImg} alt="구글 배경 이미지" />
            <Styled.GoogleImage width={22} height={22} src={GoogleImg} alt="구글 이미지" />
          </a>
        </Styled.SnsListItem>
        <Styled.SnsListItem>
          <a href={KAKAO_LOGIN_URL} target="_blank" rel="noopener noreferrer">
            <Styled.KakaoImage width={26} height={24} src={KaKaoImg} alt="카카오 이미지" />
            <Image width={42} height={42} src={KaKaoBackgroundImg} alt="카카오 배경 이미지" />
          </a>
        </Styled.SnsListItem>
      </Styled.SnsList>
    </Styled.SnsBox>
  );
}

export default SocialLogin;
