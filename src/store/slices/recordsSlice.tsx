import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Year } from "types/directionsTypes";

interface RootState {
  records: Year[];
}

const initialState: RootState = {
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    initRecords(state, action: PayloadAction<Year[]>) {
      state.records = action.payload;
    },
  },
});

export const { initRecords } = recordsSlice.actions;

export default recordsSlice.reducer;
