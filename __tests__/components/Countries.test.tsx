import React from 'react';
import '@testing-library/react-native/dont-cleanup-after-each';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  cleanup,
  waitFor,
} from '@testing-library/react-native';
import { CountriesDataProvider } from 'src/contexts/CountriesData';
import Countries from 'src/components/Countries';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CountryItemsConstants } from 'src/components/CountryItem/styles';
import { mockedAPICountries } from 'src/mocks/APICountries';
import MockAdapter from 'axios-mock-adapter';
import api from 'src/services/api/api';

const flatListEndNativeEvent = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: CountryItemsConstants.itemHeight * 20,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: CountryItemsConstants.itemHeight * 20,
      width: 100,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: CountryItemsConstants.itemHeight * 20,
      width: 100,
    },
  },
};

const TestSafeAreaProvider: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {children}
    </SafeAreaProvider>
  );
};

describe('check Countries flow with infinite scroll', () => {
  const axiosMock = new MockAdapter(api);
  axiosMock.onGet('/all').reply(200, mockedAPICountries);

  afterAll(() => {
    cleanup();
    axiosMock.reset();
  });

  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <TestSafeAreaProvider>
      <CountriesDataProvider>
        <Countries />
      </CountriesDataProvider>
    </TestSafeAreaProvider>,
  );

  test('has initial loading spinners', () => {
    expect(getByTestId('header-loading-spinner')).toBeDefined();
    expect(getByTestId('footer-loading-spinner')).toBeDefined();
  });

  test('correctly rendered 10 items', async () => {
    await waitForElementToBeRemoved(() =>
      getByTestId('header-loading-spinner'),
    );

    expect(getAllByTestId('country-item')).toHaveLength(10);
  });

  test('fetch new data when reach screen bottom', async () => {
    fireEvent.scroll(getByTestId('countries-list'), flatListEndNativeEvent);

    await waitFor(() => {
      expect(queryByTestId('header-loading-spinner')).toBeDefined();
      expect(queryByTestId('footer-loading-spinner')).toBeDefined();
    });
  });

  test('correctly rendered 20 items', async () => {
    expect(getAllByTestId('country-item')).toHaveLength(20);
  });
});
