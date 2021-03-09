import {Formik} from 'formik';
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
  AsyncStorage,
  Switch,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../action-reducers/auth/action';
import {UpdateSignUpStep} from '../../action-reducers/signup/action';
import {assestImages} from '../../assests';
import * as Yup from 'yup';
import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import PasswordInput from '../../components/PasswordTextBox';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
import {commonStyle} from '../../constants/generalSettings';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required(''),
  password: Yup.string()
    .required('')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  confirmPassword: Yup.string()
    .required('')
    .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  term: Yup.bool().oneOf([true], 'T & C must be checked'),
});

const FirstRegisterScreen = (props) => {
  const [loading, setLoading] = useState(false);
  // const [errortext, setErrortext] = useState('');

  const handleSubmitPress = async (values) => {
    // if (!props.userDetail.email) {
    //   alert('Please fill Email');
    //   return;
    // }
    // if (!props.userDetail.password) {
    //   alert('Please fill Password');
    //   return;
    // }
    // if (!props.userDetail.confirmPassword) {
    //   alert('Please fill Confirm Password');
    //   return;
    // }

    // if (props.userDetail.confirmPassword !== props.userDetail.password) {
    //   alert('Password is not match');
    //   return;
    // }

    // if (props.userDetail.term === false) {
    //   alert('Please read term and condition.');
    //   return;
    // }
    setLoading(true);
    const res = props.updateUserDetail({...values}, 2);
    setLoading(false);
    if (res === 1) {
    }
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Loader loading={loading} />
      <Formik
        enableReinitialize={true}
        validationSchema={validationSchema}
        initialValues={{
          // email: '',
          // password: '',
          // confirmPassword: '',
          // term: false,
          ...props.userDetail,
        }}
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
          setFieldValue,
        }) => {
          return (
            <>
              <View style={{marginTop: 30}}>
                <Textbox
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="Email Address *"
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
                  placeholder="Password *"
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  errors={errors.password}
                  returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={true}
                  maxLength={15}
                  //placeholderTextColor="#8b9cb5"
                />
                <PasswordInput
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  placeholder="Re-Type Password *"
                  onBlur={handleBlur('confirmPassword')}
                  touched={touched.confirmPassword}
                  errors={errors.confirmPassword}
                  returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={true}
                  maxLength={15}
                  //placeholderTextColor="#8b9cb5"
                />
                <View
                  style={{
                    //...styles.SectionStyle,
                    padding: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    //alignSelf: 'center',
                    alignSelf: 'flex-start',
                  }}>
                  <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
                    I have read and agree to the {''}
                    <Text
                      style={{color: '#1190CB'}}
                      //onPress={props.navigation.navigate('termcondition')}
                    >
                      terms and conditions
                    </Text>
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                    marginLeft: -10,
                  }}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={
                      values.term ? themedColors.default.appColor : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) => setFieldValue('term', value)}
                    value={values.term}
                    // onValueChange={() =>
                    //   props.updateUserDetail({term: !props.userDetail.term})
                    // }
                    // value={props.userDetail.term}
                  />
                  <Text>{values.term ? 'Yes' : 'No'}</Text>
                </View>

                <Button
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  title={'Next'}
                  style={{marginTop: 0}}
                />
              </View>
            </>
          );
        }}
      </Formik>
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
