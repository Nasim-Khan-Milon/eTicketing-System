import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "admin" | "passenger";
    } & DefaultSession["user"];
  }

  interface User {
    role: "admin" | "passenger";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "admin" | "passenger";
  }
}
