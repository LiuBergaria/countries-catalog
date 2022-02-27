import React from 'react';
import CountryItem from 'src/components/CountryItem';
import { mockedCountryItems } from 'src/mocks/countriesItems';
import { render } from '@testing-library/react-native';

test('renders CountryItem correctly', () => {
  const mappedElements = mockedCountryItems.map((country) => (
    <CountryItem key={country.id} data={country} />
  ));

  const { toJSON } = render(<>{mappedElements}</>);

  expect(toJSON()).toMatchSnapshot();
});

test('render CountryItem with image and name', () => {
  const { getByTestId } = render(<CountryItem data={mockedCountryItems[0]} />);

  const image = getByTestId('country-item-image');
  const name = getByTestId('country-item-name');

  expect(image).toBeDefined();
  expect(name).toBeDefined();
});
