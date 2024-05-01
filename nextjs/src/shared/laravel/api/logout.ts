import { setLaravelCookie } from "../cookie";

export const logout = async () => {
  setLaravelCookie({
    laravel_session: undefined,
    "XSRF-TOKEN": undefined
  });
  return true;
};
