import { Year } from "types/directionsTypes";
import { RootState } from "store/configureStore";

export const recordsSelector = (state: RootState): Year[] =>
  state.records.records;

export const currentDateSelector = (state: RootState): string =>
  state.currentDate.currentDate;

export const currentYearSelector = (state: RootState) =>
  state.currentYear.currentYear;
