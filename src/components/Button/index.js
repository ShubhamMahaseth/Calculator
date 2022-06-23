import React, {useState} from 'react';
import {View, Text, Appearance} from 'react-native';
import {lightStyles, darkStyles} from './styles';
import TouchPad from '../TouchPad';

const Button = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  const [number, setNumber] = useState('');

  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  const printNumber = num => {
    setNumber(number + num);
    console.log(number);
  };

  const clear = () => {
    setNumber('0');
    console.log(number);
  };

  return (
    <View
      style={theme == 'light' ? lightStyles.container : darkStyles.container}>
      <View
        style={theme == 'light' ? lightStyles.dataStyle : darkStyles.dataStyle}>
        <Text
          style={
            theme == 'light' ? lightStyles.calculation : darkStyles.calculation
          }>
          {number}
        </Text>
      </View>
      <View style={lightStyles.keyBoardWrapper}>
        <View
          style={[
            theme == 'light'
              ? lightStyles.buttonWrapper
              : darkStyles.buttonWrapper,
          ]}>
          <TouchPad
            theme={theme}
            color={'#DC7726'}
            title={'C'}
            onPress={() => clear()}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'⌫'}
            onPress={() => printNumber('7')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'％'}
            onPress={() => printNumber('7')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'÷'}
            onPress={() => printNumber('÷')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'7'}
            onPress={() => printNumber('7')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'8'}
            onPress={() => printNumber('8')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'9'}
            onPress={() => printNumber('9')}
          />
          <TouchPad color={'#DC7726'} theme={theme} title={'×'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'4'}
            onPress={() => printNumber('4')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'5'}
            onPress={() => printNumber('5')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'6'}
            onPress={() => printNumber('6')}
          />
          <TouchPad color={'#DC7726'} theme={theme} title={'−'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'1'}
            onPress={() => printNumber('1')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'2'}
            onPress={() => printNumber('2')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'3'}
            onPress={() => printNumber('3')}
          />
          <TouchPad color={'#DC7726'} theme={theme} title={'+'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'NA'}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'0'}
            onPress={() => printNumber('0')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'.'}
            onPress={() => printNumber('.')}
          />
          <TouchPad color={'#DC7726'} theme={theme} title={'='} />
        </View>
      </View>
    </View>
  );
};

export default Button;
