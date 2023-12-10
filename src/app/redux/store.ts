import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const store = configureStore({
    reducer: {
      userReducer
    }
  })

export type RootState = ReturnType<typeof store.getState> // useSelector type..
export type AppDispatch = typeof store.dispatch;
export default store

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const dispatch = useDispatch<AppDispatch>;


// reducer takes action and previous state, and makes change to state, then returns state
// reducers have access to states, can take in action ( data used to change the state )