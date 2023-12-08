import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import authentication from "../firebase";

//REDUX
import { AppDispatch, dispatch } from "@/app/redux/store";
import {
  setCurrentUser,
  setUserLogOutState,
} from "@/app/redux/features/userSlice";
import { useDispatch } from "react-redux";

function logOut() {
  signOut(authentication).then((res) => {
    // REDUX STATE
    console.log(res);
  });
}

function CreateUserWithPassword(email: string, password: string) {
  const dispatch = useDispatch<AppDispatch>();

  createUserWithEmailAndPassword(authentication, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      const { uid } = user!;
      const email = user.email!;

      console.log(user);
      dispatch(setCurrentUser({ emailAddress: email, uid }));
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

export { CreateUserWithPassword, createUserWithGoogle, logOut };
