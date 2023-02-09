import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Card5 = ({icon, label, link}) => {
  return (
    <View
      style={{
        display: 'flex',
        gap: 20,
        flexDirection : 'row',
        alignItems : 'center',
        margin : 10,
        marginTop : 25
      }}>
      <Icon
        style={{
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          height: 'auto',
          padding: 10,
          borderRadius: 5,
        }}
        name={'appstore1'}
        size={30}
      />
      <Text style={{
        fontSize : 20,
        width: 300
      }}>{label}</Text>
    </View>
  );
};

export default Card5;
