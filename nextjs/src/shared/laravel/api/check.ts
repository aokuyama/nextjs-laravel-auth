import { getLaravelCookie } from "../cookie";
import { OuputSchema } from "./login";

export const check = async () => {
  const method = "GET";
  const c = getLaravelCookie();

  const headers = new Headers({
    Cookie: `laravel_session=${c.laravel_session};`,
    "Content-Type": "application/json",
  });

  const res = await fetch("http://web/api/users/me", {
    method,
    headers,
  });
  if (res.ok) {
    const r =  OuputSchema.parse(await res.json());
    return r.result;
  }
  return null;
};
