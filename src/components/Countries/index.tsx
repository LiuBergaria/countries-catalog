import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CountryItem from 'src/components/CountryItem';
import { CountryItemsConstants } from 'src/components/CountryItem/styles';
import { ICountryItem } from 'src/components/CountryItem/types';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { getCountries } from 'src/services/api/countries';

import styles from './styles';

const initialRequestInfo = {
  hasNextPage: true,
  isRequesting: false,
  loadedCount: 0,
};

const Countries = () => {
  const [countries, setCountries] = useState<ICountryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const requestInfoRef = useRef(initialRequestInfo);

  const loadCountries = useCallback(async () => {
    if (
      !requestInfoRef.current.hasNextPage ||
      requestInfoRef.current.isRequesting
    ) {
      return;
    }

    requestInfoRef.current.isRequesting = true;
    setIsLoading(true);

    const data = await getCountries(requestInfoRef.current.loadedCount);

    setCountries((oldCountries) => {
      const newCountries = [...oldCountries, ...data.countries];

      requestInfoRef.current = {
        isRequesting: false,
        hasNextPage: newCountries.length < data.count,
        loadedCount: newCountries.length,
      };

      return newCountries;
    });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadCountries();
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
        onEndReached={loadCountries}
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
