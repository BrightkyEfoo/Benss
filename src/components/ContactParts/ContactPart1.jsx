import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactPart1 = ({data, title}) => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop : 20,
          marginBottom : 20
        }}>
        {title}
      </Text>
      {data.map((el, i) => {
        return (
          <View
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginBottom: 24,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems : 'center',
                gap: 8,
              }}>
              <Icon name={el.icon} size={50} />
              <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>
                {el.title}
              </Text>
            </View>
            <Text style={{color: 'gray', fontSize: 16, paddingRight: 16}}>
              {el.main}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const Icon = ({name, size}) => {
  switch (name) {
    case 'map':
      return (
        <MCIcon name={'map-search-outline'} size={size} style={styles.icon} />
      );

    case 'phone':
      return <MCIcon name={'phone'} size={size} style={styles.icon} />;
    case 'time':
      return (
        <MCIcon
          name={'clock-time-four-outline'}
          size={size}
          style={styles.icon}
        />
      );
    case 'mail':
      return <MCIcon name={'email'} size={size} style={styles.icon} />;
    default:
      return null;
  }
};
const styles = StyleSheet.create({
  icon: {},
});

export default ContactPart1;
