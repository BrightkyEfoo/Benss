import {View, Text, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Card5 from '../Card5';
import Card6 from '../Card6';
import AntIcon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const DetailsView = ({Footer , setIsDetailsDisplayed}) => {
  return (
    <>
        <TouchableOpacity
          style={{position: 'absolute', top: 15, right: 15, zIndex: 30}}
          onPress={e => setIsDetailsDisplayed(false)}>
          <View>
            <AntIcon name="close" color="black" size={40} />
          </View>
        </TouchableOpacity>
        <ScrollView
          style={{
            height: height - 35,
            paddingBottom: 70,
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
              source={{uri: Footer.part1.image.url}}
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
              {Footer.part1.main}
            </Text>
            <Card5
              label={Footer.part1.card1.label}
              icon={'appstore1'}
            />
            <Card5
              label={Footer.part1.card2.label}
              icon={'appstore1'}
            />
            <Card5
              label={Footer.part1.card3.label}
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
              {Footer.part2.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card1.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card2.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card3.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card4.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card5.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card6.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card7.title}
            </Text>
            <Text style={styles.footerLinks}>
              {Footer.part2.card8.title}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              display: 'flex',
              paddingBottom: 70,
              marginBottom: 70,
              // flexDirection : 'row'
            }}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 20,
                fontSize: 40,
                fontWeight: '700',
              }}>
              {Footer.part3.title}
            </Text>
            <Card6
              hour={Footer.part3.card1.hours}
              day={Footer.part3.card1.day}
            />
            <Card6
              hour={Footer.part3.card2.hours}
              day={Footer.part3.card2.day}
            />
            <Card6
              hour={Footer.part3.card3.hours}
              day={Footer.part3.card3.day}
            />
            <Card6
              hour={Footer.part3.card4.hours}
              day={Footer.part3.card4.day}
            />
            <Card6
              hour={Footer.part3.card5.hours}
              day={Footer.part3.card5.day}
            />
            <Card6
              hour={Footer.part3.card6.hours}
              day={Footer.part3.card6.day}
            />
            <Card6
              hour={Footer.part3.card7.hours}
              day={Footer.part3.card7.day}
            />
          </View>
        </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
    footerLinks: {
      fontSize: 20,
      fontWeight: '500',
    },
})
export default DetailsView;
