import { GET_COUNTRIES } from "../hooks/useCountries/useCountries.gql";
import { GET_CONTINENTS } from "../hooks/useContinents/useContinents.gql";
import { Country } from "../types";

export const countriesMock: Country[] = [
  {
    id: "CR",
    name: "Costa Rica",
    capital: "San JosΓ©",
    currency: "CRC",
    emoji: "π¨π·",
    continent: {
      code: "NA",
      name: "North America"
    }
  },
  {
    id: "CO",
    name: "Colombia",
    capital: "BogotΓ‘",
    currency: "COP",
    emoji: "π¨π΄",
    continent: {
      code: "SA",
      name: "South America"
    }
  },
  {
    id: "MX",
    name: "Mexico",
    capital: "Mexico City",
    currency: "MXN",
    emoji: "π²π½",
    continent: {
      code: "NA",
      name: "North America"
    }
  },
  {
    id: "US",
    name: "United States",
    capital: "Washington D.C.",
    currency: "USD,USN,USS",
    emoji: "πΊπΈ",
    continent: {
      code: "NA",
      name: "North America"
    }
  },
  {
    id: "CH",
    name: "Switzerland",
    capital: "Bern",
    currency: "CHE,CHF,CHW",
    emoji: "π¨π­",
    continent: {
      code: "EU",
      name: "Europe"
    }
  },
  {
    id: "FR",
    name: "France",
    capital: "Paris",
    currency: "EUR",
    emoji: "π«π·",
    continent: {
      code: "EU",
      name: "Europe"
    }
  },
  {
    id: "GB",
    name: "United Kingdom",
    capital: "London",
    currency: "GBP",
    emoji: "π¬π§",
    continent: {
      code: "EU",
      name: "Europe"
    }
  },
  {
    id: "JP",
    name: "Japan",
    capital: "Tokyo",
    currency: "JPY",
    emoji: "π―π΅",
    continent: {
      code: "AS",
      name: "Asia"
    }
  },
  {
    id: "NZ",
    name: "New Zealand",
    capital: "Wellington",
    currency: "NZD",
    emoji: "π³πΏ",
    continent: {
      code: "OC",
      name: "Oceania"
    }
  },
  {
    id: "GH",
    name: "Ghana",
    capital: "Accra",
    currency: "GHS",
    emoji: "π¬π­",
    continent: {
      code: "AF",
      name: "Africa"
    }
  }
];

export const graphQLMocks = [
  {
    request: {
      query: GET_CONTINENTS
    },
    result: {
      data: {
        continents: [
          {
            code: "AF",
            name: "Africa"
          },
          {
            code: "AN",
            name: "Antarctica"
          },
          {
            code: "AS",
            name: "Asia"
          },
          {
            code: "EU",
            name: "Europe"
          },
          {
            code: "NA",
            name: "North America"
          },
          {
            code: "OC",
            name: "Oceania"
          },
          {
            code: "SA",
            name: "South America"
          }
        ]
      }
    }
  },
  {
    request: {
      query: GET_COUNTRIES
    },
    result: {
      data: {
        countries: countriesMock
      }
    }
  }
];
