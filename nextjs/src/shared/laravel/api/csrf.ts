import { getLaravelCookie, parseAndSetLaravelCookie } from "../cookie";

export const csrf = async () => {
  const method = "GET";
  const c = getLaravelCookie();

  const headers = new Headers({
    Cookie: `laravel_session=${c.laravel_session};XSRF-TOKEN=${c["XSRF-TOKEN"]}`,
    "Content-Type": "application/json",
  });

  const res = await fetch("http://web/api/csrf-cookie", {
    method,
    headers,
  });
  if (res.ok) {
    const setCookieHeader = res.headers.get("set-cookie");
    parseAndSetLaravelCookie(setCookieHeader);
    return true;
  }
  return false;
};
