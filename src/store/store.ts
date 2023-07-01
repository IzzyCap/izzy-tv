import { BestMoviesSliderSlice, StoreMoviesSliderSlice } from "./features/sliderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    bestMoviesSlider: BestMoviesSliderSlice.reducer,
    storeMoviesSlider: StoreMoviesSliderSlice.reducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
