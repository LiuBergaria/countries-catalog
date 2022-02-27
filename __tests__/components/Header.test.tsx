import React from 'react';
import Header from 'src/components/Header';
import { render } from '@testing-library/react-native';

test('renders Header correctly', () => {
  const { toJSON } = render(<Header isLoading={false} />);

  expect(toJSON()).toMatchSnapshot();
});

test('renders Header loading correctly', () => {
  const { toJSON } = render(<Header isLoading={true} />);

  expect(toJSON()).toMatchSnapshot();
});
