import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import { ContinentsCodes } from "../../types";
import { GET_CONTINENTS } from "./useContinents.gql";
import { setContinents as setContinentsAction } from "../../store/continents/continentsSlice";

const ALL_CONTINENTS_ITEM = {
  code: ContinentsCodes.ALL,
  name: "All"
};

export const useContinents = () => {
  const dispatch = useDispatch();
  const { error, data, loading } = useQuery(GET_CONTINENTS);

  useEffect(() => {
    data &&
      dispatch(setContinentsAction([ALL_CONTINENTS_ITEM, ...data.continents]));
  }, [data, dispatch]);

  return {
    continentsError: error,
    loadingContinents: loading
  };
};
