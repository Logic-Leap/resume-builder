import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";  
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import User from '@/models/User';

import clientPromise from '@/lib/mongodb';// Example provider

export const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "2edcf7dc4393f6705d2f",
      clientSecret: "d4818999db750aff274469018ce5fcecf1269d6c",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt', // Use JWT session strategy
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages:{
    signIn : "/signin"
  },
 
  
});

export { handler as GET, handler as POST };
