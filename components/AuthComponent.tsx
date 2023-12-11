"use client";
import { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "../src/app/redux/store";
import {
  CreateUserWithPassword,
  GoogleUserAuth,
  Logout,

  LogInWithPassword,
} from "../src/app/utils/user";
import { useDispatch } from "react-redux";
import { Auth, User, onAuthStateChanged } from "firebase/auth";

export default function AuthComponent() {
  const [emailAddress, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const { email, uid } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

/*   useEffect(() => {
    CheckIfUserSignedIn(dispatch);
  }, []); */

  return (
    <nav className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="border-2 border-black"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPsw(e.target.value)}
          type="text"
          className="border-2 border-black"
          placeholder="Password"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            CreateUserWithPassword(dispatch, emailAddress, psw);
          }}
        >
          Create an account
        </button>
        <button
          onClick={() => {
            LogInWithPassword(dispatch, emailAddress, psw);
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            GoogleUserAuth(dispatch);
          }}
        >
          Login using Google
        </button>

        <button
          onClick={() => {
            Logout(dispatch);
          }}
        >
          Logout
        </button>
      </div>

      <div>
        {email} ir {uid}
      </div>
    </nav>
  );
}
