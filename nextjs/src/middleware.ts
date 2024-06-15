import { checkSession } from "./shared/laravel/api/checkSession";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const loginPathBackend = "/login";
const loginPath = "/login-next";

export default auth(async (request) => {
  const isLoggedInBackend = await checkLaravelSession();
  const isLogged = request.auth;

  if (!isLoggedInBackend) {
    const url = new URL(loginPathBackend, request.nextUrl);
    url.searchParams.append("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  if (request.nextUrl.pathname.startsWith(loginPath)) {
    return;
  }
  if (!isLogged) {
    const url = new URL(loginPath, request.nextUrl);
    url.searchParams.append("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|next|_next/static|_next/image|.png).*)"],
};

const checkLaravelSession = async () => !!(await checkSession());
