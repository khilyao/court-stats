import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  currentYear: string | number;
}

const initialState: RootState = {
  currentYear: 2024,
};

const currentYearSlice = createSlice({
  name: "year",
  initialState,
  reducers: {
    chooseYear(state, action: PayloadAction<number>) {
      state.currentYear = action.payload;
    },
  },
});

export const { chooseYear } = currentYearSlice.actions;

export default currentYearSlice.reducer;
