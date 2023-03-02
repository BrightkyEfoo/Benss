import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

const NewsLetters = ({title, placheholder, button, foot , image}) => {
  return (
    <ImageBackground
    source={{
        uri : image,
    }}
    resizeMode='cover'
    imageStyle = {{
        opacity : 0.5
    }}
      style={{
        backgroundColor: 'rgba(25, 42, 74, 1)',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          fontWeight: '700',
        }}>
        {title}
      </Text>
      <View
        style={{
          marginTop: 25,
          marginBottom: 25,
        }}>
        <TextInput
          placeholder={placheholder}
          placeholderTextColor={'white'}
          style={{
            fontSize: 20,
            fontWeight: '600',
            paddingLeft: 20,
            borderWidth: 1,
            borderColor: 'white',
            color: 'white',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            {button?.value}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            color: 'gray',
          }}>
          {foot}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default NewsLetters;
