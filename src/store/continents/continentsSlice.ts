import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Continent, ContinentsCodes } from "../../types";

interface ContinentsState {
  activeContinent: string;
  continents: Continent[];
}

const initialState = {
  activeContinent: ContinentsCodes.ALL,
  continents: []
} as ContinentsState;

const continentsSlice = createSlice({
  name: "continents",
  initialState,
  reducers: {
    setActiveContinent(state: ContinentsState, action: PayloadAction<string>) {
      return {
        ...state,
        activeContinent: action.payload
      };
    },
    setContinents(state: ContinentsState, action: PayloadAction<Continent[]>) {
      return {
        ...state,
        continents: action.payload
      };
    }
  }
});

export const { setActiveContinent, setContinents } = continentsSlice.actions;
export default continentsSlice.reducer;
