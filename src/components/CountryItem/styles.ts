import { StyleSheet } from 'react-native';

import Colors from 'src/styles/Colors';

export const CountryItemsConstants = {
  itemHeight: 60,
};

const styles = StyleSheet.create({
  container: {
    height: CountryItemsConstants.itemHeight,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 60,
    height: 30,
  },
  name: {
    fontSize: 16,
    marginLeft: 16,
    color: Colors.white,
    flex: 1,
  },
});

export default styles;
