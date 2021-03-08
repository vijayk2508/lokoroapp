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
import LayoutContainer from '../../components/LayoutContainer';
import ImageTitleDescription from '../../components/ImageTitleDescription';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
import {commonStyle, width} from '../../constants/generalSettings';

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
    <LayoutContainer>
      <ImageTitleDescription
        title="Building Communities for Good"
        description="Please enter the email address you used for your Lokoro account. We will send an email for you to reset your password."
      />
      <KeyboardAvoidingView enabled>
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
                <View style={{marginTop: 30}}>
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

                  <Button
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                    title={'Login'}
                   
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </LayoutContainer>
  );
};
export default ForgotPassword;
