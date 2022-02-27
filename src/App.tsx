import React from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CountriesDataProvider } from 'src/contexts/CountriesData';

import Countries from './components/Countries';
import Colors from './styles/Colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darkGrey} />

      <CountriesDataProvider>
        <Countries />
      </CountriesDataProvider>
    </SafeAreaProvider>
  );
};

export default App;
