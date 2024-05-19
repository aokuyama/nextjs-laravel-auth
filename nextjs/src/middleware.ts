import NextAuth from "next-auth";
import { authConfig } from "../auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // ここと(free)のrouteの二重定義になってるのをなんとかしたい
  matcher: ["/((?!api|next|login-next|_next/static|_next/image|.png).*)"],
};
