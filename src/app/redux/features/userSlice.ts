import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserType = {
    email: string | null;
    uid: string;
};

let initialState = {
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
      return state = action.payload;
    },
    setUserLogOutState: () => initialState
  },
});

export const { setCurrentUser, setUserLogOutState } = userSlice.actions;

export default userSlice.reducer;
