import { createSelector } from "@reduxjs/toolkit";
import { getRootState } from "../root/rootSelector";

export const selectCountriesState = createSelector(
  getRootState,
  (state) => state.countriesState
);

export const selectCountries = createSelector(
  selectCountriesState,
  (state) => state.countries
);
