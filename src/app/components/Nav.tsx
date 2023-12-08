"use client";
import {useState} from 'react';
/* import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store'; */
import { useAppSelector } from '../redux/store';
import { setCurrentUser, setUserLogOutState } from '../redux/features/userSlice';
import { CreateUserWithPassword, createUserWithGoogle, logOut } from '../firebase/features/user';

export default function Nav() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
/*   const dispatch = useDispatch<AppDispatch>(); */
  const {user} = useAppSelector((state) => state.userReducer)
  
/* https://youtu.be/x-FBwszlA3U -> 54:31 */

/*   const handleSignOut = () => {
    authentication.signOut().then(() => { // 1. firebase, 2. handling global state in app.
      dispatch(setUserLogOutState());
    }).catch((err) => alert(err.message))
  } */

  return (
    <nav className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="border-2 border-black" placeholder="Email" />
          
          <input onChange={(e) => setPsw(e.target.value)} type="text" className="border-2 border-black" placeholder="Password" />
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => {
          CreateUserWithPassword(email, psw);
        }}>Create an account</button>

        <button onClick={() => {
          logOut()
        }}>Logout</button>
      </div>

      <p>{user.email} ir {user.uid}</p>
    </nav>
  )
}
