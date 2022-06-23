import {StyleSheet, Dimensions} from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textColor: {color: 'black'},
  buttonWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  dataStyle: {
    color: 'red',
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    width: '90%',
    alignItems: 'flex-end',
  },
  keyBoardWrapper: {height: Dimensions.get('screen').height / 2},
  calculation: {
    color: 'black',
    fontWeight: '400',
    fontSize: 38,
    marginBottom: 10,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textColor: {color: 'white'},
  buttonWrapper: {
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  dataStyle: {
    color: 'white',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    width: '90%',
    alignItems: 'flex-end',
  },
  calculation: {
    color: '#EAEAEA',
    fontWeight: '400',
    fontSize: 38,
    marginBottom: 10,
  },
});
