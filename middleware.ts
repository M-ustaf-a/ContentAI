import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
  ]);
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};