import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import Colors from 'src/styles/Colors';

import styles from './styles';

interface IProps {
  isLoading: boolean;
}

const Header = ({ isLoading }: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Countries List</Text>

        {isLoading && (
          <ActivityIndicator style={styles.loader} color={Colors.lightGrey} />
        )}
      </View>

      <Text style={styles.subtitle}>with infinite scroll</Text>
    </View>
  );
};

export default React.memo(Header);
