import { checkSession } from "./shared/laravel/api/checkSession";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import ipRangeCheck from 'ip-range-check';

const loginPathBackend = "/login";
const loginPath = "/login-next";
const allowedIPs = process.env.ALLOWED_IPS
? process.env.ALLOWED_IPS.split(",")
: [];

export default auth(async (request) => {
  if (!allowedIPs.length) {
    throw new Error("undefined: ALLOWED_IPS");
  }

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
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",").at(0) : "";
    if (!ipRangeCheck(ip ?? "", allowedIPs)) {
    return new NextResponse('Forbidden', { status: 403 });
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|next|_next/static|_next/image|.png).*)"],
};

const checkLaravelSession = async () => !!(await checkSession());
