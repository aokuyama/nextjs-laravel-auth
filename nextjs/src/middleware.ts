import NextAuth from "next-auth";
import { authConfig } from "../auth.config";
import { checkSession } from "./shared/laravel/api/checkSession";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // ここと(free)のrouteの二重定義になってるのをなんとかしたい
  matcher: ["/((?!api|next|login-next|_next/static|_next/image|.png).*)"],
};

const checkLaravelSession = async () => !!await checkSession();

export async function middleware(request: NextRequest) {
  if (!await checkLaravelSession()) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  return await NextAuth(authConfig).auth();
}
