import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import authConfig from "./auth.config";
import axios from "axios";
import { currentProfile } from "./lib/current-profile";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      return token;
    },

    async session({ token, session, user }) {
      session.loggedUser = token.sub as Object;
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
