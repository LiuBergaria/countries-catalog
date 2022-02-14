import React from 'react';
import renderer from 'react-test-renderer';
import Header from 'src/components/Header';

test('renders Header correctly', () => {
  const tree = renderer.create(<Header isLoading={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders Header loading correctly', () => {
  const tree = renderer.create(<Header isLoading={true} />).toJSON();

  expect(tree).toMatchSnapshot();
});
