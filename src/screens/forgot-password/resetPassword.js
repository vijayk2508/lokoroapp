import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';

const ResetPassword = (props) => {
  const [loading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [resetPasswordDetails, setresetPasswordDetails] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const handleSubmitPress = () => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      <Loader loading={loading} />
      <Text style={styles.formHeading}>Reset Your Password</Text>
      {/* <Text style={styles.description}>
        For the security of your account and the safety of the Lokoro community,
        users need to perform a one-time SMS verification.
      </Text> */}
      <View style={styles.SectionStyle}>
        <TextInput
          onChangeText={(data) =>
            setresetPasswordDetails({...resetPasswordDetails, password: data})
          }
          value={resetPasswordDetails.password}
          style={styles.inputStyle}
          placeholder="Password" //12345
          placeholderTextColor="#8b9cb5"
          keyboardType="default"
          //onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="#f000"
          returnKeyType="next"
        />
      </View>
      {errortext != '' ? (
        <Text style={styles.errorTextStyle}> {errortext} </Text>
      ) : null}
      <View style={styles.SectionStyle}>
        <TextInput
          onChangeText={(data) =>
            setresetPasswordDetails({
              ...resetPasswordDetails,
              confirmPassword: data,
            })
          }
          value={resetPasswordDetails.confirmPassword}
          style={styles.inputStyle}
          placeholder="Re-Type Password" //12345
          placeholderTextColor="#8b9cb5"
          keyboardType="default"
          //onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="#f000"
          returnKeyType="next"
        />
      </View>
      {errortext != '' ? (
        <Text style={styles.errorTextStyle}> {errortext} </Text>
      ) : null}
      <TouchableOpacity
        style={styles.buttonStyle}
        //activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.buttonTextStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ResetPassword;

const styles = StyleSheet.create({
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
  },
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 25,
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
});
