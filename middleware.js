import { NextResponse } from 'next/server';

export function middleware(request) {

  
  // current request path
  const path = request.nextUrl.pathname;


  // public paths
  const isPublicPath =
    path === '/' || path === '/login' || path === '/signup';

  //token from cookies
  const token = request.cookies.get('token')?.value || '';


  if (path === '/') {
    return NextResponse.next();
  }

  // Allow access to other public paths, even if no token exists
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Redirect to login if accessing restricted paths without a token
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  //request to proceed if authenticated
  return NextResponse.next();
}

//routes for which this middleware applies
export const config = {
  matcher: ['/', '/login', '/signup', '/verifyemail', '/profile', '/profile/:path*', '/cart', '/wishlist'], // Include the routes to match
};
