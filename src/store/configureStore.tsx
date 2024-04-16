import { configureStore } from "@reduxjs/toolkit";
import initDirections from "./directions/directionSlice";

const store = configureStore({
  reducer: { directions: initDirections },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
