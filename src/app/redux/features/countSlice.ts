import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState ={ 
    count: 0
}

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      /*  state.userName = action.payload.userName;
        state.userEmail = action.payload.userEmail; */
        state.count = action.payload;
    },
  },
});


const countReducer = countSlice.reducer;
export default countReducer;
export const {setCount} = countSlice.actions;