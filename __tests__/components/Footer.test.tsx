import React from 'react';
import renderer from 'react-test-renderer';
import Footer from 'src/components/Footer';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({ bottom: 0 })),
}));

test('renders Footer correctly', () => {
  const tree = renderer.create(<Footer isLoading={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders Footer loading correctly', () => {
  const tree = renderer.create(<Footer isLoading={true} />).toJSON();

  expect(tree).toMatchSnapshot();
});
