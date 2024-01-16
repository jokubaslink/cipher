"use client";

import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { authentication } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function AuthComponent() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const provider = new GoogleAuthProvider();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1>Sign in!!</h1>
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
            signIn("signincredentials", {
              email: emailAddress,
              password,
              redirect: true,
              callbackUrl: "/",
            });
            router.push('/')
          }}
        >
          Sign In!
        </button>
      </div>

      <button
        onClick={() => {
          signIn("signingoogle", {
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
          router.push("/signup");
        }}
      >
        Do not have an account?
      </p>

    <button onClick={() => {
      signInWithPopup(authentication, provider);
      router.push('/')
    }}>ultimate</button>
    </div>
  );
}
