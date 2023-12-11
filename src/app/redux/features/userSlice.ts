/* import authentication from "@/app/utils/firebase";
 */import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";

type UserType = {
  authenticated?: boolean;
  email: string | null;
  uid: string;
};

let initialState = {
  authenticated: false,
  email: "none",
  uid: "none",
} as UserType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserType>) => {
      /*  state.userName = action.payload.userName;
        state.userEmail = action.payload.userEmail; */
      /* const { email, uid } = action.payload; */
      return (state = action.payload);
    },
    setUserLogOutState: () => initialState,
    /* checkUserStatus: (state) => {
      onAuthStateChanged(authentication, (user) => {
        if(user) return state.authenticated = true;
        else return state.authenticated = false;
      })
    }, */
  },
});

export const { setCurrentUser, setUserLogOutState, /* checkUserStatus */ } = userSlice.actions;

export default userSlice.reducer;
