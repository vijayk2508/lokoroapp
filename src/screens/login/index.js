import React, {useState, createRef, useEffect, useRef} from 'react';
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
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import PasswordInput from '../../components/PasswordTextBox';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required(''),
  password: Yup.string()
    .required('')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
});
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
              <Text style={styles.logoText}>Building Communities for Good</Text>
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
                setValues,
                resetForm,
              }) => {
                return (
                  <>
                    <View>
                      <Textbox
                        value={values.email}
                        onChangeText={handleChange('email')}
                        placeholder="Enter Email"
                        onBlur={handleBlur('email')}
                        touched={touched.email}
                        errors={errors.email ? errors.email : ''}
                        returnKeyType="next"
                        keyboardType="email-address"
                        //placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                      />
                      <PasswordInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder="Enter Password"
                        onBlur={handleBlur('password')}
                        touched={touched.password}
                        errors={errors.password}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                        showError={true}
                        //placeholderTextColor="#8b9cb5"
                      />
                      <Text
                        style={{color: '#1190CB', marginTop: 2}}
                        onPress={() => navigation.navigate('forgotpassword')}>
                        Forgot Password?
                      </Text>

                      {/* <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={handleSubmit}
                      disabled={isSubmitting}>
                      <Text style={styles.buttonTextStyle}> Login </Text>
                    </TouchableOpacity> */}

                      <Button
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                        title={'Login'}></Button>

                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            backgroundColor: '#dadae8',
                            height: 2,
                            flex: 1,
                            alignSelf: 'center',
                          }}
                        />
                        <Text
                          style={{
                            ...styles.registerTextStyle,
                            fontSize: 14,
                            color: '#141414',
                          }}>
                          OR
                        </Text>
                        <View
                          style={{
                            backgroundColor: '#dadae8',
                            height: 2,
                            flex: 1,
                            alignSelf: 'center',
                          }}
                        />
                      </View>

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
                );
              }}
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
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
