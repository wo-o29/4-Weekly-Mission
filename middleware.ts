/* eslint-disable require-await */
/* eslint-disable consistent-return */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import PAGE_PATH from './constant/pagePath';

// 로그인하지 않은 유저만 접근할 수 있는 URL 정규식
const guestOnlyUrlRegex = /^(\/$|\/signup|\/signin)/;
// 로그인한 유저만 접근할 수 있는 URL 정규식
const userOnlyUrlRegex = /^(\/folder|\/share)/;
const ACCESS_TOKEN = 'accessToken';

export const middleware = async (request: NextRequest) => {
  const pathName = request.nextUrl.pathname;
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  // 로그인 한 유저가 로그인, 회원가입 페이지에 접근하는 경우
  if (accessToken && guestOnlyUrlRegex.test(pathName)) {
    return NextResponse.redirect(new URL(PAGE_PATH.folder, request.url));
  }

  // 로그인하지 않은 유저가 로그인 한 유저만 접근할 수 있는 페이지에 접근하는 경우
  if (!accessToken && userOnlyUrlRegex.test(pathName)) {
    return NextResponse.redirect(new URL(PAGE_PATH.signin, request.url));
  }
};

// 미들웨어를 거치지않는 url 설정
export const config = {
  matcher: ['/((?!api|icon|images|_next/static|_next/image|favicon.ico).*)']
};
