import { Session } from "next-auth";
import { NextRequest } from "next/server";
import { check } from "../laravel/api/check";
import { logout } from "../laravel/api/logout";

export const authorized = async (
  auth: Session | null,
  request: NextRequest,
) => {
  const isLoggedIn = await checkLogged(auth);

  const isOnLoginPage = request.nextUrl.pathname.startsWith("/login-next");

  if (isLoggedIn && isOnLoginPage) {
    const url = new URL(
      request.nextUrl.searchParams.get("callbackUrl") || "/dashboard",
      request.nextUrl,
    );
    if (url.hostname === request.nextUrl.hostname) {
      return Response.redirect(url);
    }
    return Response.redirect(new URL("/", request.nextUrl));
  }
  return isLoggedIn;
};

const checkLogged = async (auth: Session | null) => {
  return !!(await check());
};
