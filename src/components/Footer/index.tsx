import React from 'react';
import { ActivityIndicator, Linking, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from 'src/styles/Colors';

import styles from './styles';

interface IProps {
  isLoading: boolean;
}

const Footer = ({ isLoading }: IProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom }}>
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={Colors.lightGrey}
        />
      )}

      <Text
        style={styles.providedBy}
        onPress={() => Linking.openURL('https://restcountries.com')}
      >
        Provided by https://restcountries.com/
      </Text>
    </View>
  );
};

export default React.memo(Footer);
