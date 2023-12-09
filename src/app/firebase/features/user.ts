import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import authentication from "../firebase";

//REDUX
import { AppDispatch } from "@/app/redux/store";
import {
  setCurrentUser,
  setUserLogOutState,
} from "@/app/redux/features/userSlice";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch<AppDispatch>();

  signOut(authentication).then((res) => {
    // REDUX STATE
    dispatch(setUserLogOutState());
  });
}

function CreateUserWithPassword(nigga: Function,email: string, password: string) {
  createUserWithEmailAndPassword(authentication, email, password).then(
    (userCredential) => {
      console.log('call2')
      const user = userCredential.user;
      const { uid, email } = user!;
      nigga(
        setCurrentUser({
          email,
          uid,
        })
      );
      console.log('after ni')
    }
  );
}

const provider = new GoogleAuthProvider();

function createUserWithGoogle() {
  signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;

      // REDUX STATE
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

const functions = { CreateUserWithPassword, Logout, createUserWithGoogle };
export default functions