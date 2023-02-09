import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import React, {Component, useEffect, useRef, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import HomeSliderElement from '../../components/HomeSliderElement';
import Card1 from '../../components/Card1';
import Row from '../../components/Row';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';
import Card5 from '../../components/Card5';
import Card6 from '../../components/Card6';
import SplashScreen from '../SlpashScreen/SplashScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = () => {
  const Doctors = [
    'Harrisson Samuel',
    'Thomas Henry',
    'James Alexander',
    'Andrews Sebastian',
  ];
  const [homeData, setHomeData] = useState({});
  const [isFormDispalyed, setIsFormDisplayed] = useState(false);
  const [form, setForm] = useState({
    isDisplayed: false,
    option: {
      item: '',
      index: -1,
    },
    name: '',
    age: 0,
    phone: '',
    email: '',
    appointementDate: '',
    time: '',
    message: '',
  });
  const [toplinks, setToplinks] = useState([]);
  const [sliderInterval, setSliderInterval] = useState(0);
  const [sliders, setSliders] = useState([]);
  const [slidersDoctors, setSlidersDoctors] = useState([]);
  const [sliderIsLoaded, setSliderIsLoaded] = useState(false);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [currentSliderIndex3, setCurrentSliderIndex3] = useState(0);
  const [currentSliderIndex4, setCurrentSliderIndex4] = useState(0);
  const [currentSliderIndex2, setCurrentSliderIndex2] = useState(0);
  const [placeholders, setPlaceholders] = useState([]);
  const [date, setDate] = useState(new Date());
  const [dateMode, setDateMode] = useState('date');
  const [dateText, setDateText] = useState('');
  const [timeText, setTimeText] = useState('');
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [Links, setLink] = useState([]);
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setIsTimePickerVisible(true);
    setDate(currentDate);
    let temp = new Date(currentDate);
    let fDate =
      (temp.getDate() < 10 ? '0' + temp.getDate() : temp.getDate()) +
      '/' +
      (temp.getDate() < 10
        ? '0' + (temp.getMonth() + 1)
        : temp.getMonth() + 1) +
      '/' +
      temp.getFullYear();
    let fTime = temp.getHours() + ' : ' + temp.getMinutes();
    setDateText(fDate);
    setTimeText(fTime);

    if (event.type == 'set') {
      setIsTimePickerVisible(false);
      setDate(currentDate);
      return null;
    } else if (event.type == 'dismissed') {
      // dismissedAction
      setIsTimePickerVisible(false);
      return null;
    } else {
      setDate(currentDate);
      // setIsTimePickerVisible(false);
    }
  };
  const setShowMode = currentMode => {
    setIsTimePickerVisible(true);
    setDateMode(currentMode);
  };
  useEffect(() => {
    if (!sliderIsLoaded) {
      axios
        .get(
          'https://benss.dmservices.dev/wp-json/wp/v2/pages?slug=home-page-01&_fields=acf',
        )
        .then(res => {
          setHomeData(res.data[0]);
          // console.log(res.data[0].acf.top_slider1);
          setSliders([
            res.data[0].acf.top_slider1,
            res.data[0].acf.top_slider2,
            res.data[0].acf.top_slider3,
          ]);
          setSlidersDoctors([
            res.data[0].acf.section5.card1,
            res.data[0].acf.section5.card2,
            res.data[0].acf.section5.card3,
            res.data[0].acf.section5.card4,
          ]);

          setPlaceholders([
            res.data[0].acf.form.placeholders.name,
            res.data[0].acf.form.placeholders.age,
            res.data[0].acf.form.placeholders.email,
            res.data[0].acf.form.placeholders.number,
            res.data[0].acf.form.placeholders.appointement,
            res.data[0].acf.form.placeholders.time,
            res.data[0].acf.form.placeholders.message,
          ]);
          setLink([
            res.data[0].acf.section10.links.link1,
            res.data[0].acf.section10.links.link2,
            res.data[0].acf.section10.links.link3,
            res.data[0].acf.section10.links.link4,
            res.data[0].acf.section10.links.link5,
            res.data[0].acf.section10.links.link6,
          ]);
          setDateText(res.data[0].acf.form.placeholders.appointement);
          setTimeText(res.data[0].acf.form.placeholders.time);
          // setToplinks([

          // ])
          // console.log(placeholders);
          // console.log('keys : ',homeData.acf?.form.placeholders.keys)
          setSliderIsLoaded(true);
        })
        .catch(err => {
          Alert.alert('error : ', err);
        });
    }
  }, []);
  const [sliderStarted, setSliderStarted] = useState(false);
  const getItemLayout = (data, index) => {
    return {length: width, offset: width * index, index};
  };
  const getItemLayout3 = (data, index) => {
    return {length: width, offset: width * index, index};
  };
  const getItemLayout2 = (data, index) => {
    return {length: width / 3, offset: (width * index) / 3, index};
  };
  const sliderRef = useRef(null);
  const sliderRef3 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef4 = useRef(null);
  useEffect(() => {
    if (sliderIsLoaded && !sliderStarted) {
      setSliderStarted(true);
      setSliderInterval(
        setInterval(() => {
          setCurrentSliderIndex(prev => {
            let a = prev === 2 ? 0 : prev + 1;
            sliderRef.current.scrollToIndex({
              index: a,
              animated: true,
            });
            return a;
          });

          setCurrentSliderIndex2(prev => {
            let a = prev === 3 ? 0 : prev + 1;
            sliderRef2.current.scrollToIndex({
              index: a,
              animated: true,
            });
            return a;
          });

          setCurrentSliderIndex3(prev => {
            let a = prev === 3 ? 0 : prev + 1;
            sliderRef3.current.scrollToIndex({
              index: a,
              animated: true,
            });
            return a;
          });

          setCurrentSliderIndex4(prev => {
            let a = prev === 2 ? 0 : prev + 1;
            sliderRef4.current.scrollToIndex({
              index: a,
              animated: true,
            });
            return a;
          });
          // console.log(currentSliderIndex)
          // sliderRef.current.scrollToIndex({
          //   index: currentSliderIndex,
          //   animated: true,
          // });
          // console.log('currentSlider : ', currentSliderIndex);
        }, 2500),
      );
      // console.log('slider Interval :', sliderInterval);
    }
  }, [sliderIsLoaded]);
  const [isCardsViewed, setIsCardsViewed] = useState(false);
  const [isDetailsDisplayed, setIsDetailsDisplayed] = useState(false);
  const handleDisplayDetails = e => {
    setIsDetailsDisplayed(prev => !prev);
  };
  return (
    // <SafeAreaView style = {styles.bigContainer}>
    <>
      {!sliderIsLoaded && <SplashScreen />}
      {/* <SplashScreen/> */}
      <View style={styles.container}>
        <View style={styles.nav}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://benss.dmservices.dev/wp-content/uploads/elementor/thumbs/logo-Benss-pyukhysuomokdx1l4e6knlogvms34ycgvg96x8vrrs.png',
            }}
          />
          <View style={styles.df}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handleDisplayDetails}>
              <AntIcon name={'filetext1'} size={30} style={styles.topButton} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <AntIcon name={'search1'} size={30} style={styles.topButton} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isFormDispalyed && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            width: width,
            height: height - 40,
            // paddingTop : 30,
            zIndex: 60,
          }}>
          <View
            style={{
              position: 'absolute',
              width: width,
              paddingTop: 20,
              left: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: width,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setIsFormDisplayed(
                  false,
                ); /*setForm({...form, isDisplayed: true})*/
              }}>
              <AntIcon name="close" size={30} />
            </TouchableOpacity>
            <View style={{gap: 5, marginTop: 10}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 5,
                }}>
                <TextInput
                  placeholder={homeData.acf?.form.placeholders.name}
                  style={styles.emergencyStyle.input}
                />
                <TextInput
                  placeholder={homeData.acf?.form.placeholders.age}
                  style={styles.emergencyStyle.input}
                />
              </View>

              <TextInput
                placeholder={homeData.acf?.form.placeholders.number}
                style={styles.emergencyStyle.input}
              />

              <TextInput
                placeholder={homeData.acf?.form.placeholders.email}
                style={styles.emergencyStyle.input}
              />
              {isTimePickerVisible ? (
                <DateTimePicker
                  testId="dateTimePicker1"
                  value={date}
                  mode={dateMode}
                  is24Hours={true}
                  display="default"
                  onChange={onDateChange}
                />
              ) : null}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 5,
                }}>
                <Text
                  onPress={e => {
                    // if()
                    if (!isTimePickerVisible) {
                      console.log('pressed2');
                      setShowMode('date');
                    }
                    console.log('pressed');
                  }}
                  style={styles.emergencyStyle.input}>
                  {/* {homeData.acf?.form.placeholders.appointement} */}
                  {dateText}
                </Text>

                <Text
                  onPress={e => {
                    // if()
                    // if (!isTimePickerVisible) {
                    //   console.log('pressed2');
                    //   setShowMode('time');
                    // }
                    // console.log('pressed');
                  }}
                  style={styles.emergencyStyle.input}>
                  {/* {homeData.acf?.form.placeholders.appointement} */}
                  {timeText}
                </Text>
              </View>

              <TextInput
                multiline={true}
                numberOfLines={5}
                placeholder={homeData.acf?.form.placeholders.message}
                style={{
                  ...styles.emergencyStyle.input,
                  textAlignVertical: 'top',
                  paddingTop: 15,
                }}
              />
              <TouchableOpacity style={styles.emergencyStyle.submit}>
                <Text style={styles.emergencyStyle.submitText}>
                  {homeData.acf?.form.button}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {isDetailsDisplayed && (
        <TouchableOpacity
          style={{position: 'absolute', top: 15, right: 15, zIndex: 30}}
          onPress={e => setIsDetailsDisplayed(false)}>
          <View>
            <AntIcon name="close" color="black" size={40} />
          </View>
        </TouchableOpacity>
      )}
      {isDetailsDisplayed && (
        <ScrollView
          style={{
            height: height - 30,
            marginingBottom: 170,
            zIndex: 20,
            backgroundColor: '#ffffffff',
            padding: 10,
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <View
            style={{
              gap: 15,
            }}>
            <Image
              source={{uri: homeData.acf?.Footer.part1.image.url}}
              style={{
                width: 210,
                height: 100,
                resizeMode: 'cover',
              }}
            />
            <Text
              style={{
                fontSize: 22,
              }}>
              {homeData.acf?.Footer.part1.main}
            </Text>
            <Card5
              label={homeData.acf?.Footer.part1.card1.label}
              icon={'appstore1'}
            />
            <Card5
              label={homeData.acf?.Footer.part1.card2.label}
              icon={'appstore1'}
            />
            <Card5
              label={homeData.acf?.Footer.part1.card3.label}
              icon={'appstore1'}
            />
          </View>
          <View
            style={{
              marginTop: 40,
            }}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 20,
                fontSize: 40,
                fontWeight: '700',
              }}>
              {homeData.acf?.Footer.part2.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card1.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card2.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card3.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card4.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card5.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card6.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card7.title}
            </Text>
            <Text style={styles.footerLinks}>
              {homeData.acf?.Footer.part2.card8.title}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              display: 'flex',
              // flexDirection : 'row'
            }}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 20,
                fontSize: 40,
                fontWeight: '700',
              }}>
              {homeData.acf?.Footer.part3.title}
            </Text>
            <Card6
              hour={homeData.acf?.Footer.part3.card1.hours}
              day={homeData.acf?.Footer.part3.card1.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card2.hours}
              day={homeData.acf?.Footer.part3.card2.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card3.hours}
              day={homeData.acf?.Footer.part3.card3.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card4.hours}
              day={homeData.acf?.Footer.part3.card4.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card5.hours}
              day={homeData.acf?.Footer.part3.card5.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card6.hours}
              day={homeData.acf?.Footer.part3.card6.day}
            />
            <Card6
              hour={homeData.acf?.Footer.part3.card7.hours}
              day={homeData.acf?.Footer.part3.card7.day}
            />
          </View>
        </ScrollView>
      )}

      <ScrollView>
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
              <HomeSliderElement
                head1={item.item.preheader}
                head2={item.item.header}
                main={item.item.main}
                buttonValue={item.item.button?.label}
                image={item.item.image}
                key={item.index}
              />
            );
          }}
          keyExtractor={item => item.index}
        />
        <View style={styles.linksContainer}>
          <View style={styles.linksView}>
            <View style={styles.simpleDf}>
              <AntIcon style={styles.linksIcon} name={'contacts'} size={18} />
              <Text style={styles.linksViewHeader}>
                {homeData.acf?.links1.label}
              </Text>
            </View>
            <AntIcon
              // style={{borderWidth: 1, width: 30}}
              name={'right'}
              size={15}
              color="white"
            />
          </View>
          <View style={styles.linksView}>
            <View style={styles.simpleDf}>
              <FontistoIcon
                style={styles.linksIcon}
                name={'doctor'}
                size={18}
              />
              <Text style={styles.linksViewHeader}>
                {homeData.acf?.links2.label}
              </Text>
            </View>
            <AntIcon
              // style={{borderWidth: 1, width: 30}}
              name={'right'}
              size={15}
              color="white"
            />
          </View>
          <View
            style={{
              marginTop: 5,
              marginBottom: 5,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.1)',
              padding: 6,
              paddingTop: 2,
              display: 'flex',
              gap: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontistoIcon style={styles.linksIcon} name={'phone'} size={15} />
            <View>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                {homeData.acf?.links3.label}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '300', color: 'white'}}>
                {homeData.acf?.links3.head}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Card1
            sens={0}
            head={homeData.acf?.card1.title}
            main={homeData.acf?.card1.main}
            // icon={homeData.acf?.card1.icon}
            icon={'appstore1'}
          />
          <Card1
            sens={1}
            head={homeData.acf?.card2.title}
            main={homeData.acf?.card2.main}
            // icon={homeData.acf?.card2.icon}
            icon={'appstore1'}
          />
          <Card1
            sens={0}
            head={homeData.acf?.card3.title}
            main={homeData.acf?.card3.main}
            // icon={homeData.acf?.card3.icon}
            icon={'appstore1'}
          />
        </View>
        <View>
          <ImageBackground
            source={{uri: homeData.acf?.section4.image}}
            resizeMode="contain"
            imageStyle={{
              position: 'absolute',
              left: 0,
              width: width / 2 - 40,
            }}
            style={styles.bigImage}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                marginLeft: 15,
                marginRight: 15,
              }}>
              {homeData.acf?.section4.title}
            </Text>
          </ImageBackground>
          <Row
            icon={homeData.acf?.section4.row1.icon}
            title={homeData.acf?.section4.row1.head}
            main={homeData.acf?.section4.row1.label}
            color={'#1cba9f'}
          />
          <Row
            icon={homeData.acf?.section4.row2.icon}
            title={homeData.acf?.section4.row2.head}
            main={homeData.acf?.section4.row2.label}
            color={'#558dca'}
          />
          <Row
            icon={homeData.acf?.section4.row3.icon}
            title={homeData.acf?.section4.row3.head}
            main={homeData.acf?.section4.row3.label}
            color={'#223a66'}
          />
        </View>

        <View style={styles.section5}>
          <Text style={styles.section5Head}>
            {homeData.acf?.section5.head.title}
          </Text>
          <Text style={styles.section5Main}>
            {homeData.acf?.section5.head.main}
          </Text>
        </View>
        <FlatList
          style={styles.slider2}
          ref={sliderRef2}
          horizontal
          data={slidersDoctors}
          showsHorizontalScrollIndicator
          pagingEnabled
          getItemLayout={getItemLayout3}
          renderItem={item => {
            // console.log('item', item);
            return (
              <Card2
                key={item.index}
                name={item.item.name}
                facebook={item.item.facebook}
                twitter={item.item.twitter}
                linkedin={item.item.linkedin}
                youtube={item.item.youtube}
                work={item.item.work}
                image={item.item.image}
              />
            );
          }}
          keyExtractor={item => item.index}
        />

        <View style={styles.headsContainer}>
          <Text style={styles.headingTest.head1}>
            {homeData.acf?.main.title}
          </Text>
          <Text style={styles.headingTest.head2}>
            {homeData.acf?.main.head1} {homeData.acf?.main.head2}
          </Text>
          <Text style={styles.headingTest.head4}>
            {homeData.acf?.main.head3}
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.headingTest.main}>{homeData.acf?.main.main}</Text>
        </View>

        <View style={styles.emergency}>
          <Text style={styles.emergencyStyle.title}>
            {homeData.acf?.form.title}
          </Text>
          <Text style={styles.emergencyStyle.bigTitle}>
            {homeData.acf?.form.head}
          </Text>
          <SelectDropdown
            // ref = selectDropDownRef
            buttonStyle={styles.emergencyStyle.input}
            buttonTextStyle={{color: 'gray'}}
            data={Doctors}
            // searchPlaceHolder='yo'
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setForm(prev => ({
                ...prev,
                isDisplayed: true,
                option: {index, item: selectedItem},
              }));
              setIsFormDisplayed(true);
              console.log(isFormDispalyed, '2');
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            padding: height < 700 ? 10 : 15,
            width: width,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: height < 700 ? 7 : 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: height < 700 ? 20 : 35,
              fontWeight: '700',
            }}>
            {homeData.acf?.section7.head.title}
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: height < 700 ? 16 : 20,
              fontWeight: '500',
            }}>
            {homeData.acf?.section7.head.main}
          </Text>
        </View>
        <View>
          <Card1
            head={homeData.acf?.section7.card1.title}
            main={homeData.acf?.section7.card1.main}
            // icon={homeData.acf?.card3.icon}
            icon={'appstore1'}
          />
          <Card1
            head={homeData.acf?.section7.card2.title}
            main={homeData.acf?.section7.card2.main}
            // icon={homeData.acf?.card3.icon}
            icon={'appstore1'}
          />
          <Card1
            head={homeData.acf?.section7.card3.title}
            main={homeData.acf?.section7.card3.main}
            // icon={homeData.acf?.card3.icon}
            icon={'appstore1'}
          />
          {height < 700 ? (
            <>
              {!isCardsViewed && (
                <Button
                  onPress={() => {
                    setIsCardsViewed(true);
                  }}
                  style={{
                    alignSelf: 'center',
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 50,
                  }}
                  title="See more"
                />
              )}
              {isCardsViewed && (
                <>
                  <Card1
                    head={homeData.acf?.section7.card4.title}
                    main={homeData.acf?.section7.card4.main}
                    // icon={homeData.acf?.card3.icon}
                    icon={'appstore1'}
                  />
                  <Card1
                    head={homeData.acf?.section7.card5.title}
                    main={homeData.acf?.section7.card5.main}
                    // icon={homeData.acf?.card3.icon}
                    icon={'appstore1'}
                  />
                  <Card1
                    head={homeData.acf?.section7.card6.title}
                    main={homeData.acf?.section7.card6.main}
                    // icon={homeData.acf?.card3.icon}
                    icon={'appstore1'}
                  />
                  <TouchableHighlight
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      setIsCardsViewed(false);
                    }}>
                    <AntIcon name="close" size={30} />
                  </TouchableHighlight>
                </>
              )}
            </>
          ) : (
            <>
              <Card1
                head={homeData.acf?.section7.card4.title}
                main={homeData.acf?.section7.card4.main}
                // icon={homeData.acf?.card3.icon}
                icon={'appstore1'}
              />
              <Card1
                head={homeData.acf?.section7.card5.title}
                main={homeData.acf?.section7.card5.main}
                // icon={homeData.acf?.card3.icon}
                icon={'appstore1'}
              />
              <Card1
                head={homeData.acf?.section7.card6.title}
                main={homeData.acf?.section7.card6.main}
                // icon={homeData.acf?.card3.icon}
                icon={'appstore1'}
              />
            </>
          )}
        </View>
        <ImageBackground
          style={{display: 'flex', padding: 5, marginTop: 50}}
          source={{uri: homeData.acf?.section8.head.image}}
          resizeMode="cover">
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              height: 130,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              {homeData.acf?.section8.head.title}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            positon: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            top: -100,
            gap: 5,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <Card3
            text={homeData.acf?.section8.card1.text}
            image={homeData.acf?.section8.card1.image}
          />
          <Card3
            text={homeData.acf?.section8.card2.text}
            image={homeData.acf?.section8.card2.image}
          />
          <Card3
            text={homeData.acf?.section8.card3.text}
            image={homeData.acf?.section8.card3.image}
          />
          <Card3
            text={homeData.acf?.section8.card4.text}
            image={homeData.acf?.section8.card4.image}
          />
          <Card3
            text={homeData.acf?.section8.card5.text}
            image={homeData.acf?.section8.card5.image}
          />
          <Card3
            text={homeData.acf?.section8.card6.text}
            image={homeData.acf?.section8.card6.image}
          />
          <TouchableOpacity
            style={{
              width: 250,
              padding: 5,
              backgroundColor: 'blue',
              borderRadius: 25,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: height < 700 ? 16 : 18,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              {homeData.acf?.section8.button.text}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: height < 700 ? 25 : 35,
              fontWeight: height < 700 ? '500' : '700',
            }}>
            {homeData.acf?.section9.title}
          </Text>
          <FlatList
            // style={{

            // }}
            ref={sliderRef4}
            horizontal
            data={[1, 2, 3]}
            showsHorizontalScrollIndicator
            pagingEnabled
            getItemLayout={getItemLayout}
            renderItem={item => {
              // console.log('item', item);
              return (
                <Card4
                  text={homeData.acf?.section9['card' + item.item].main}
                  name={homeData.acf?.section9['card' + item.item].footer1}
                  city={homeData.acf?.section9['card' + item.item].footer2}
                  image={''}
                />
              );
            }}
            keyExtractor={item => item?.index}
          />
          {/* <Card4
            text={homeData.acf?.section9.card1.main}
            name={homeData.acf?.section9.card1.footer1}
            city={homeData.acf?.section9.card1.footer2}
            image={''}
          />
          <Card4
            text={homeData.acf?.section9.card2.main}
            name={homeData.acf?.section9.card2.footer1}
            city={homeData.acf?.section9.card2.footer2}
            image={''}
          />
          <Card4
            text={homeData.acf?.section9.card3.main}
            name={homeData.acf?.section9.card3.footer1}
            city={homeData.acf?.section9.card3.footer2}
            image={''}
          />
          <Card4
            text={homeData.acf?.section9.card4.main}
            name={homeData.acf?.section9.card4.footer1}
            city={homeData.acf?.section9.card4.footer2}
            image={''}
          /> */}
        </View>

        {/* <View
          style={{
            marginTop: 35,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '700',
              textAlign: 'center',
              margin: 10,
            }}>
            {homeData.acf?.section10.head.title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            {homeData.acf?.section10.head.main}
          </Text>
        </View> */}

        <FlatList
          style={styles.Links}
          ref={sliderRef3}
          horizontal
          data={Links}
          showsHorizontalScrollIndicator
          pagingEnabled
          getItemLayout={getItemLayout2}
          renderItem={item => {
            // console.log('item', item);
            return (
              <View
                key={item?.index}
                style={{
                  display: 'flex',
                  width: width / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.item?.image}}
                  style={{width: width / 3, height: 70, resizeMode: 'contain'}}
                />
              </View>
            );
          }}
          keyExtractor={item => item?.index}
        />
        <View
          style={{
            backgroundColor: '#4054B2',
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
            {homeData.acf?.newsletters.title}
          </Text>
          <View
            style={{
              marginTop: 25,
              marginBottom: 25,
            }}>
            <TextInput
              placeholder={homeData.acf?.newsletters.placheholder}
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
                {homeData.acf?.newsletters.button.value}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                color: 'gray',
              }}>
              {homeData.acf?.newsletters.foot}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  footerLinks: {
    fontSize: 20,
    fontWeight: '500',
  },
  Links: {
    marginTop: 35,
    marginBottom: 35,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#80808033',
  },
  emergencyStyle: {
    submitText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    submit: {
      width: 250,
      alignSelf: 'center',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 20,
      paddingLeft: 15,
      padding: 8,
      backgroundColor: 'blue',
      borderRadius: 10,
    },
    input: {
      fontSize: 20,
      textAlign: 'left',
      borderRadius: 5,
      borderWidth: 2,
      flex: 1,
      flexGrow: 1,
      paddingLeft: 15,
      padding: 8,
      color: 'gray',
      borderColor: 'gray',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      left: 0,
      gap: 15,
      alignItems: 'center',
      marginTop: 25,
      zIndex: 20,
      height: height,
      backgroundColor: 'black',
      borderWidth: 2,
      // heigth: 700,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
    },
    bigTitle: {
      marginTop: 15,
      fontSize: 40,
      fontWeight: '700',
      width: '70%',
    },
  },
  emergency: {
    padding: 5,
  },
  bigContainer: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  headsContainer: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 25,
    marginBottom: 5,
  },
  headingTest: {
    main: {
      fontSize: 18,
    },
    head1: {
      fontSize: 16,
      fontWeight: '700',
    },
    head2: {
      fontSize: 30,
      fontWeight: '700',
      color: '#1cba9f',
    },
    head3: {
      fontSize: 30,
      fontWeight: '700',
    },
    head4: {
      fontSize: 20,
      fontWeight: '700',
    },
  },
  line: {
    width: 70,
    backgroundColor: '#1cba9f',
    height: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  section5Head: {
    margin: 10,
    fontSize: 20,
    fontWeight: '900',
  },
  section5Main: {
    textAlign: 'center',
    fontSize: 19,
  },
  section5: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 50,
  },
  bigImage: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    resizeMode: 'cover',
    height: width / 2,
  },
  linksIcon: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    // width: 38,
    height: 'auto',
    padding: 8,
    borderRadius: 5,
  },
  linksFooterLink: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linksContainer: {
    marginTop: 10,
    backgroundColor: '#1cb89d',
    paddingTop: 15,
    paddingLeft: 8,
    paddingBottom: 15,
    paddingRight: 8,
  },
  linksView: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 6,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linksViewHeader: {
    fontSize: 20,
    color: 'white',
  },
  topLinks: {
    display: 'flex',
  },
  simpleDf: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  container: {
    margin: 10,
  },
  slider: {
    backgroundColor: 'white',
    // maxHeight: 420,
    height: height / 2 - 60,
    maxHeight: height / 2 - 60,
  },
  slider2: {
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row', // flex-direction
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
  },
  df: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 0.5,
    flexDirection: 'row',
  },
  topButton: {},
});

export default Home;
