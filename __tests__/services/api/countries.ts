import { mockedAPICountries } from 'src/mocks/APICountries';
import { mockedCountryItems } from 'src/mocks/countriesItems';
import { wrapCountry } from 'src/services/api/countries';
import { IAPICountry } from 'src/services/api/countries/types';

test('wrap mocked countries', () => {
  const wrappedCountries = mockedAPICountries.map(wrapCountry);

  expect(wrappedCountries).toStrictEqual(mockedCountryItems);
});

test('wrap country without right attrs', () => {
  expect(() => wrapCountry({} as IAPICountry)).toThrowError();
});
