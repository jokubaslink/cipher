"use client";

import React from "react";
import { useAppSelector } from "../redux/store";
import Nav from "../components/Nav";

export default function MainPage() {
  const { email, uid } = useAppSelector((state) => state.userReducer);

  if (uid !== 'none') {
    return <div>user is logged in!, welcome.</div>;
  }else{
    return <Nav />
  }
}
