"use client";
import { useState } from "react";
/* import { logIn, logOut, toggleModerator } from "../redux/features/authSlice";
 */import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";

export default function LogIn() {
  const [username, setUsername] = useState("");
/* 
  const {isAuth} = useAppSelector((state) => state.authReducer.value)


  const dispatch = useDispatch<AppDispatch>(); */

/* 
  const onClickLogin = () => {
    dispatch(logIn(username))
  }

  const onClickToggle = () => {
    dispatch(toggleModerator())
  }

  const onClickLogout = () => {
    dispatch(logOut())
  }
 */

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
{/*       <button onClick={onClickLogin}>Log In</button> */}
      <br />
{/*       <button onClick={onClickLogout}>Log Out</button> */}
      <br />
{/*       {isAuth && <button onClick={onClickToggle}>Become a wealthy man!</button> } */}
    </div>
  );
}
