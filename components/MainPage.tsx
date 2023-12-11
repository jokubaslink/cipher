"use client";

import React from "react";
import { useAppSelector } from "../src/app/redux/store";
import AuthComponent from "./AuthComponent";
import { onAuthStateChanged } from "firebase/auth";
/* import authentication from "../utils/firebase";
 */
export default function MainPage() {

/*   let signedIn = false;


  onAuthStateChanged(authentication, (user) => {
    if(user) signedIn = true;
    else signedIn = false;
  }) */
  /* const { email, uid } = useAppSelector((state) => state.userReducer);

  if (uid !== 'none') {
    return <div>user is logged in!, welcome.</div>;
  }else{
    return <AuthComponent />
  } */

  return <div>maincomponent</div>
}
