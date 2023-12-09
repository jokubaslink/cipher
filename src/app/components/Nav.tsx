"use client";
import { useEffect, useState } from "react";
/* import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store'; */
import { AppDispatch, useAppSelector } from "../redux/store";
import {
  setCurrentUser,
  setUserLogOutState,
} from "../redux/features/userSlice";
import functions from "../firebase/features/user";
import { setCount } from "../redux/features/countSlice";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import authentication from "../firebase/firebase";

export default function Nav() {
  const [emailAddress, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  /*   const dispatch = useDispatch<AppDispatch>(); */
  const { email, uid } = useAppSelector((state) => state.userReducer);
  const { CreateUserWithPassword, createUserWithGoogle, Logout } = functions;
  const dispatch = useDispatch<AppDispatch>();


  /* https://youtu.be/x-FBwszlA3U -> 54:31 */

  /*   const handleSignOut = () => {
    authentication.signOut().then(() => { // 1. firebase, 2. handling global state in app.
      dispatch(setUserLogOutState());
    }).catch((err) => alert(err.message))
  } */
  const { count } = useAppSelector((state) => state.countReducer);

  /*  */

  /*  */

  return (
    <nav className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="border-2 border-black"
          placeholder="Email"
          required
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
            createUserWithEmailAndPassword(authentication, emailAddress, psw).then(
              (userCredential) => {
                const user = userCredential.user;
                const { uid, email } = user!;
                dispatch(
                  setCurrentUser({
                    email,
                    uid,
                  })
                );
              }
            );
          }}
        >
          Create an account
        </button>

        <button
          onClick={() => {
            Logout();
          }}
        >
          Logout
        </button>
      </div>

      <p>
        {email} ir {uid}
      </p>
      <button
        onClick={() => {
          dispatch(setCount(2));
        }}
      >
        +
      </button>
      <p>{count}</p>
    </nav>
  );
}
