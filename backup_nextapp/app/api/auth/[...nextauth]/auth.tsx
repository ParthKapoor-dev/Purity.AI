import { prisma } from "@/prisma/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, account, profile }) {

      const cookieStore = await cookies();
      const user_role = cookieStore.get('user_role')?.value;
      let role: "CANDIDATE" | "RECRUITER" = "CANDIDATE"
      if (user_role == "RECRUITER") role = "RECRUITER"

      console.log(role)

      let dbUser = await prisma.user.findFirst({
        where: {
          email: token.email
        }
      });

      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            email: token.email!,
            name: token.name,
            image: token.picture,
            username: nanoid(10),
            role: role,
          },
        });
      }

      if (!dbUser.username) {
        await prisma.user.update({
          where: {
            id: dbUser.id
          },
          data: {
            username: nanoid(10)
          }
        })
      };

      if (dbUser.role == null)
        await prisma.user.update({
          where: { email: dbUser.email || "" },
          data: { role: role }
        })

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
        role: dbUser.role != null ? dbUser.role : role
      }
    },

    redirect() {
      return "/"
    }
  }
};


export const getAuthSession = () => getServerSession(authOptions)