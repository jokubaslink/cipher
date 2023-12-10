"use client";
import { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "../redux/store";
import functions from "../firebase/features/user";
import { useDispatch } from "react-redux";
import { Auth, User, onAuthStateChanged } from "firebase/auth";

export default function Nav() {
  const [emailAddress, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const { email, uid } = useAppSelector((state) => state.userReducer);
  const {
    CreateUserWithPassword,
    GoogleUserAuth,
    Logout,
    CheckIfUserSignedIn,
    LogInWithPassword,
  } = functions;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    CheckIfUserSignedIn(dispatch);
  }, []); // CheckIfUserSignedIn, dispatch;

  const [authenticate, setAuthentication] = useState(false);

  if (!authenticate)
    return (
      <nav className="flex flex-col items-center gap-4">
        Do you want to authenticate?{" "}
        <button
          onClick={() => {
            setAuthentication(true);
          }}
        >
          Yes
        </button>
      </nav>
    );

    return (
      <nav className="flex flex-col items-center gap-4">
        {uid! && (
          <button
            onClick={() => {
              setAuthentication(false);
            }}
          >
            Close authentication
          </button>
        )}
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
