import Credentials from "next-auth/providers/credentials";
import { check } from "../laravel/api/check";

export const credentialsProvider = Credentials({
  async authorize() {
    const user = await check();
    if (!user) {
      return null;
    }
    return {
      id: user.id.toString(),
      email: user.email,
      token: user.token,
    };
  },
});
