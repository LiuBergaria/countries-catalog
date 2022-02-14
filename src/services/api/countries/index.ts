import { ICountryItem } from 'src/components/CountryItem/types';
import api from 'src/services/api/api';

import { ICountryAPI } from './types';

const Constants = {
  defaultLimit: 20,
};

const wrapCountry = (country: ICountryAPI): ICountryItem => ({
  name: country.name.common,
  flag: country.flags.png,
  id: country.cca2,
});

export const getCountries = async (
  offset = 0,
  limit = Constants.defaultLimit,
): Promise<{ count: number; countries: ICountryItem[] }> => {
  const response = await api.get<ICountryAPI[]>('/all');

  const countries = response.data.slice(offset, offset + limit);

  return {
    count: response.data.length,
    countries: countries.map(wrapCountry),
  };
};
