import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useContext} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {RootContext} from '../../App';
import NavButton from './nav/NavButton';
import {useDispatch} from 'react-redux';
import { NavActions } from '../rtk/features/Nav';

const NavBar = () => {
  const {navigationRef} = useContext(RootContext);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NavActions.setRoute(navigationRef.getCurrentRoute().name));
  }, [navigationRef.getCurrentRoute()]);
  // console.log(navigationRef.getCurrentRoute()?.name);
  return (
    <View style={styles.Container}>
      <NavButton ownedRoute={'Home'} icon={'home'} />
      <NavButton ownedRoute={'About'} icon={'info'} nonNav = {true} iconType={'Entypo'} />
      <NavButton ownedRoute={'Forfaits'} nonNav = {true} icon={'cash'} />
      <NavButton ownedRoute={'Contact'} nonNav = {true} icon={'people'} />
      <NavButton ownedRoute={'News & Blogs'} nonNav = {true} icon={'home'} />
    </View>
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
  ButtonConatiner: bool => ({
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopColor: bool ? 'black' : 'transparent',
    borderTopWidth: bool ? 3 : 0,
    padding: 8,
  }),
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

export default NavBar;
