import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleProvider} from 'native-base';

import Splash from '../screens/splash';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import UserScreen from '../screens/user-screens';

import getTheme from '../assests/native-base-theme/components';
import material from '../assests/native-base-theme/variables/material';

import {Provider, useSelector} from 'react-redux';
import {store} from '../action-reducers/store';
import StartScreen from '../screens/signup/startscreen';

const Stack = createStackNavigator();

const Auth = () => {
  const signUpFormReducer = useSelector((state) => state.signupReducer);
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
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          title: '',
          headerTitleAlign: 'center',
          headerShown: true,
          headerRight: () => (
            <Text style={{marginRight: 10, fontWeight: '900', fontSize: 18}}>
              {`Create Account (${signUpFormReducer.activeIndex} of 4)`}
            </Text>
          ),
        }}>
        {(props) => <SignUp {...props}></SignUp>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function AppRouter() {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="startscreen"
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
            <Stack.Screen name="startscreen" component={StartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
}
