import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
    } & DefaultSession["user"];
  }
  interface User {
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    backendToken: string;
  }
}
