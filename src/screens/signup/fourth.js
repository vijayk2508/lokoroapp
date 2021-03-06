import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import {register} from '../../action-reducers/signup/action';
import AsyncStorage from '@react-native-community/async-storage';
//import * as register from '../../action-reducers/signUp/action';

const FourthRegisterScreen = (props) => {
  console.log('props', props);

  const [pin1, setPin1] = useState('1');
  const [pin2, setPin2] = useState('2');
  const [pin3, setPin3] = useState('3');
  const [pin4, setPin4] = useState('4');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    let currentOtp = `${pin1}${pin2}${pin3}${pin4}`;
    if (currentOtp === '1234') {
      setLoading(true);
      const {
        mobile,
        email,
        password,
        displayName,
        image,
        notification,
        workAddress,
        homeAddress,
      } = props.userDetail;
      debugger;
      const formData = new FormData();
      formData.append('mobile', mobile);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('displayName', displayName);
      formData.append('otp', currentOtp);
      formData.append('notification', notification);
      formData.append('term', true);
      formData.append('image', {
        name: image.fileName,
        type: image.type,
        uri:
          Platform.OS === 'android'
            ? image.uri
            : image.uri.replace('file://', ''),
      });

      formData.append('workAddress', workAddress);
      formData.append('homeAddress', homeAddress);
      const res = await dispatch(register(formData));
      if (res.status === 'success') {
        if (res.data.userObj) {
          await AsyncStorage.setItem('user_id', JSON.stringify(res.data));
          props.navigation.navigate('startscreen');
          setLoading(false);
          return;
        } else {
          alert(JSON.stringify(res.message));
          setLoading(false);
          return;
        }
      }
    } else {
      alert('OTP is incorrect.');
      return await 1;
    }
    setLoading(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Loader loading={loading} />
      <View style={{...styles.SectionStyle, marginTop: 20}}>
        <View style={{flex: 1}}>
          <View style={styles.otp}>
            <TextInput
              style={styles.otpBox}
              value={pin1}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(val) => setPin1(val)}></TextInput>
            <TextInput
              style={styles.otpBox}
              value={pin2}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(val) => setPin2(val)}></TextInput>
            <TextInput
              style={styles.otpBox}
              value={pin3}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(val) => setPin3(val)}></TextInput>
            <TextInput
              style={styles.otpBox}
              value={pin4}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(val) => setPin4(val)}></TextInput>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmitPress}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default withNavigation(FourthRegisterScreen);

const styles = StyleSheet.create({
  otp: {
    flex: 0.6,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  otpBox: {
    backgroundColor: '#f5f4f9',
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 40,
    width: '10%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
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
