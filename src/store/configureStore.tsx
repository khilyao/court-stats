import { configureStore } from "@reduxjs/toolkit";
import initRecords from "./slices/recordsSlice";
import chooseDate from "./slices/currentDateSlice";

const store = configureStore({
  reducer: { records: initRecords, currentDate: chooseDate },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
