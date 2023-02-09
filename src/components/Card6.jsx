import {View, Text} from 'react-native';
import React from 'react';

const Card6 = ({day, hour}) => {
  return (
    <View
      style={{
        gap: 8,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
        }}>
        {day}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
        }}>
        {hour}
      </Text>
    </View>
  );
};

export default Card6;
