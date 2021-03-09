import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding'; // key is not working
import ImageUpload from '../../components/ImageUpload';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';

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

const SecondRegisterScreen = (props) => {
  const [proAddress, setProAddress] = useState({latitude: 0, longitude: 0});
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  let watchID = 0;

  const handleSubmitPress = () => {
    setErrortext('');
    if (!props.userDetail.displayName) {
      alert('Please fill your Name');
      return;
    }

    setLoading(true);
    const res = props.updateUserDetail({}, 3);
    if (res === 1) {
      setLoading(false);
    }
  };

  //// Geo
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        props.updateUserDetail({
          address: {
            latitude: currentLatitude,
            longitude: currentLongitude,
          },
        });

        Geocoder.init('AIzaSyDmIeMMcCu7FECjA1UBzXC_d21drrWbZng');
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then((json) => {
            console.log(json);
            var addressComponent = json.results[0].address_components;

            // setHomeAddress(addressComponent);

            alert(JSON.stringify(addressComponent));
          })

          .catch((error) => console.warn(error));
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        props.updateUserDetail({
          address: {
            latitude: currentLatitude,
            longitude: currentLongitude,
          },
        });
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
    console.log('watchID', watchID);
    return watchID;
  };

  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = (e) => {
    console.log('handleChoosePhoto');
    const ImageOptions = {
      title: 'select image',
      storageOptions: {skipBackup: true, path: 'images'},
      maxWidth: 150,
      maxHeight: 150,
      chooseFromLibraryButtonTitle: 'Choose from gallery',
    };
    ImagePicker.launchImageLibrary(ImageOptions, (response) => {
      if (response.uri) {
        setPhoto(response);
      }
    });
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
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
                  <ImageUpload></ImageUpload>
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

        {/* <View>
        <Loader loading={loading} />
        <View style={styles.container}>
          <ImageUpload></ImageUpload>
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(data) => props.updateUserDetail({displayName: data})}
            value={props.userDetail.displayName}
            placeholder="Display Name on Lokoro"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            //blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            value={`${props.userDetail.address.latitude},${props.userDetail.address.longitude}`}
            // onChangeText={(data) => props.updateUserDetail({displayName: data})}
            placeholder="Home Neighbourhood"
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            //secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            value={proAddress}
            onChangeText={(data) => setProAddress(data)}
            placeholder="School or Work (Optional)"
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonStyle}
          // activeOpacity={0.5}
          onPress={handleSubmitPress}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
     */}
      </SafeAreaView>
    </>
  );
};
export default SecondRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
