import mainSlice from "./features/mainSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const store = configureStore({
const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
