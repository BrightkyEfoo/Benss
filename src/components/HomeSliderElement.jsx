import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width

const HomeSliderElement = ({
  head1,
  head2,
  main,
  buttonValue,
  buttonLink,
  image,
}) => {
  // console.warn('width : ',width)
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{head1}</Text>
      <Text style={styles.title}>{head2}</Text>
      <Text style={styles.main}>{main}</Text>
      <View style={styles.buttonView}>
        <Text style={styles.button}>{buttonValue}</Text>
      </View>
      <View style={styles.ImageBackground}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 100,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main: {
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonView: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#5c5cb1',
  },
  button: {
    fontSize: 18,
    color: 'white',
  },
  container: {
    backgroundColor: '#a9a9f68c',
    display: 'flex',
    width:  width-20,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    borderRadius: 20,
    paddingRight: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  last:{
    margin : 10,
    padding: 10
  },
  image: {
    height: 100,
    width: 100,
  },
  head: {
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default HomeSliderElement;
