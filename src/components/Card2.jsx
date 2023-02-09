import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card2 = ({
  image,
  facebook,
  twitter,
  linkedin,
  youtube,
  name,
  work,
  route,
}) => {
  // console.log(name);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="contain"
        style={styles.image}>
        <View style={styles.dfcenter}>
          <Icon style={styles.icon} name={'appstore1'} size={30} />
        </View>
      </ImageBackground>
      <View style = {styles.details}>
        <Text style = {styles.name}>{name}</Text>
        <Text style = {styles.work}>{work}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  name : {
    fontSize : 25,
    fontWeight : '600'
  },
  work : {
    fontStyle : 'italic',
    fontSize : 20
  },
  details : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'
  },  
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: width,
    justifyContent : 'center',
    alignItems: 'center',
  },
  dfcenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    left: 'auto',
    bottom: -20,
  },
  image: {
    height: height / 2 - 100,
    aspectRatio: 1,
    margin: 5,
    position: 'relative',
    marginBottom: 25,
  },
  icon: {
    borderWidth: 1,
    padding : 10,
    borderRadius : 50,
    backgroundColor : 'gray',
    color : 'white'
  },
});
export default Card2;
