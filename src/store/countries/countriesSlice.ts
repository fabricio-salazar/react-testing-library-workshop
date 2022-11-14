import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Country } from "../../types";

interface CountriesState {
  countries: Country[];
  allCountries: Country[];
}

const initialState = {
  allCountries: [],
  countries: []
} as CountriesState;

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries(
      state: CountriesState,
      action: PayloadAction<Country[]>
    ): CountriesState {
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload
      };
    },
    resetCountries(state: CountriesState): CountriesState {
      return {
        ...state,
        countries: state.allCountries
      };
    },
    filterCountriesByContinent(
      state: CountriesState,
      action: PayloadAction<string>
    ): CountriesState {
      return {
        ...state,
        countries: state.allCountries.filter(
          (country) => country.continent.code === action.payload
        )
      };
    },
    filterCountriesByName(
      state: CountriesState,
      action: PayloadAction<string>
    ): CountriesState {
      return {
        ...state,
        countries: state.countries.filter((country) =>
          country.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    }
  }
});

export const {
  filterCountriesByContinent,
  filterCountriesByName,
  resetCountries,
  setCountries
} = countriesSlice.actions;

export default countriesSlice.reducer;
