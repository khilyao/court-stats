import { Record } from "types/directionsTypes";
import { RootState } from "store/configureStore";

export const recordsSelector = (state: RootState): Record[] =>
  state.records.records;

export const currentDateSelector = (state: RootState): string =>
  state.currentDate.currentDate;
