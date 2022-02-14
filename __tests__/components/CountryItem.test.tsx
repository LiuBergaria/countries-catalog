import React from 'react';
import renderer from 'react-test-renderer';
import CountryItem from 'src/components/CountryItem';
import { mockedCountryItems } from 'src/mocks/countriesItems';

test('renders CountryItem correctly', () => {
  const mappedElements = mockedCountryItems.map((country) => (
    <CountryItem key={country.id} data={country} />
  ));

  const tree = renderer.create(<>{mappedElements}</>).toJSON();

  expect(tree).toMatchSnapshot();
});
