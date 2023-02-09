// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Pages/Home/Home';
import About from './src/Pages/About/About';
import Contact from './src/Pages/Contact/Contact';
import Forfait from './src/Pages/Forfait/Forfait';
import NavBar from './src/components/NavBar';
import {Provider, useDispatch} from 'react-redux';
import store from './src/rtk/app/store';
import { NavActions } from './src/rtk/features/Nav';

const Stack = createNativeStackNavigator();
export const RootContext = React.createContext();
function App() {
  const navigationRef = useNavigationContainerRef();
  
  return (
    <Provider store={store}>
      <RootContext.Provider value={{navigationRef}}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Forfaits" component={Forfait} />
            <Stack.Screen name="Other" component={Forfait} />
          </Stack.Navigator>
          <NavBar />
        </NavigationContainer>
      </RootContext.Provider>
    </Provider>
  );
}

export default App;
