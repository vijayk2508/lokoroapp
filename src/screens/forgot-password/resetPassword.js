import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {width} from '../../constants/generalSettings';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required('Required.'),
  confirmPassword: Yup.string()
    .when('newPassword', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('newPassword')],
        'Both password need to be the same.',
      ),
    })
    .required('Required.'),
});

const ResetPassword = (props) => {
  const [loading] = useState(false);
  const handleSubmitPress = () => {};

  return (
    <>
      <View style={styles.container}>
        <Formik
          enableReinitialize={true}
          validationSchema={validationSchema}
          initialValues={{newPassword: '', confirmPassword: '', name: ''}}
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
              <View
                style={{
                  flex: 1,
                  marginBottom: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text style={styles.formHeading}>Reset Your Password</Text>
                <TextInput
                  value={values.newPassword}
                  style={styles.inputStyle}
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
                  placeholder="Confirm Password" //12345
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
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};
export default ResetPassword;

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
