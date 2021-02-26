import React, {useState, createRef, useEffect} from 'react';
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
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../action-reducers/auth/action';
import {assestImages} from '../../assests';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';

const Login = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('vijay@gmail.com');
  const [userPassword, setUserPassword] = useState('12345');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const dispatch = useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = async () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }

    let data = {email: userEmail, password: userPassword};
    setLoading(true);
    const res = await dispatch(login(data));
    if (res.status === 'success') {
      await AsyncStorage.setItem('user_id', JSON.stringify(res.data));
      await navigation.replace('userscreen', {data: res.data});
    } else {
      alert('Username and password are incorrect.');
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
            <View style={{alignItems: 'center'}}>
              <Image
                source={assestImages.logo_white_background}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                  marginBottom: 5,
                }}
              />
              <Text style={styles.logoText}>Building communities for Good</Text>
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
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                value={userEmail}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                value={userPassword}
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
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
                paddingTop: 0,
                marginTop: 0,
                marginBottom: 0,
                alignSelf: 'flex-start',
              }}>
              <Text style={{color: '#1190CB', alignSelf: 'center'}} onPress={()=>navigation.navigate('forgotpassword')}>
                Forgot Password? 
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle}>OR</Text>
            <TouchableOpacity
              style={{...styles.buttonStyle, backgroundColor: 'none'}}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('signUp')}>
              <Text
                style={{
                  ...styles.registerTextStyle,
                  color: themedColors.default.appColor,
                }}>
                Join Lokoro
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;

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
