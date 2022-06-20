import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { debug } from 'console';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'martijn' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { data: user, status } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          credentials,
        );
        if (user && status === 200) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (typeof user !== typeof undefined) {
        const beforeDecode: string = user as unknown as string;
        const decodedToken = jwtDecode<JwtPayload>(beforeDecode);
        token.user = decodedToken;
        token.accessToken = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token !== null) {
        session.user = token.user;
        session.user.email = session.user.iss;
        session.user.name = session.user.sub;
        session.user.id = session.user.jti;
        session.accessToken = token.accessToken;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
  },
});
