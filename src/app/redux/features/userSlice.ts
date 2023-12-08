import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserType = {
  user: {
    email: string;
    uid: string;
  };
};

const initialState = {
  user: {
    email: "test",
    uid: "test",
  },
} as UserType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserType>) => {
      /*  state.userName = action.payload.userName;
        state.userEmail = action.payload.userEmail; */
      const { email, uid } = action.payload.user;
      state.user = {
        email,
        uid,
      };
    },
    setUserLogOutState: (state) => {
      state.user = {
        email: "test",
        uid: "test",
      };
    },
  },
});

export const { setCurrentUser, setUserLogOutState } = userSlice.actions;

export default userSlice.reducer;
