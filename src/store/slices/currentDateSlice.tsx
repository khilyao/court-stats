import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  currentDate: string;
}

const initialState: RootState = {
  currentDate: "",
};

const currentDateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    chooseDate(state, action: PayloadAction<string>) {
      state.currentDate = action.payload;
    },
  },
});

export const { chooseDate } = currentDateSlice.actions;

export default currentDateSlice.reducer;
