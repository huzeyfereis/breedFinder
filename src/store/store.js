import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./breedFinderSlice";

export const store = configureStore({
  reducer: { breeds: breedsReducer.reducer },
});
