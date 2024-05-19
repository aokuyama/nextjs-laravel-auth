import { getLaravelCookie } from "../cookie";
import { z } from "zod";

export const OuputSchema = z.object({
  code: z.string(),
  result: z.object({
    id: z.number(),
    email: z.string(),
    token: z.string(),
  }),
});

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
    const r = OuputSchema.parse(await res.json());
    return r.result;
  }
  return null;
};
