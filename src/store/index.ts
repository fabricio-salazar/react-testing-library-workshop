import {
  configureStore,
  combineReducers,
  PreloadedState
} from "@reduxjs/toolkit";

import continentsReducer from "./continents/continentsSlice";
import countriesReducer from "./countries/countriesSlice";

export const rootReducer = combineReducers({
  continentsState: continentsReducer,
  countriesState: countriesReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
