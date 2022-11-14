import { createSelector } from "@reduxjs/toolkit";
import { getRootState } from "../root/rootSelector";

export const selectContinentsState = createSelector(
  getRootState,
  (state) => state.continentsState
);

export const selectActiveContinent = createSelector(
  selectContinentsState,
  (state) => state.activeContinent
);

export const selectContinents = createSelector(
  selectContinentsState,
  (state) => state.continents
);
