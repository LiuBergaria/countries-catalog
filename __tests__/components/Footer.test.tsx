import React from 'react';

import { render } from '@testing-library/react-native';

import Footer from 'src/components/Footer';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({ bottom: 0 })),
}));

test('renders Footer correctly', () => {
  const { toJSON } = render(<Footer isLoading={false} />);

  expect(toJSON()).toMatchSnapshot();
});

test('renders Footer loading correctly', () => {
  const { toJSON } = render(<Footer isLoading={true} />);

  expect(toJSON()).toMatchSnapshot();
});
