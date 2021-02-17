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
import UserScreen from '../screens/user-screens';
import {Provider} from 'react-redux';
import {store} from '../action-reducers/store';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{
          title: '', //Set Header Title
          // headerStyle: {
          //   backgroundColor: '#white', //Set Header color
          // },
          // headerTintColor: '#fff', //Set Header text color
          // headerTitleStyle: {
          //   fontWeight: 'bold', //Set Header text style
          // },
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
            initialRouteName="Auth"
            screenOptions={{
              gestureEnabled: true,
              headerShown: true,
            }}
            // mode="modal"
            headerMode="float">
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen
              name="Auth"
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
