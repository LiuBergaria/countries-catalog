import { ICountryItem } from 'src/components/CountryItem/types';
import api from 'src/services/api/api';

import { IAPICountry } from './types';

const Constants = {
  defaultLimit: 20,
};

export const wrapCountry = (country: IAPICountry): ICountryItem => ({
  name: country.name.common,
  flag: country.flags.png,
  id: country.cca2,
});

export const getCountries = async (
  offset = 0,
  limit = Constants.defaultLimit,
): Promise<{ count: number; countries: ICountryItem[] }> => {
  const response = await api.get<IAPICountry[]>('/all');

  const countries = response.data.slice(offset, offset + limit);

  return {
    count: response.data.length,
    countries: countries.map(wrapCountry),
  };
};
