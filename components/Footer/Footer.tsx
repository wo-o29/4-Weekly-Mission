import Image from 'next/image';
import * as Styled from './Footer.styled';

interface FooterLinkType {
  url: string;
  icon: string;
  text: string;
}

const FacebookIcon = '/icon/footer-facebook.svg';
const TwitterIcon = '/icon/footer-twitter.svg';
const YoutubeIcon = '/icon/footer-youtube.svg';
const InstargramIcon = '/icon/footer-instargram.svg';

const FOOTER_LINK_LIST: FooterLinkType[] = [
  {
    url: 'https://facebook.com/?locale=ko_KR',
    icon: FacebookIcon,
    text: '페이스북'
  },
  {
    url: 'https://twitter.com/?lang=ko',
    icon: TwitterIcon,
    text: '트위터'
  },
  {
    url: 'https://www.youtube.com',
    icon: YoutubeIcon,
    text: '유튜브'
  },
  {
    url: 'https://www.instagram.com',
    icon: InstargramIcon,
    text: '인스타그램'
  }
];

function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterLogo href="/">©codeit - 2023</Styled.FooterLogo>
      <Styled.FooterNav>
        <li>
          <Styled.FooterNavText href="/privacy">Privacy Policy</Styled.FooterNavText>
        </li>
        <li>
          <Styled.FooterNavText href="/faq">FAQ</Styled.FooterNavText>
        </li>
      </Styled.FooterNav>
      <Styled.FooterLink>
        {FOOTER_LINK_LIST.map((list: FooterLinkType, idx: number) => {
          const { url, icon, text } = list;
          return (
            <li key={idx}>
              <a href={url} target="_blank" rel="noreferrer">
                <Image width={20} height={20} src={icon} alt={`${text} 아이콘`} />
              </a>
            </li>
          );
        })}
      </Styled.FooterLink>
    </Styled.Footer>
  );
}

export default Footer;
