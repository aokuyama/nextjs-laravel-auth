import { z } from "zod";
import { getLaravelCookie, parseAndSetLaravelCookie } from "../cookie";

export const InputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const OuputSchema = z.object({
  code: z.string(),
  result: z.object({
    id: z.number(),
    email: z.string(),
    token: z.string(),
  }),
});

interface LoginInput {
  email: string;
  password: string;
}

export const login = async (input: LoginInput) => {
  const method = "POST";
  const c = getLaravelCookie();

  const headers = new Headers({
    "Content-Type": "application/json",
    Cookie: `laravel_session=${c.laravel_session}}`,
  });
  headers.append("X-XSRF-TOKEN", c["XSRF-TOKEN"] || "");

  const body = JSON.stringify(input);
  const res = await fetch("http://web/api/login", {
    method,
    headers,
    body,
  });

  if (res.ok) {
    const setCookieHeader = res.headers.get("set-cookie");
    parseAndSetLaravelCookie(setCookieHeader);
    return OuputSchema.parse(await res.json());
  }
  const m = OuputSchema.parse(await res.json());
  throw new Error(m.code);
};
