import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInputMask from '@rbfraphael/react-native-text-input-mask';
import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {width} from '../../constants/generalSettings';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
// const validationSchema = Yup.object().shape({
//   displayName: Yup.string().required('Required'),
const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    //.matches(phoneRegex, 'Invalid phone')
    .required('Required'),
});

const ThirdRegisterScreen = (props) => {
  const [loading] = useState(false);

  const handleSubmitPress = (values) => {
    props.updateUserDetail({mobile: values.mobile}, 4);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Loader loading={loading} />
      <Formik
        enableReinitialize={true}
        validationSchema={validationSchema}
        initialValues={{
          mobile: ' ',
          //...props.userDetail,
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
              <View style={{marginTop: 30, borderColor: 'red'}}>
                <TextInputMask
                  onChangeText={(formatted, extracted) => {
                    console.log(formatted); // +1 (123) 456-78-90
                    console.log(extracted); // 1234567890
                    setFieldValue('mobile', formatted);
                  }}
                  mask={'+65 [999] [000] [00]'}
                  style={styles.inputStyle}
                  value={values.mobile}
                  onBlur={handleBlur('mobile')}
                  touched={touched.mobile}
                />
                <Text style={styles.errorTextStyle}>{errors.mobile}</Text>
                <Button
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  title={'Get One-Time Security Code'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};
export default ThirdRegisterScreen;

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
    // height: 40,
    // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    // margin: 10,
    width: width - 30,
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
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 60,
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
