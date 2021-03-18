import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {forgotpassword} from '../../action-reducers/auth/action';

import Loader from '../../components/Loader';
import * as Yup from 'yup';
import {Formik} from 'formik';
import LayoutContainer from '../../components/LayoutContainer';
import ImageTitleDescription from '../../components/ImageTitleDescription';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

const ForgotPassword = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitPress = async (values) => {
    console.log(JSON.stringify(values));
    setLoading(true);
    let data = {email: values.email};
    const res = await dispatch(forgotpassword(data));
    setLoading(false);
    Alert.alert(`${JSON.stringify(res)}`);
    if (res.status === 'success') {
      navigation.navigate('otp', data);
    } else {
      Alert.alert(`Email is not sent to this ${userEmail}. Try Again!`);
    }
  };

  return (
    <LayoutContainer>
      <Loader loading={loading} />
      <ImageTitleDescription
        title="Building Communities for Good"
        description="Please enter the email address you used for your Lokoro account. We will send an email for you to reset your password."
      />
      <KeyboardAvoidingView enabled>
        <Formik
          enableReinitialize={true}
          validationSchema={validationSchema}
          initialValues={{email: ''}}
          onSubmit={(values, formikActions) => {
            handleSubmitPress(values);
            //formikActions.setSubmitting(false);
          }}>
          {({
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
            handleSubmit,
            isSubmitting,
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
                    autoCapitalize="none"
                    maxLength={30}
                  />

                  <Button
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                    title={'Submit'}
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
