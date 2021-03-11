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
import {useDispatch, useSelector} from 'react-redux';
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
import AutoSuggest from '../../components/AutoSuggest';
import ImageUpload from '../../components/ImageUpload';

const validationSchema = Yup.object().shape({
  displayName: Yup.string().email('Email is invalid').required('Required'),
});

const SecondRegisterScreen = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = async (values) => {
    setLoading(true);
    const res = props.updateUserDetail({...values}, 2);
    setLoading(false);
    if (res === 1) {
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
              <View style={{marginTop: 30}}>
                <ImageUpload></ImageUpload>
                <Textbox
                  value={values.displayName}
                  onChangeText={handleChange('displayName')}
                  placeholder="Email Address *"
                  onBlur={handleBlur('displayName')}
                  touched={touched.displayName}
                  errors={errors.displayName}
                  returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.displayName === 'Required' ? false : true}
                />
                <AutoSuggest
                  id="homeneighbourhood"
                  name="homeneighbourhood"
                  options={neighbourhood.neighbourhoodList}
                  onChangeText={(value) => {
                    //  const regex = new RegExp(`${value.trim()}`, 'i');
                    //  const neighbourhoodData = neighbourhood.neighbourhoodList.filter(
                    //    (item) => item.label.search(regex) >= 0,
                    //  );
                    setFieldValue('homeneighbourhood', value);
                  }}
                />
                <Button
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  title={'Next'}
                  // style={{marginTop: 0}}
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
