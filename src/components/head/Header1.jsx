import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width;

const Header1 = ({data, setIsDetailsDisplayed}) => {
  //   console.log('data', data);
  const handleDisplayDetails = e => {
    setIsDetailsDisplayed(prev => !prev);
  };
  return (
    <View>
      <View style={styles.nav}>
        <Image
          style={styles.logo}
          source={{
            uri: data.logo,
          }}
        />
        <View style={styles.df}>
          <TouchableOpacity activeOpacity={0.5} onPress={handleDisplayDetails}>
            <AntIcon name={'filetext1'} size={30} style={styles.topButton} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <AntIcon name={'search1'} size={30} style={styles.topButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row', // flex-direction
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  df: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 0.5,
    flexDirection: 'row',
  },
  topButton: {},
  bannerImage: {
    height: 90,
    width: width,
    resizeMode: 'cover',
  },
  smallText: {
    color: 'white',
    fontSize: 18,
  },
});
export default Header1;
