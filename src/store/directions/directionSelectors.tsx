import { Direction } from "types/directionsTypes";
import { RootState } from "store/configureStore";

export const directionsSelector = (state: RootState): Direction[] =>
  state.directions.directions;
