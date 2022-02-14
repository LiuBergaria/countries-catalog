import { StyleSheet } from 'react-native';

import Colors from 'src/styles/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 28,
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.lightGrey,
    fontSize: 16,
  },
  loader: {
    position: 'absolute',
    left: 24,
  },
});

export default styles;
