import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { db } from "./db";
import { use } from "react";

const GITHIB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHIB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHIB_CLIENT_ID || GITHIB_CLIENT_SECRET) {
  throw new Error("Missing github oauth crwdentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHIB_CLIENT_ID,
      clientSecret: GITHIB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
