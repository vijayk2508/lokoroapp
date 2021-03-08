// import React from 'react';

// function ForgotPassword() {
//   return (
//     <View>
//       <Text> Hi </Text>
//     </View>
//   );
// }

// export default ForgotPassword;

import React, {useState, createRef, useEffect} from 'react';
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
import {useDispatch} from 'react-redux';
import {forgotpassword} from '../../action-reducers/auth/action';
import {assestImages} from '../../assests';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {withNavigation} from 'react-navigation';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

const ForgotPassword = ({navigation}) => {
  const handleSubmitPress = () => {
    // let data = {email: userEmail};
    //setLoading(true);
    //const res = await dispatch(forgotpassword(data));
    //alert(JSON.stringify(res));
    //if (res.status === 'success') {
    navigation.navigate('otp');
    //} else {
    //alert(`Email is not sent to this ${userEmail}. Try Again!`);
    //}
    //setLoading(false);
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
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
                  width: '80%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                  marginBottom: 5,
                }}
              />
              <Text style={styles.logoText}>Building Communities for Good</Text>
              <Text
                style={{
                  margin: 40,
                  marginTop: 6,
                  marginBottom: 20,
                  fontFamily: 'Quicksand',
                  color: '#676767',
                  fontSize: 16,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Please enter the email address you used for your Lokoro account.
                We will send an email for you to reset your password.
              </Text>
            </View>
            <Formik
              enableReinitialize={true}
              validationSchema={validationSchema}
              initialValues={{email: ''}}
              onSubmit={(values, formikActions) => {}}>
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
                  <View style={styles.SectionStyle}>
                    <TextInput
                      value={values.email}
                      style={styles.inputStyle}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder="Email" //12345
                      placeholderTextColor="#8b9cb5"
                    />
                  </View>
                  {touched.email && errors.email ? (
                    <Text style={{...styles.error}}>{errors.email}</Text>
                  ) : null}
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonTextStyle}>Submit</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default withNavigation(ForgotPassword);

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
    marginBottom: 0,
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
  error: {
    margin: 3,
    marginBottom: 4,
    marginLeft: 35,
    marginRight: 35,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
});
