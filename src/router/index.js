import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleProvider} from 'native-base';

import Splash from '../screens/splash';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import UserScreen from '../screens/user-screens';

import getTheme from '../assests/native-base-theme/components';
import material from '../assests/native-base-theme/variables/material';

import {Provider} from 'react-redux';
import {store} from '../action-reducers/store';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            flex: 1,
          },
          title: 'Create Account (1 of 3)',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default function AppRouter() {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
              gestureEnabled: true,
              headerShown: false,
            }}
            // mode="modal"
            //headerMode="float"
          >
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen
              name="auth"
              component={Auth}
              options={{headerShown: false}}
            />

            <Stack.Screen name="userscreen" component={UserScreen} />
            {/* <Stack.Screen name="login">
          {(props) => <Login {...props} apColors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="signUp" component={SignUp} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
}
