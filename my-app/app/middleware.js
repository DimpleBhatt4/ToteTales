import { NextResponse } from 'next/server';

// This function handles all matched routes
export function middleware(request) {
  console.log("Middleware executed for path:", request.nextUrl.pathname);

  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/';

  // Get the token from cookies
  const token = request.cookies.get('token')?.value || '';

  // If the user is on a public path but has a token, redirect to the homepage
  if (isPublicPath && token) {
    console.log("Redirecting from public path to '/' since token exists");
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the user is not on a public path and doesn't have a token, redirect to login
  if (!isPublicPath && !token) {
    console.log("Redirecting to '/login' since no token exists");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the routes for which this middleware applies
export const config = {
  matcher: ['/login', '/signup', '/verifyemail', '/profile'], // Ensure the paths match correctly
};
