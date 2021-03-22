import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {width} from '../../constants/generalSettings';
import {assestImages} from '../../assests';
import {resetNewPassword} from '../../action-reducers/auth/action';
import { withNavigation } from 'react-navigation';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Required.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match.')
    .required('Confirm Password is required.'),
});

const ResetPassword = (props) => {
  const [loading] = useState(false);
  const handleSubmitPress = async(values) => {

    let data = {email: props.route.params.email, password: values.password};

    setLoading(true);
    const res = await dispatch(resetNewPassword(data));
    setLoading(false);
    if (res.status === 'success') {
      props.navigation.navigate('login');
    } else {
      Alert.alert('Password is not reset. please try again!');
    }
   
  };

  return (
    <>
    <Loader></Loader>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.container}>
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

          <Formik
            enableReinitialize={true}
            validationSchema={validationSchema}
            initialValues={{newPassword: '', confirmPassword: ''}}
            onSubmit={(values, formikActions) => {
              handleSubmitPress(values)
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
                <TextInput
                  value={values.newPassword}
                  style={
                    touched.newPassword === true &&
                    errors.newPassword &&
                    errors.newPassword.length > 0
                      ? styles.errorinputStyle
                      : styles.inputStyle
                  }
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  placeholder="New Password" //12345
                  placeholderTextColor="#8b9cb5"
                />
                {touched.newPassword && errors.newPassword ? (
                  <Text style={styles.error}>{errors.newPassword}</Text>
                ) : null}
                <TextInput
                  value={values.confirmPassword}
                  style={styles.inputStyle}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Re- Type Password" //12345
                  placeholderTextColor="#8b9cb5"
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                ) : null}

                {/* <Button
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  style={{height: 40, paddingTop: 10}}
                  title="Submit"
                /> */}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleSubmit}
                  disabled={isSubmitting}>
                  <Text style={styles.buttonTextStyle}> Submit </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

export default withNavigation(ResetPassword);


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
    //margin: 0,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 0,
    margin: 10,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
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
    height: 42,
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
  inputStyle: {
    height: 42,
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
  errorinputStyle: {
    height: 42,
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
