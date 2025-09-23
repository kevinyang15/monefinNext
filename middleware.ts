import { NextResponse, NextRequest } from 'next/server';
import { CODE_REGEX } from './utils/utils';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(ico|svg|png|jpg|jpeg|css|js)$/) ||
    pathname.includes('robots.txt') ||
    pathname.includes('sitemap')
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 1 && CODE_REGEX.test(segments[0])) {
    const code = segments[0];
    const rest = '/' + segments.slice(1).join('/');
    const url = req.nextUrl.clone();
    url.pathname = rest || '/';

    const res = NextResponse.rewrite(url);
    res.cookies.set('session_code', code, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24,
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.(?:ico|svg|png|jpg|jpeg|css|js)$|robots\\.txt|sitemap.*).*)'],
};

