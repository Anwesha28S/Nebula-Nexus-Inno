import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "./auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET || "nebula_nexus_development_secret_session_key",
  
  callbacks: {
    async signIn({ user, account }) {
      return true; 
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.phone = token.phone;
      }
      return session;
    },
    async jwt({ token }) {
      // User lookup
      if (!token.sub) return token;
      const user = await db.user.findUnique({ where: { id: token.sub } });
      if (!user) return token;

      // Token claims
      token.name = user.name;
      token.email = user.email;
      token.phone = user.phone;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

