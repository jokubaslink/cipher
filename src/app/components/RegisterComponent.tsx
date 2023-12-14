"use client";

import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterComponent() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  function registerUser() {
    createUserWithEmailAndPassword(authentication, emailAddress, password).then(
      async (userCredentials) => {
        const user = userCredentials.user;

        await setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
          uid: user.uid,
        });

        

        router.push("/signin");
      }
    );
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1>Register</h1>
      <div className="flex flex-col items-center-justify-center border-b-2 border-black">
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="email" />
        </div>
        <button
          className="p-3 rounded-md"
          onClick={() => {
            registerUser();
          }}
        >
          Register
        </button>
      </div>

      <button
        onClick={() => {
          signIn("google", {
            callbackUrl: "/",
          });
        }}
        className="p-3 rounded-md"
      >
        Sign in with google
      </button>

      <p
        className="cursor-pointer"
        onClick={() => {
          router.push("/signin");
        }}
      >
        Already have an account?
      </p>
    </div>
  );
}
