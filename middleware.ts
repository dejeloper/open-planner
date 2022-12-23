import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {

  if (req.nextUrl.pathname.startsWith('/api/v1/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/v1/entries/', '')
    const checkMongoIdRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if (!checkMongoIdRegExp.test(id)) {
      const url = req.nextUrl.clone();
      url.pathname = '/api/bad-request'
      url.search = `?message=${id} no es un MongoID válido`

      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // '/api/:path*',
    '/api/v1/entries/:path*',
  ]
}

