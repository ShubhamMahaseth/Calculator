import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {lightStyles, darkStyles} from '../TouchPad/styles';

const TouchPad = ({theme, onPress, title, color}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={onPress}
        style={theme == 'light' ? lightStyles.container : darkStyles.container}>
        <Text
          style={[
            theme == 'light' ? lightStyles.textColor : darkStyles.textColor,
            {color: color},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchPad;
