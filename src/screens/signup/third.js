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

const ThirdRegisterScreen = (props) => {
  const [loading] = useState(false);

  const handleSubmitPress = () => {
    if (!props.userDetail.mobile) {
      alert('Please Provide Your Mobile For OTP.');
      return;
    }
    props.updateUserDetail({}, 4);
  };

  return (
    <View>
      <Loader loading={loading} />
      <View style={styles.SectionStyle}>
        <TextInput
          keyboardType="phone-pad"
          placeholderTextColor="#8b9cb5"
          placeholder="Mobile No. for Security Verification" //dummy@abc.com
          style={styles.inputStyle}
          onChangeText={(value) => {
            let num = value.replace('.', '');
            if (isNaN(num)) {
              // Its not a number
            } else {
              props.updateUserDetail({mobile: value});
            }
          }}
          value={props.userDetail.mobile}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.buttonTextStyle}>Get One-Time Security Code</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ThirdRegisterScreen;

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
