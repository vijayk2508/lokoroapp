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
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../action-reducers/auth/action';
import {assestImages} from '../../assests';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {width} from '../../constants/generalSettings';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    //.min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = async (values) => {
    let data = {email: values.email, password: values.password};

    setLoading(true);
    const res = await dispatch(login(data));
    if (res.status === 'success') {
      await AsyncStorage.setItem('user_id', JSON.stringify(res.data));
      await navigation.replace('userscreen', {data: res.data});
    } else {
      Alert.alert('Username and password are incorrect.');
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
    <>
      <View style={styles.container}>
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
                <Text style={styles.logoText}>
                  Building Communities for Good
                </Text>
              </View>

              <Formik
                enableReinitialize={true}
                validationSchema={validationSchema}
                initialValues={{email: '', password: ''}}
                onSubmit={(values, formikActions) => {
                  handleSubmitPress(values);
                  formikActions.setSubmitting(false);
                }}>
                {({
                  values,
                  handleChange,
                  handleBlur,
                  touched,
                  errors,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <>
                    <View>
                      <TextInput
                        value={values.email}
                        style={styles.inputStyle}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder="Enter Email"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          passwordInputRef.current &&
                          passwordInputRef.current.focus()
                        }
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                      />
                      {touched.email && errors.email ? (
                        <Text style={styles.error}>{errors.email}</Text>
                      ) : null}
                      <TextInput
                        value={values.password}
                        style={styles.inputStyle}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
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
                      {touched.password && errors.password ? (
                        <Text style={styles.error}>{errors.password}</Text>
                      ) : null}

                      <Text
                        style={{color: '#1190CB', marginTop : 2}}
                        onPress={() => navigation.navigate('forgotpassword')}>
                        Forgot Password?
                      </Text>

                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={handleSubmit}
                        disabled={isSubmitting}>
                        <Text style={styles.buttonTextStyle}> Login </Text>
                      </TouchableOpacity>
                      <Text style={styles.registerTextStyle}>OR</Text>
                      <TouchableOpacity
                        style={{...styles.buttonStyle, backgroundColor: 'none'}}
                        onPress={() => navigation.navigate('signUp')}>
                        <Text
                          style={{
                            ...styles.registerTextStyle,
                            color: themedColors.default.appColor,
                          }}>
                          Join Lokoro
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>

              {/* <View style={styles.SectionStyle}>
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
                <Text
                  style={{color: '#1190CB', alignSelf: 'center'}}
                  onPress={() => navigation.navigate('forgotpassword')}>
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
             */}
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>

      {/* <View style={styles.mainBody}>
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
                <Text style={styles.logoText}>
                  Building Communities for Good
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
                <Text
                  style={{color: '#1190CB', alignSelf: 'center'}}
                  onPress={() => navigation.navigate('forgotpassword')}>
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
   */}
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    margin: 0,
    marginBottom: 4,
    fontSize: 14,
    color: 'red',
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
    marginTop: 15,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
  inputStyle: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 30,
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 1,
  },
  registerTextStyle: {
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
  logoText: {
    color: themedColors.default.appColor,
    fontFamily: 'quicksand',
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
