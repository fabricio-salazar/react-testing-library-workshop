export interface Continent {
  code: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
  capital: string;
  currency: string;
  emoji: string;
  continent: Continent;
}

export enum ContinentsCodes {
  ALL = "all"
}
