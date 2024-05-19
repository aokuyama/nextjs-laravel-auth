import { checkSession } from "./shared/laravel/api/checkSession";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth(async (request) => {
  if (!(await checkLaravelSession())) {
    const url = new URL("/login", request.nextUrl);
    url.searchParams.append("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  if (!request.auth) {
    const url = new URL("/login-next", request.nextUrl);
    url.searchParams.append("callbackUrl", request.nextUrl.pathname);
    if (!request.nextUrl.pathname.startsWith("/login-next")) {
      return NextResponse.redirect(url);
    }
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // ここと(free)のrouteの二重定義になってるのをなんとかしたい
  matcher: ["/((?!api|next|_next/static|_next/image|.png).*)"],
};

const checkLaravelSession = async () => !!(await checkSession());
