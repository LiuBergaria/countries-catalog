import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import { ICountryItem } from 'src/components/CountryItem/types';
import { getCountries } from 'src/services/api/countries';

interface ICountriesData {
  countries: ICountryItem[];
  isLoading: boolean;
  loadMoreCountries: () => void;
}

const CountriesData = createContext({} as ICountriesData);

const initialRequestInfo = {
  hasNextPage: true,
  isRequesting: false,
  loadedCount: 0,
};

export const CountriesDataProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<ICountryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const requestInfoRef = useRef(initialRequestInfo);

  const loadMoreCountries = useCallback(async () => {
    if (
      !requestInfoRef.current.hasNextPage ||
      requestInfoRef.current.isRequesting
    ) {
      return;
    }

    requestInfoRef.current.isRequesting = true;
    setIsLoading(true);

    const data = await getCountries(requestInfoRef.current.loadedCount);

    setCountries((oldCountries) => {
      const newCountries = [...oldCountries, ...data.countries];

      requestInfoRef.current = {
        isRequesting: false,
        hasNextPage: newCountries.length < data.count,
        loadedCount: newCountries.length,
      };

      return newCountries;
    });

    setIsLoading(false);
  }, []);

  return (
    <CountriesData.Provider value={{ countries, isLoading, loadMoreCountries }}>
      {children}
    </CountriesData.Provider>
  );
};

export const useCountriesData = () => useContext(CountriesData);
