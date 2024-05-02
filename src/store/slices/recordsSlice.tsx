import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Record } from "types/directionsTypes";

interface RootState {
  records: Record[];
}

const initialState: RootState = {
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    initRecords(state, action: PayloadAction<Record[]>) {
      state.records = action.payload;
    },
  },
});

export const { initRecords } = recordsSlice.actions;

export default recordsSlice.reducer;
