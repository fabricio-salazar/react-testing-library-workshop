import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "./useCountries.gql";
import { setCountries } from "../../store/countries/countriesSlice";

export const useCountries = () => {
  const dispatch = useDispatch();
  const { error, data, loading } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    data && dispatch(setCountries(data?.countries));
  }, [data, dispatch]);

  return {
    countriesError: error,
    loadingCountries: loading
  };
};
