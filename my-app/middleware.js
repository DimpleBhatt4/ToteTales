import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the current request path
  const path = request.nextUrl.pathname;

  // Log the path for debugging
  console.log("Middleware executed for path:", path);

  // Define public paths
  const isPublicPath =
    path === '/' || path === '/login' || path === '/signup' || path === '/verifyemail';

  // Get the token from cookies
  const token = request.cookies.get('token')?.value || '';

  // Allow access to the '/' route unconditionally
  if (path === '/') {
    console.log("Accessing the homepage without requiring authentication");
    return NextResponse.next();
  }

  // Allow access to other public paths, even if no token exists
  if (isPublicPath) {
    console.log(`Accessing public path: ${path}`);
    return NextResponse.next();
  }

  // Redirect to login if accessing restricted paths without a token
  if (!token && !isPublicPath) {
    console.log("Redirecting to '/login' since no token exists");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed if authenticated
  console.log(`Authenticated access to: ${path}`);
  return NextResponse.next();
}

// Specify the routes for which this middleware applies
export const config = {
  matcher: ['/', '/login', '/signup', '/verifyemail', '/profile'], // Include the routes to match
};
