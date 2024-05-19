import { signOut as signOutAuthJs } from "@/auth";
import { setLaravelCookie } from "./laravel/cookie";

export const logout = async () => {
  setLaravelCookie({
    "XSRF-TOKEN": undefined,
    laravel_session: undefined,
  });
  await signOutAuthJs();
};
