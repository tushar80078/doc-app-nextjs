import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    loggedUser: Object;
  }
}

// import { JWT } from "next-auth/jwt";

// declare module "@auth/core/session" {
//   interface JWT {
//     loggedUser?: "ADMIN" | "USER";
//   }
// }
