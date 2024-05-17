import { authorized } from "@/shared/nextauth/authorized";
import { credentialsProvider } from "@/shared/nextauth/provider";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/login-next",
  },

  callbacks: {
    authorized: async ({ auth, request }) => {
      return await authorized(auth, request);
    },

    session: ({ session, token }) => {
      session.user.token = token.backendToken;
      return session;
    },

    jwt: ({ token, user }) => {
      if (user) {
        token.backendToken = user.token;
      }
      return token;
    },
  },
};
