import React from 'react';
import { View, Text } from 'react-native';

import FastImage from 'react-native-fast-image';

import styles from './styles';
import { ICountryItem } from './types';

interface IProps {
  data: ICountryItem;
}

const CountryItem = ({ data }: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.flag}
        source={{ uri: data.flag }}
        resizeMode={'contain'}
        testID="country-item-image"
      />
      <Text testID="country-item-name" style={styles.name}>
        {data.name}
      </Text>
    </View>
  );
};

export default React.memo(
  CountryItem,
  (prevProps, newProps) => prevProps.data.id === newProps.data.id,
);
