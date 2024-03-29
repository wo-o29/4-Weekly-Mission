import Link from 'next/link';
import Image from 'next/image';
import * as Styled from './AuthTitle.styled';

const LogoImg = '/icon/big-logo.svg';

interface AuthTitleProps {
  text: string;
  action: string;
  actionText: string;
}

function AuthTitle({ text, action, actionText }: AuthTitleProps) {
  return (
    <Styled.Title>
      <Link href="/">
        <Image width={210} height={38} priority src={LogoImg} alt="로고 이미지" />
      </Link>
      <Styled.Text>
        {`${text} `}
        <Styled.ActionText href={action}>{actionText}</Styled.ActionText>
      </Styled.Text>
    </Styled.Title>
  );
}

export default AuthTitle;
