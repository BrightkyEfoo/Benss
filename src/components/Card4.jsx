import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Card4 = ({text, name, city}) => {
  return (
    <View
      style={{
        padding: 8,
        gap: 8,
        width : width,
        backgroundColor :'white'
      }}>
      <Image
        source={{
          uri: 'https://benss.dmservices.dev/wp-content/uploads/2019/08/quote-icon.png',
        }}
        style={{
          height: height < 700 ? 30 : 45,
          width: height < 700 ? 30 : 45,
        }}
      />
      <Text
        style={{
          fontSize: height < 700 ? 16 : 20,
          fontWeight: '400',
        }}>
        {text}
      </Text>
      <View
        style={{
          backgroundColor: '#1cba9f',
          width: 100,
          height: 5,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '300',
          fontStyle: 'italic',
        }}>
        {city}
      </Text>
      <Image
        style={{
          height: height > 700 ? height/2-50 : height/2 - 95,
          aspectRatio : 1,
          // alignSelf : 'center',
          resizeMode: 'cover',
          alignSelf : 'center',
        }}
        source={{
          uri: 'https://benss.dmservices.dev/wp-content/uploads/2019/08/testimonial-01.png',
        }}
      />
    </View>
  );
};

export default Card4;
