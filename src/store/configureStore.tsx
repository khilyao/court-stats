import { configureStore } from "@reduxjs/toolkit";
import initRecords from "./slices/recordsSlice";
import chooseDate from "./slices/currentDateSlice";
import chooseYear from "./slices/currentYearSlice";

const store = configureStore({
  reducer: {
    records: initRecords,
    currentDate: chooseDate,
    currentYear: chooseYear,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
