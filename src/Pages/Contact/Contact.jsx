import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Header1 from '../../components/head/Header1';
import ContactPart1 from '../../components/ContactParts/ContactPart1';
import ContactPart2 from '../../components/ContactParts/ContactPart2';
import NewsLetters from '../../components/Newsletters/NewsLetters';
import DetailsView from '../../components/DetailsView/DetailsView';
import {RootContext} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import { NavActions } from '../../rtk/features/Nav';
import SplashScreen from '../SlpashScreen/SplashScreen';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Contact = () => {
  const [data, setData] = useState(null);
  const [sliders, setSliders] = useState(null);
  const [sliderStarted, setSliderStarted] = useState(false);
  const [sliderInterval, setSliderInterval] = useState(0);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [sliderIsLoaded, setSliderIsLoaded] = useState(false);
  const [isDetailsDisplayed, setIsDetailsDisplayed] = useState(false);
  const dispatch = useDispatch();
  const {navigationRef} = useContext(RootContext);
  const route = useSelector(state => state.nav.route);

  useEffect(() => {
    axios
      .get(
        'https://benss.dmservices.dev/wp-json/wp/v2/pages?slug=Contact&_fields=acf',
      )
      .then(res => {
        // console.log('re.data', res.data)
        // console.log('res.data[0].acf', res.data[0].acf)
        setData(res.data[0].acf);
        setSliders([
          res.data[0].acf.patner1,
          res.data[0].acf.patner2,
          res.data[0].acf.patner3,
          res.data[0].acf.patner4,
          res.data[0].acf.patner5,
          res.data[0].acf.patner6,
        ]);
        setSliderIsLoaded(true);
      })
      .catch(err => {
        Alert.alert('error : ', err);
      });
  }, []);
  const getItemLayout = (data, index) => {
    return {length: width, offset: width * index, index};
  };
  const sliderRef = useRef();
  useEffect(() => {
    if (sliderIsLoaded && !sliderStarted) {
      setSliderStarted(true);
      setSliderInterval(
        setInterval(() => {
          setCurrentSliderIndex(prev => {
            let a = prev === 5 ? 0 : prev + 1;
            sliderRef.current.scrollToIndex({
              index: a,
              animated: true,
            });
            return a;
          });
        }, 2000),
      );
    }
    // return () => {
    //   clearInterval(sliderInterval);
    // };
  }, [sliderIsLoaded]);
  return data ? (
    <>
      {isDetailsDisplayed && (
        <DetailsView
          setIsDetailsDisplayed={setIsDetailsDisplayed}
          Footer={data.Footer}
        />
      )}
      <Header1
        data={data.content}
        setIsDetailsDisplayed={setIsDetailsDisplayed}
      />
      <ScrollView>
        <Image
          source={{
            uri: data.content.image,
          }}
          style={styles.bannerImage}
        />
        <ImageBackground
          source={{
            uri: data.content.backgroundImage,
          }}
          resizeMode="cover"
          imageStyle={{
            opacity: 0.5,
          }}
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            height: 124,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 16,
            //   gap : 16
          }}
          //   style={}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 16,
            }}>
            {data.content.title}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={e => {
                navigationRef.navigate('Home');
                dispatch(NavActions.setRoute('Home'));
              }}>
              <Text style={styles.smallText}>
                {data.content.links.links1.title}
              </Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>{'-'}</Text>
            <Text style={styles.smallText}>
              {data.content.links.links2.title}
            </Text>
          </View>
        </ImageBackground>
        <ContactPart1
          title={data.contactSection1Title}
          data={[data.part1, data.part2, data.part3, data.part4]}
        />
        <ContactPart2
          data={[data.input1, data.input2, data.input3, data.input4]}
          button={data.button}
          title={data.title}
          subTitle={data.subtitle}
        />

        {sliderIsLoaded && (
          <FlatList
            style={styles.slider}
            ref={sliderRef}
            horizontal
            data={sliders}
            showsHorizontalScrollIndicator
            pagingEnabled
            getItemLayout={getItemLayout}
            renderItem={item => {
              // console.log('item', item);
              return (
                <View
                  key={item.index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // height : 100,
                    width: width,
                  }}>
                  <Image
                    style={styles.partnerImage}
                    source={{
                      uri: item.item.image,
                    }}
                  />
                </View>
              );
            }}
            keyExtractor={item => item.index}
          />
        )}
        <NewsLetters
          title={data.newsletters.title}
          placheholder={data.newsletters.placheholder}
          button={data.newsletters.button}
          foot={data.newsletters.foot}
          image={data.newsletters.image}
        />
        {/* form */}
      </ScrollView>
      {/* <Text>Contact</Text> */}
    </>
  ) : (
    <SplashScreen />
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
  slider: {
    backgroundColor: 'white',
    // maxHeight: 420,
    // height: 100,
    paddingTop: 50,
    paddingBottom: 50,
    maxHeight: height / 2 - 60,
  },
  partnerImage: {
    width: 210,
    height: 90,
    resizeMode: 'contain',
  },
});
export default Contact;
