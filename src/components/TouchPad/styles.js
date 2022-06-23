import {StyleSheet, Dimensions} from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    height: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {color: 'black', fontSize: 36, fontWeight: '300'},
});
export const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',

    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {color: 'white', fontSize: 36, fontWeight: '300'},
});
