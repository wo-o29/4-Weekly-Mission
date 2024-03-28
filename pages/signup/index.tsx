import * as Styled from './signup.styled';
import Head from 'next/head';
import AuthTitle from '../../components/Auth/AuthTitle';
import AuthForm from '../../components/Auth/AuthForm';
import SocialLogin from '../../components/Auth/SocialLogin';

function SignUp() {
  return (
    <>
      <Head>
        <title>signup | Linkbrary</title>
      </Head>
      <Styled.Wrap>
        <Styled.Main>
          <Styled.AuthBox>
            <AuthTitle text="이미 회원이신가요?" action="/signin" actionText="로그인 하기" />
            <AuthForm isRegister={true} />
          </Styled.AuthBox>
          <SocialLogin />
        </Styled.Main>
      </Styled.Wrap>
    </>
  );
}

export default SignUp;
