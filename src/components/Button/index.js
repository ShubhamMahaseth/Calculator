import React, {useState} from 'react';
import {View, Text, Appearance} from 'react-native';
import {lightStyles, darkStyles} from './styles';
import TouchPad from '../TouchPad';

const Button = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleNumberPress = buttonValue => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = buttonValue => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [lightStyles.screenFirstNumber, {color: 'gray'}]
              : [
                  lightStyles.screenFirstNumber,
                  {fontSize: 50, color: myColors.result},
                ]
          }>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={lightStyles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={lightStyles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[lightStyles.screenFirstNumber, {fontSize: 70}]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[light.screenFirstNumber, {fontSize: 50}]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();

        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '×':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '÷':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      case '％':
        clear();
        setResult(parseInt(secondNumber) / 100);
        break;
      default:
        clear();
        setResult(0);
        break;
    }
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
          {secondNumber}
        </Text>

        <Text
          style={
            theme == 'light' ? lightStyles.calculation : darkStyles.calculation
          }>
          {operation}
        </Text>

        {firstNumberDisplay()}
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
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'％'}
            onPress={() => handleOperationPress('％')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'÷'}
            onPress={() => handleOperationPress('÷')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'7'}
            onPress={() => handleNumberPress('7')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'8'}
            onPress={() => handleNumberPress('8')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'9'}
            onPress={() => handleNumberPress('9')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'×'}
            onPress={() => handleOperationPress('×')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'4'}
            onPress={() => handleNumberPress('4')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'5'}
            onPress={() => handleNumberPress('5')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'6'}
            onPress={() => handleNumberPress('6')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'−'}
            onPress={() => handleNumberPress('−')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'1'}
            onPress={() => handleNumberPress('1')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'2'}
            onPress={() => handleNumberPress('2')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'3'}
            onPress={() => handleNumberPress('3')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'+'}
            onPress={() => handleOperationPress('+')}
          />
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
            onPress={() => handleNumberPress('0')}
          />
          <TouchPad
            color={theme == 'light' ? 'black' : '#EAEAEA'}
            theme={theme}
            title={'.'}
            onPress={() => handleNumberPress('.')}
          />
          <TouchPad
            color={'#DC7726'}
            theme={theme}
            title={'='}
            onPress={() => getResult()}
          />
        </View>
      </View>
    </View>
  );
};

export default Button;
