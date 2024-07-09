import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import authConfig from "./auth.config";
import axios from "axios";
import { currentProfile } from "./lib/current-profile";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    async signIn({ user }) {
      const data = await axios.post(
        "http://localhost:3000/api/auth/user",
        user
      );

      return data?.data?.success;
    },

    async jwt({ token, user, account, profile }) {
      return token;
    },

    async session({ token, session }) {
      session.loggedUser = token.loggedUser as Object;
      return session;
    },
  },
  ...authConfig,
});
