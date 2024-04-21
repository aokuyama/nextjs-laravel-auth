import { cookies } from "next/headers";
import { parseString, splitCookiesString } from "set-cookie-parser";

interface LaravelCookie {
  "XSRF-TOKEN": string | undefined;
  laravel_session: string | undefined;
}

export const getLaravelCookie = (): LaravelCookie => {
  const cookieStore = cookies();
  return {
    "XSRF-TOKEN": cookieStore.get("XSRF-TOKEN")?.value,
    laravel_session: cookieStore.get("laravel_session")?.value,
  };
};

export const setLaravelCookie = (cookie: LaravelCookie) => {
  const cookieStore = cookies();
  if (cookie["XSRF-TOKEN"]) {
    cookieStore.set("XSRF-TOKEN", cookie["XSRF-TOKEN"]);
  } else {
    cookieStore.delete("XSRF-TOKEN");
  }
  if (cookie.laravel_session) {
    cookieStore.set("laravel_session", cookie.laravel_session);
  } else {
    cookieStore.delete("laravel_session");
  }
};

export const parseAndSetLaravelCookie = (headerCookieString: string | null) => {
  const cookieList = splitCookiesString(headerCookieString || "");
  const cookieStore = cookies();

  cookieList.map((cookie: string) => {
    const c = parseString(cookie);
    cookieStore.set({
      name: c.name,
      value: c.value,
      expires: c.expires,
      maxAge: c.maxAge,
      httpOnly: c.httpOnly,
      path: c.path,
      domain: c.domain,
      sameSite: toSameSite(c.sameSite),
      secure: c.secure,
    });
  });
};

const toSameSite = (
  v: string | undefined | true | false
): true | false | "lax" | "strict" | "none" | undefined => {
  if (v === "lax" || v === "strict" || v === "none") {
    return v;
  }
  if (typeof v === "string") {
    return undefined;
  }
  return v;
};
