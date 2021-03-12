import {Formik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
//import AutoSuggest from '../../components/AutoSuggest';

import ImageUpload from '../../components/ImageUpload';

const validationSchema = Yup.object().shape({
  image: Yup.mixed().required('Required'),
  displayName: Yup.string().required('Required'),
  homeAddress: Yup.string().required('Required'),
  workAddress: Yup.string().required('Required'),
});

const SecondRegisterScreen = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = (values) => {
    setLoading(true);
    // const res = props.updateUserDetail({...values}, 2);
    // setLoading(false);
    // if (res === 1) {
    // }

    const res = props.updateUserDetail({...values}, 3);
    if (res === 1) {
      setLoading(false);
    }
  };

  const neighbourhood = useSelector((state) => state.neighbourhoodReducer);

  return (
    <View style={{alignItems: 'center'}}>
      <Loader loading={loading} />
      <Formik
        enableReinitialize={true}
        validationSchema={validationSchema}
        initialValues={{
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
              {/* <Text>{JSON.stringify(values)}</Text> */}
              <View style={{marginTop: 30}}>
                <ImageUpload
                  changeImage={async (data) =>
                    await setFieldValue('image', data)
                  }></ImageUpload>
                <Textbox
                  value={values.displayName}
                  onChangeText={handleChange('displayName')}
                  placeholder="Display Name on Lokoro"
                  onBlur={handleBlur('displayName')}
                  touched={touched.displayName}
                  errors={errors.displayName}
                  //returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.displayName === 'Required' ? false : true}
                  maxLength={20}
                />
                <Textbox
                  value={values.homeAddress}
                  onChangeText={handleChange('homeAddress')}
                  placeholder="Home Neighbourhood"
                  onBlur={handleBlur('homeAddress')}
                  touched={touched.homeAddress}
                  errors={errors.homeAddress}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.homeAddress === 'Required' ? false : true}
                />
                <Textbox
                  value={values.workAddress}
                  onChangeText={handleChange('workAddress')}
                  placeholder="School or Work (Optional)"
                  onBlur={handleBlur('workAddress')}
                  touched={touched.workAddress}
                  errors={errors.workAddress}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.workAddress === 'Required' ? false : true}
                />
                <Button
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  title={'Next'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default SecondRegisterScreen;

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
