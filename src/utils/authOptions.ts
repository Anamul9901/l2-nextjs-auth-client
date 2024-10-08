import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  //! auth signIn er por user er data coocis theke get korar jonno ai secrat use korte hobe
  secret: process.env.NEXTAUTH_SECRET,

  //* user login na thakle, privet route access korte chile auto 'login' page e niya asbe
  pages: {
    signIn: "/login",
  },
};
