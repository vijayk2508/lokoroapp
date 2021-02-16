import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleProvider} from 'native-base';

import Splash from '../screens/splash';
import Login from '../screens/login';
import SignUp from '../screens/signup';

import getTheme from '../assests/native-base-theme/components';
import material from '../assests/native-base-theme/variables/material';

const Stack = createStackNavigator();

export default function AppRouter() {
  return (
    <StyleProvider style={getTheme(material)}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          // screenOptions={{
          //   gestureEnabled: true,
          //   headerShown: false,
          // }}
          // mode="modal"
          headerMode="none">
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signUp" component={SignUp} />
          {/* <Stack.Screen name="login">
          {(props) => <Login {...props} apColors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="signUp" component={SignUp} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}
