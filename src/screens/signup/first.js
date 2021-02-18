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
  Switch,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../action-reducers/auth/action';
import {assestImages} from '../../assests';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';

const FirstRegisterScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const dispatch = useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = async () => {
    // setErrortext('');
    // if (!email) {
    //   alert('Please fill Email');
    //   return;
    // }
    // if (!password) {
    //   alert('Please fill Password');
    //   return;
    // }
    // if (!confirmPassword) {
    //   alert('Please fill Confirm Password');
    //   return;
    // }

    // if (confirmPassword !== password) {
    //   alert('Password is not match');
    //   return;
    // }
    props.setActive(2);
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <View>
        {/* <KeyboardAvoidingView enabled> */}
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(data) => setEmail(data)}
            placeholder="Email Address*"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            //   onSubmitEditing={() =>
            //     passwordInputRef.current && passwordInputRef.current.focus()
            //   }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            value={email}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            value={password}
            style={styles.inputStyle}
            onChangeText={(data) => setPassword(data)}
            placeholder="Password" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            //ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
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
            value={confirmPassword}
            style={styles.inputStyle}
            onChangeText={(data) => setConfirmPassword(data)}
            placeholder="Re-Type Password" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            //   ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}
        <View
          style={{
            ...styles.SectionStyle,
            padding: 0,
            marginTop: 0,
            marginBottom: 0,
            alignSelf: 'center',
          }}>
          <Text style={{alignSelf: 'center'}}>
            I have read and agree to the terms and conditions
          </Text>
        </View>

        <View
          style={{
            ...styles.SectionStyle,
            padding: 0,
            marginTop: 0,
            marginBottom: 0,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? themedColors.default.appColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>{isEnabled ? 'Yes' : 'No'}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleSubmitPress}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  );
};

export default FirstRegisterScreen;

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
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    //color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
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
