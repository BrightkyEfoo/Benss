import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SplashScreen = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: height,
        width: width,
        backgroundColor: 'white',
        zIndex: 100,
        gap: 50,
      }}>
      <Image source={require('../../../assets/images/bens-logo.png')} />
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.65)"
        source={require('../../../assets/loader.json')}
        animationStyle={{
          width: 150,
          height: 100,
        }}
        speed={1}
      />
    </View>
  );
};

export default SplashScreen;
