import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pFecth } from "./lib";

// Your own logic for dealing with plaintext password strings; be careful!

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      token: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        name: {},
        email: {},
        password: {},
        token: {},
      },
      authorize: async (credentials) => {
        let user = null;

        if (credentials.name) {
          const bodyUser = {
            email: credentials.email,
            password: credentials.password,
            name: credentials.name,
          };

          user = await pFecth(
            "/auth/register",
            "POST",
            bodyUser
          );
        } else {

          const bodyUser = {
            email: credentials.email,
            password: credentials.password,
          };
          
            user = await pFecth(
              "/auth/login",
              "POST",
              bodyUser
            );


          
         
        }

        if(!user) throw new Error("ha habido un error")

        // return user object with their profile data
        return user.user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.token = (user as { token: string }).token;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.token = token.token as string;
      return session;
    },
  },
});
