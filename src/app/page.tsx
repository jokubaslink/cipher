import MainPage from "../../components/MainPage";
import Nav from "../../components/AuthComponent";
import { onAuthStateChanged } from "firebase/auth";
/* import authentication from "./utils/firebase";
 */import AuthComponent from "../../components/AuthComponent";
import { useEffect, useState } from "react";
import { AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
////---////
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import { signIn } from "next-auth/react";
import SignInButton from "../../components/SignInButton";
/* import { checkUserStatus } from "./redux/features/userSlice";
 */
export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);
  // link prefetch?
  // 

  return (
    <main className="min-h-screen flex items-center justify-center">
      {session ? <div>Logged IN</div> : <div><SignInButton>Text</SignInButton></div>}
    </main> 
  );
}

