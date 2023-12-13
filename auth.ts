import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { FirebaseAdapter, FirestoreAdapter } from "@next-auth/firebase-adapter";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "@/app/utils/firebase";
import * as firestoreFunctions from "firebase/firestore";
import { authentication } from "@/app/utils/firebase";
import { cert } from "firebase-admin/app";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "registercredentials",
      name: "Register with email and password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req): Promise<any> {
        return await createUserWithEmailAndPassword(
          authentication,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            const user = userCredential.user;

            if (user) return user;
            return null;
          })
          .catch((err) => {
            console.error(err, err.message);
          });
      },
    }),
    Credentials({
      id: "signincredentials",
      name: "Sign in with email and password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req): Promise<any> {
        return await signInWithEmailAndPassword(
          authentication,
          (credentials as any).email || "",
          (credentials as any).password || ""
        ).then((userCredential) => {
          const user = userCredential.user;

          if (user) return user;
          return null;
        });
      },
    }),
    GoogleProvider({
      id: "signingoogle",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    })
  }),
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthOptions;
