import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Row = ({icon, title, main , color}) => {
  // useEffect(()=>{
  //   console.log()
  // })
  // console.log(image)
  return (
    <View style={styles.container}>
      <Icon style={styles.Icon(color)} name={'appstore1'} size={30} />
      <View style ={styles.right} >
        <Text style = {styles.title}>{title}</Text>
        <Text style = {styles.main}>{main}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    Icon : (color)=>({
        width : 50,
        // height : 50,
        borderRadius : 25,
        backgroundColor : color,
        padding : 10,
        color: 'white'
    }),
    container : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'flex-start',
        gap : 20,
        marginBottom: 2,
        marginTop : 2,
        marginRight : 10,
        marginLeft : 15
    },
    right : {
        flex : 1.4,
        display : 'flex',
        flexDirection : 'column',
    },
    title : {
        fontSize : 20,
        fontWeight : 700
    },
    main : {
        fontSize : 18,
        paddingRight: 10,
        fontWeight : 300
    }
})

export default Row;
