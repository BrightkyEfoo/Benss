import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useContext} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';
import {RootContext} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {NavActions} from '../../rtk/features/Nav';

const NavButton = ({ownedRoute, icon, iconType, nonNav}) => {
  const {navigationRef} = useContext(RootContext);
  const route = useSelector(state => state.nav.route);
  const dispatch = useDispatch();
  const handlePress = e => {
    if (!nonNav) {
      navigationRef.navigate(ownedRoute);
      dispatch(NavActions.setRoute(ownedRoute));
    }
  };
  return (
    <TouchableHighlight
      underlayColor={'#0000ff5d'}
      style={
        ownedRoute === route ? styles.ButtonConatiner2 : styles.ButtonConatiner1
      }
      onPress={handlePress}>
      <View style={styles.ButtonSubContainer}>
        {iconType === 'Entypo' ? (
          <EntIcon
            name={icon}
            // color="#900"
            size={30}
            style={styles.Icon(route === ownedRoute)}
          />
        ) : (
          <IonIcon
            name={icon}
            // color="#900"
            size={30}
            style={styles.Icon(route === ownedRoute)}
          />
        )}
        <Text>{ownedRoute}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  ButtonSubContainer: {
    alignItems: 'center',
  },
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ButtonConatiner2: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 3,
    padding: 8,
  },
  ButtonConatiner1: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
  },
  Icon: bool => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    color: '#900',
    // color: bool ? 'black' : '#743ecc',
    // fontWeight : bool ? '700' : '400',
  }),
});

export default NavButton;
