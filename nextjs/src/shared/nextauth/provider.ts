import { InputSchema, login } from "@/shared/laravel/api/login";
import Credentials from "next-auth/providers/credentials";
import { csrf } from "../laravel/api/csrf";

export const credentialsProvider = Credentials({
  credentials: {
    email: { label: "email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const i = InputSchema.parse(credentials);
    if (!(await csrf())) {
      throw new Error();
    }
    const r = await login(i);
    return {
      id: r.result.id.toString(),
      email: r.result.email,
      token: r.result.token,
    };
  },
});
