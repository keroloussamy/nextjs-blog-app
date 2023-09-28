import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";
import { getServerSession } from "next-auth";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    } as OAuthUserConfig<GoogleProfile>),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    } as OAuthUserConfig<GithubProfile>)
  ]
};

export const getAuthSession = () => getServerSession(authOptions);