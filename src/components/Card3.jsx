import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const height = Dimensions.get('window').height;

const Card3 = ({image, text}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const handleTouchStart = e => {
    setIsDisplayed(true);
  };
  const handleTouchEnd = e => {
    setIsDisplayed(false)
  };
  return (
    <ImageBackground
      resizeMode="cover"
      source={{uri: image}}
      imageStyle={{
        width: '100%',
      }}
      style={styles.container}>
      <View
        style={{
          height: (height - 310) / 3,
          backgroundColor: isDisplayed ? 'rgba(0,0,0,0.3)' : null,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <>
          {isDisplayed ? (
            <>
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
                size={20}
              />

              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '600',
                  color: 'white',
                }}>
                {text}
              </Text>
              <Icon
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 'auto',
                  padding: 10,
                  borderRadius: 5,
                }}
                name={'appstore1'}
                size={16}
              />
            </>
          ) : null}
        </>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '45%',
    // flex : 0.5,
    heigth: 60,
  },
});
export default Card3;
