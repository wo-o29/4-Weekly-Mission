import Head from 'next/head';

import * as Styled from '../../styles/signin.styled';
import AuthTitle from '../../components/Auth/AuthTitle';
import AuthForm from '../../components/Auth/AuthForm';
import SocialLogin from '../../components/Auth/SocialLogin';

function SignIn() {
  return (
    <>
      <Head>
        <title>signin | Linkbrary</title>
      </Head>
      <Styled.Wrap>
        <Styled.Main>
          <Styled.AuthBox>
            <AuthTitle text="회원이 아니신가요?" action="/signup" actionText="회원가입 하기" />
            <AuthForm isRegister={false} />
          </Styled.AuthBox>
          <SocialLogin />
        </Styled.Main>
      </Styled.Wrap>
    </>
  );
}

export default SignIn;
