import React, {useEffect} from 'react';
import {View} from 'react-native';
import {getAsyncData} from '../constants/generalSettings';

export const AuthUserData = getAsyncData('user_id');
console.log("AuthUserData",JSON.stringify(AuthUserData));
 
export default function AuthLayout(props) {
  useEffect(() => {
    // if (!AuthUserData._W.userObj) {
    //   props.navigation.navigate('auth');
    // }
    return () => {};
  }, []);
  return <View style={{flex: 1}}>{props.children}</View>;
}
