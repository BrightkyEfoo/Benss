import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import React from 'react';

const ContactPart2 = ({data, button, title, subTitle}) => {
  return (
    <View
      style={{
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'rgba(34,58,102,0.9)',
      }}>
      <Text style={{
        textAlign : 'center',
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
        letterSpacing : 2
      }}>{title}</Text>
      <Text style={{
        textAlign : 'center',
        color : 'white',
        fontSize : 36,
        fontWeight : 'bold',
        letterSpacing : 2,
        marginBottom : 25
      }}>{subTitle}</Text>
      {data.map((el, i) => {
        return (
          <TextInput
            multiline={el.type === 'textarea' ? true : false}
            numberOfLines={el.type === 'textarea' ? 3 : 1}
            // maxLength={}
            editable
            key={i}
            placeholder={el.placeholder}
            style={{
              backgroundColor: 'white',
              fontSize: 16,
              //   paddingLeft: 10,
              marginBottom: 15,
              height: el.type === 'textarea' ? 100 : 40,
              padding: 10,
              textAlignVertical: el.type === 'textarea' ? 'top' : 'center',
            }}
          />
        );
      })}
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={{
        backgroundColor : 'white',
        marginTop : 20,
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'center',
        borderRadius : 50
      }}>
        <Text style={{
        fontSize : 24,
        color : '#223a66',
        fontWeight : 'bold'
        }}>{button.value}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ContactPart2;
