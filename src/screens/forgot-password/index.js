// import React from 'react';

// function ForgotPassword() {
//   return (
//     <View>
//       <Text> Hi </Text>
//     </View>
//   );
// }

// export default ForgotPassword;


import React, { useState, createRef, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { forgotpassword } from '../../action-reducers/auth/action';
import { assestImages } from '../../assests';

import Loader from '../../components/Loader';
import { themedColors } from '../../constants/Colors';

const ForgotPassword = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const handleSubmitPress = async () => {
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }

    let data = { email: userEmail };
    setLoading(true);
    const res = await dispatch(forgotpassword(data));
    alert(JSON.stringify(res));
    if (res.status === 'success') {
      navigation.replace('otp');
    } else {
      alert(`Email is not sent to this ${userEmail}. Try Again!`);
    }
    setLoading(false);
  };

  function handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={assestImages.logo_white_background}
                style={{
                  width: '80%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                  marginBottom: 5,

                }}
              />
              <Text style={styles.logoText}>Building communities for Good</Text>
              <Text style={{
                margin: 40,
                marginTop: 6,
                marginBottom: 20,
                fontFamily: 'Quicksand',
                color: '#676767',
                fontSize: 16,
                alignSelf: 'center',
                textAlign: 'center',
              }}>
                Please enter the email address you used for your Lokoro account. We will send an email for you to reset your password.
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                value={userEmail}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  logoText: {
    color: themedColors.default.appColor,
    //fontFamily : "Goo"
    fontSize: 20,
    marginTop: 0,
    fontWeight: '300',
    marginBottom: 8,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    marginBottom: 0
  },
  buttonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    //color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    //color: '#FFFFFF',

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
