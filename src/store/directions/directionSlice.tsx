import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction } from "types/directionsTypes";

interface RootState {
  directions: Direction[];
}

const initialState: RootState = {
  directions: [],
};

const directionSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    initDirections(state, action: PayloadAction<Direction[]>) {
      state.directions = action.payload;
    },
  },
});

export const { initDirections } = directionSlice.actions;

export default directionSlice.reducer;
