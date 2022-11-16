/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from "@mui/material";

import { useContinents } from "../../hooks/useContinents/useContinents.hook";
import { useCountries } from "../../hooks/useCountries/useCountries.hook";

import { Continent, ContinentsCodes } from "../../types";
import { styles } from "./CountriesDashboard.styles";
import { Details } from "../../components/Details/Details.component";
import { CountriesDataGrid } from "../../components/CountriesDataGrid/CountriesDataGrid.component";

import {
  selectActiveContinent,
  selectContinents
} from "../../store/continents/continentsSelector";
import { setActiveContinent } from "../../store/continents/continentsSlice";

import {
  filterCountriesByContinent,
  filterCountriesByName,
  resetCountries
} from "../../store/countries/countriesSlice";
import { selectCountries } from "../../store/countries/countriesSelector";

export const CountriesDashboard = () => {
  const dispatch = useDispatch();
  const [nameFilter, setNameFilter] = useState("");

  const { countriesError, loadingCountries } = useCountries();
  const { continentsError } = useContinents();

  const continents = useSelector(selectContinents);
  const activeContinent = useSelector(selectActiveContinent);
  const countries = useSelector(selectCountries);

  const handleContinentChange = ({ target }: SelectChangeEvent) => {
    dispatch(setActiveContinent(target.value));

    if (target.value === ContinentsCodes.ALL) {
      dispatch(resetCountries());
      return;
    }

    dispatch(filterCountriesByContinent(target.value));
  };

  if (countriesError || continentsError) {
    return <div>Error</div>;
  }

  return (
    <Stack css={styles.container}>
      <div css={styles.titleContainer}>
        <Typography variant="h1">React Testing Library 101</Typography>
      </div>

      <Details />

      <div css={styles.formContainer}>
        <Typography variant="h2">Filters</Typography>
        <form>
          <FormControl fullWidth css={styles.formControl}>
            <InputLabel id="continents-label">Filter by Continent</InputLabel>
            <Select
              onChange={handleContinentChange}
              id="continents-select"
              label="Filter by Continent"
              labelId="continents-label"
              value={activeContinent}
            >
              {continents.map(({ code, name }: Continent) => (
                <MenuItem key={code} value={code}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth css={styles.formControl}>
            <TextField
              id="country-name-filter"
              label="Filter by Name"
              value={nameFilter}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNameFilter(event.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <ButtonGroup>
              <Button
                onClick={() => {
                  dispatch(filterCountriesByName(nameFilter));
                  setNameFilter("");
                }}
                variant="contained"
              >
                Filter by Name
              </Button>

              <Button
                onClick={() => {
                  dispatch(setActiveContinent(ContinentsCodes.ALL));
                  dispatch(resetCountries());
                  setNameFilter("");
                }}
                variant="outlined"
              >
                Clear Filters
              </Button>
            </ButtonGroup>
          </FormControl>
        </form>
      </div>

      <CountriesDataGrid countries={countries} loading={loadingCountries} />
    </Stack>
  );
};
