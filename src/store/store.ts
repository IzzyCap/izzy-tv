import { BestSliderSlice, OriginalSliderSlice, StoreSliderSlice } from "./features/sliderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    bestSlider: BestSliderSlice.reducer,
    storeSlider: StoreSliderSlice.reducer,
    originalSlider: OriginalSliderSlice.reducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
