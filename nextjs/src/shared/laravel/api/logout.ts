import { getLaravelCookie } from "../cookie";

export const logout = async () => {
  const method = "GET";
  const c = getLaravelCookie();

  const headers = new Headers({
    Cookie: `laravel_session=${c.laravel_session};`,
    "Content-Type": "application/json",
  });

  const res = await fetch("http://web/api/logout", {
    method,
    headers,
  });
  if (res.ok) {
    return true;
  }
  return false;
};
