import React, { useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CountryItem from 'src/components/CountryItem';
import { CountryItemsConstants } from 'src/components/CountryItem/styles';
import { ICountryItem } from 'src/components/CountryItem/types';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { useCountriesData } from 'src/contexts/CountriesData';

import styles from './styles';

const Countries = () => {
  const { countries, isLoading, loadMoreCountries } = useCountriesData();

  useEffect(() => {
    loadMoreCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem: ListRenderItem<ICountryItem> = useCallback(
    ({ item: data }) => <CountryItem key={data.id} data={data} />,
    [],
  );

  const renderFooter = useCallback(
    () => <Footer isLoading={isLoading} />,
    [isLoading],
  );

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header isLoading={isLoading} />

      <FlatList
        refreshing={isLoading}
        indicatorStyle={'white'}
        style={styles.list}
        data={countries}
        ListFooterComponent={renderFooter}
        renderItem={renderItem}
        onEndReached={loadMoreCountries}
        initialNumToRender={10}
        onEndReachedThreshold={0.2}
        getItemLayout={(_data, index) => ({
          length: CountryItemsConstants.itemHeight,
          offset: CountryItemsConstants.itemHeight * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default Countries;
