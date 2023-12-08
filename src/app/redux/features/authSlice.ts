import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import authentication from "@/app/firebase/firebase";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false, // is user authenticated
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;


export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: () => {

    },
    login: (state, action: PayloadAction<string>) => {
        return  {
            value: {
                isAuth: true,
                username: action.payload, // will contain what you will pass in
                uid: "123wateva",
                isModerator: false,
            }
        }
    },

  },
});


export const {login, register} = auth.actions;
export default auth.reducer;