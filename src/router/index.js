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
import ForgotPassword from '../screens/forgot-password';
import getTheme from '../assests/native-base-theme/components';
import material from '../assests/native-base-theme/variables/material';

import {Provider, useSelector} from 'react-redux';
import {store} from '../action-reducers/store';
import StartScreen from '../screens/signup/startscreen';
import BusinessRegistration from '../screens/business-registration';
import OTP from '../screens/forgot-password/otp';
import ResetPassword from '../screens/forgot-password/resetPassword';
import TermCondition from '../screens/term&condition';

const Stack = createStackNavigator();
const options = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  title: '',
  headerTitleAlign: 'center',
  headerShown: true,
};

const Auth = () => {
  const multiStepReducer = useSelector((state) => state.multiStepReducer);
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen
        name="forgotpassword"
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
              {`Forgot Password`}
            </Text>
          ),
        }}
        component={ForgotPassword}
      />
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
              {`Create Account (${multiStepReducer.activeIndex} of 4)`}
            </Text>
          ),
        }}>
        {(props) => <SignUp {...props}></SignUp>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const UserBusinessRegistration = () => {
  const multiStepReducer = useSelector((state) => state.multiStepReducer);
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName="businessregister">
      <Stack.Screen
        name="businessregister"
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
              {`Register (${multiStepReducer.activeIndex} of 4)`}
            </Text>
          ),
        }}>
        {(props) => <BusinessRegistration {...props}></BusinessRegistration>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const AppRouter = () => {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="auth"
            screenOptions={{
              gestureEnabled: true,
              headerShown: false,
            }}
            // mode="modal"
            //headerMode="float"
          >
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen
              name="termcondition"
              component={TermCondition}
              options={options}
            />

            <Stack.Screen
              name="auth"
              component={Auth}
              options={{headerShown: false}}
            />
            <Stack.Screen name="otp" component={OTP} options={options} />
            <Stack.Screen
              name="resetpassword"
              component={ResetPassword}
              options={options}
            />
            <Stack.Screen name="userscreen" component={UserScreen} />
            <Stack.Screen
              name="startscreen"
              options={{
                ...options,
                headerRight: () => (
                  <Text
                    style={{marginRight: 10, fontWeight: '900', fontSize: 18}}>
                    Complete
                  </Text>
                ),
              }}
              component={StartScreen}
            />
            <Stack.Screen
              name="userBusinessRegistration"
              component={UserBusinessRegistration}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
};

export default AppRouter;
