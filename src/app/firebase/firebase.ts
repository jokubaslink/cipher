import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  };
 */

const firebaseConfig = {
  apiKey: "AIzaSyDU2JTMHUHocFLNHnUsCOyXlW3TXaJlkUA",
  authDomain: "cipher-453a5.firebaseapp.com",
  projectId: "cipher-453a5",
  storageBucket: "cipher-453a5.appspot.com",
  messagingSenderId: "372787929922",
  appId: "1:372787929922:web:9c812575c4b8ae9ab1dedb",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)

export default authentication;
