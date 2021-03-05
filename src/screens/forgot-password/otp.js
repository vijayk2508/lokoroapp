import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../action-reducers/auth/action';
import {assestImages} from '../../assests';
import {withNavigation} from 'react-navigation';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
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
    setLoading(true);
    props.navigation.navigate('resetpassword');
    setLoading(false);
    // let currentOtp = `${pin1}${pin2}${pin3}${pin4}`;
    // if (currentOtp === '1234') {
    //   const {
    //     mobile,
    //     email,
    //     password,
    //     displayName,
    //     userImage,
    //     roleId,
    //     address,
    //     deviceId,
    //     notification,
    //     term,
    //   } = props.userDetail;

    //   const formData = new FormData();
    //   formData.append('mobile', mobile);
    //   formData.append('email', email);
    //   formData.append('password', password);
    //   formData.append('displayName', displayName);
    //   formData.append('otp', currentOtp);
    //   formData.append('notification', notification);
    //   formData.append('term', true);
    //   //formData.append("locoCoinId")
    //   //formData.append("image",userImage)
    //   // formData.append("roleId",roleId)
    //   // formData.append("address",address)
    //   // formData.append("deviceId",deviceId)
    //   setLoading(true);
    //   const res = await dispatch(register(formData));
    //   if (res.status === 'success') {
    //     if (res.data.userObj) {
    //       props.navigation.navigate('startscreen');
    //       props.updateUserDetail({}, 1);
    //       setLoading(false);
    //       return;
    //     } else {
    //       alert(JSON.stringify(res.message));
    //       setLoading(false);
    //       return;
    //     }
    //   }
    // } else {
    //   alert('OTP is incorrect.');
    //   return await 1;
    // }
    // setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      <Loader loading={loading} />
      <Text style={styles.formHeading}>OTP Verification</Text>
      <Text style={styles.description}>
        For the security of your account and the safety of the Lokoro community,
        users need to perform a one-time SMS verification.
      </Text>
      <View style={styles.SectionStyle}>
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
        <Text style={styles.buttonTextStyle}>Verify OTP</Text>
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
  headerStyle: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  description: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 15,
  },
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
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
