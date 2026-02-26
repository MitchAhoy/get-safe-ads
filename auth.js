import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongo";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import createUser from "./lib/createUser";

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "noreply@mail.getsafeads.com",
      name: "email",
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  events: {
    async createUser({ user }) {
      console.log("createUser auth event fired " + user.id);
      createUser(user.id);
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
