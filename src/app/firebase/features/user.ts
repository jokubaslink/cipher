import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import authentication from "../firebase";

//REDUX
import {
  setCurrentUser,
  setUserLogOutState,
} from "@/app/redux/features/userSlice";

function CheckIfUserSignedIn(dispatch: Function) {
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      const { uid, email } = user!;
      dispatch(
        setCurrentUser({
          email,
          uid,
        })
      );
      // loading state.
    } else {
      // there is no user.
    }
  });
}

function LogInWithPassword(
  dispatch: Function,
  email: string,
  password: string
) {
  signInWithEmailAndPassword(authentication, email, password).then(
    (userCredentials) => {
      const user = userCredentials.user;
      const { uid, email } = user!;
      dispatch(
        setCurrentUser({
          email,
          uid,
        })
      );
      // loading state.
    }
  );
}

function CreateUserWithPassword(
  dispatch: Function,
  email: string,
  password: string
) {
  createUserWithEmailAndPassword(authentication, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      const { uid, email } = user!;
      dispatch(
        setCurrentUser({
          email,
          uid,
        })
      );
      // loading state.
    }
  );
}

const provider = new GoogleAuthProvider();

function GoogleUserAuth(dispatch: Function) {
  signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;
      const { uid, email } = user!;

      dispatch(
        setCurrentUser({
          email,
          uid,
        })
      );
      // loading state.
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

function Logout(dispatch: Function) {
  signOut(authentication).then((res) => {
    dispatch(setUserLogOutState());
  });
}
const functions = {
  CreateUserWithPassword,
  Logout,
  GoogleUserAuth,
  CheckIfUserSignedIn,
  LogInWithPassword,
};
export default functions;
