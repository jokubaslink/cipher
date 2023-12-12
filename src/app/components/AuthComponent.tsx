"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function AuthComponent() {
  const [login, setLogin] = useState(true);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {login && (
        <div>
          <div className="">
            <p>Email</p>
            <input
              className="border-2 border-black rounded-md"
              type="email"
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              required
            />
          </div>
          <div className="">
            <p>Password</p>
            <input
              className="border-2 border-black rounded-md"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              signIn("signincredentials", {
                email: emailAddress,
                password,
                redirect: true,
                callbackUrl: "/",
              });
            }}
          >
            Sign in with email and password
          </button>
          <p
            className="cursor-pointer"
            onClick={() => {
              setLogin((prev) => !prev);
            }}
          >
            Do not have an account?
          </p>
        </div>
      )}
      {!login && (
        <div className="flex flex-col bg-purple-400">
          <div className="">
            <p>Email</p>
            <input
              className="border-2 border-black rounded-md"
              type="email"
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              required
            />
          </div>
          <div className="">
            <p>Password</p>
            <input
              className="border-2 border-black rounded-md"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              signIn("registercredentials", {
                email: emailAddress,
                password,
                redirect: true,
                callbackUrl: "/",
              });
            }}
          >
            Register with email and password
          </button>
          <p
            className="cursor-pointer"
            onClick={() => {
              setLogin((prev) => !prev);
            }}
          >
            Already have an account?
          </p>
        </div>
      )}
      <button onClick={() => {
        signIn('signingoogle');
      }} className="bg-orange-400">Sign in with Google</button>
    </div>
  );
}
