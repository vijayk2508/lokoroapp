import React, {useState, useEffect} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {width} from '../../constants/generalSettings';
import {getAllIndustry} from '../../action-reducers/industry/action';
import Dropdown from '../../components/Dropdown';
import ImageUpload from '../../components/ImageUpload';
import Textbox from '../../components/Textbox';
import TextMaskInput from '../../components/TextMaskInput';
import {Text} from 'native-base';
//import Map from '../map';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  uenNumber: Yup.string().required('Required'),
  businessImage: Yup.mixed().required('Required'),
  contactNumber: Yup.string().required('Required'),
  businessEmail: Yup.string().email('Invalid Email').required('Required'),
  //businessAddressId: Yup.string().required('Required'),
  industryId: Yup.string().required('Required'),
  formatted_address: Yup.string().required('Required'),
  facebookLink: Yup.string(),
  websiteLink: Yup.string(),
  instagramLink: Yup.string(),
});

const ThirdRegisterScreen = (props) => {
  const industryReducer = useSelector((state) => state.industryReducer);

  const [loading] = useState(false);
  let watchID = 0;
  const dispatch = useDispatch();

  const handleSubmitPress = () => {
    props.updateBusinessDetail({}, 4);
  };

  useEffect(() => {
    dispatch(getAllIndustry());
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
      // subscribeLocationLocation();
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
          //subscribeLocationLocation();
        } else {
          //setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getOneTimeLocation = () => {
    //setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        // setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD3RKqsNcG-_oEKltoTc4AccftLv7_Psf0
        Geocoder.init('AIzaSyD3RKqsNcG-_oEKltoTc4AccftLv7_Psf0');
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then((json) => {
            var results = json.results[0];
            props.updateBusinessDetail({
              location: {
                currentLongitude,
                currentLatitude,
                ...results,
                json,
              },
            });
          })
          .catch((error) => console.warn(error));
      },
      (error) => {
        //setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  // const subscribeLocationLocation = () => {
  //   watchID = Geolocation.watchPosition(
  //     (position) => {
  //       const currentLongitude = JSON.stringify(position.coords.longitude);
  //       const currentLatitude = JSON.stringify(position.coords.latitude);
  //       //props.updateBusinessDetail(null,2)
  //       props.updateBusinessDetail({
  //         address: {
  //           latitude: currentLatitude,
  //           longitude: currentLongitude,
  //         },
  //       });
  //     },
  //     (error) => {
  //       // setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       maximumAge: 1000,
  //     },
  //   );
  //   console.log('watchID', watchID);
  //   return watchID;
  // };

  //industryList: action.payload , isLoaded : true
  return (
    <View>
      <Loader loading={loading} />
      <View style={styles.container}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: '',
            uenNumber: '',
            businessImage: '',
            contactNumber: '',
            businessEmail: '',
            businessAddressId: '',
            facebookLink: '',
            websiteLink: '',
            instagramLink: '',
            industryId: '',
            location: {formatted_address: ''},
            formatted_address: props.businessDetail.location.formatted_address,
            ...props.businessDetail,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formikActions) => {
            props.updateBusinessDetail(values, 4);
            formikActions.setSubmitting(false);
            // setTimeout(() => {
            //   Alert.alert(JSON.stringify(values));
            //   formikActions.setSubmitting(false);
            // }, 500);
          }}>
          {({
            //...fProps,
            setFieldValue,
            values,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
            <>
              <View style={{marginTop: 30}}>
                <Text>{JSON.stringify(errors)}</Text>
                <ImageUpload
                  changeImage={(data) => setFieldValue('businessImage', data)}
                />
                <Textbox
                  value={values.name}
                  onChangeText={handleChange('name')}
                  placeholder="Name of Business"
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                  errors={errors.name}
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.name === 'Required' ? false : true}
                />
                <Dropdown
                  listOfItems={industryReducer.industryList}
                  isLoaded={industryReducer.isLoaded}
                  placeholder="Select Your Industry"
                  onChangeItem={(data) => {
                    setFieldValue('industryId', data);
                  }}
                  defaultValue={values.industryId}
                  errors={errors.industryId}
                  onBlur={handleBlur('industryId')}
                  touched={touched.industryId}
                />
                <TextMaskInput
                  onChangeText={(data) => {
                    setFieldValue('uenNumber', data);
                  }}
                  value={values.uenNumber}
                  onBlur={handleBlur('uenNumber')}
                  touched={touched.uenNumber}
                  placeholder="UEN (Required for Registered Business)"
                  errors={errors.uenNumber}
                />
                <Textbox
                  value={values.formatted_address}
                  onChangeText={handleChange('formatted_address')}
                  placeholder="Location of Business"
                  onBlur={handleBlur('formatted_address')}
                  touched={touched.formatted_address}
                  errors={errors.formatted_address}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={
                    errors.formatted_address === 'Required' ? false : true
                  }
                  maxLength={2000}
                />
                {/* <Textbox
                  value={values.contactNumber}
                  onChangeText={handleChange('contactNumber')}
                  placeholder="Business Contact Number"
                  onBlur={handleBlur('contactNumber')}
                  touched={touched.contactNumber}
                  errors={errors.contactNumber}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.contactNumber === 'Required' ? false : true}
                /> */}

                <TextMaskInput
                  onChangeText={(data) => {
                    setFieldValue('contactNumber', data);
                  }}
                  value={values.contactNumber}
                  onBlur={handleBlur('contactNumber')}
                  touched={touched.contactNumber}
                  placeholder="Business Contact Number"
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',

                    withDDD: true,
                    dddMask: '(+65) 9999-9999',
                  }}
                  maxLength={15}
                  errors={errors.contactNumber}
                />

                <Textbox
                  value={values.businessEmail}
                  onChangeText={handleChange('businessEmail')}
                  placeholder="Business Email"
                  onBlur={handleBlur('businessEmail')}
                  touched={touched.businessEmail}
                  errors={errors.businessEmail}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.businessEmail === 'Required' ? false : true}
                />
                <Textbox
                  value={values.websiteLink}
                  onChangeText={handleChange('websiteLink')}
                  placeholder="Website (Optional)"
                  onBlur={handleBlur('websiteLink')}
                  touched={touched.websiteLink}
                  errors={errors.websiteLink}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.websiteLink === 'Required' ? false : true}
                />
                <Textbox
                  value={values.facebookLink}
                  onChangeText={handleChange('facebookLink')}
                  placeholder="Facebook Link (Optional)"
                  onBlur={handleBlur('facebookLink')}
                  touched={touched.facebookLink}
                  errors={errors.facebookLink}
                  // returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.facebookLink === 'Required' ? false : true}
                />
                <Textbox
                  value={values.instagramLink}
                  onChangeText={handleChange('instagramLink')}
                  placeholder="Instagram Link (Optional)"
                  onBlur={handleBlur('instagramLink')}
                  touched={touched.instagramLink}
                  errors={errors.instagramLink}
                  keyboardType="default"
                  autoCapitalize="none"
                  showError={errors.instagramLink === 'Required' ? false : true}
                />
                <Button
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  title={'Next'}
                />
              </View>
              {/* <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <ImageBackground
                  source={{
                    uri:
                      'data:image/jpeg;base64,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',
                  }}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 50}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
              <View style={{flex: 1, marginBottom: 5}}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={fProps.handleChange('name')}
                  onBlur={fProps.handleBlur('name')}
                  value={fProps.values.name}
                  placeholder="Name of Business"
                  onSubmitEditing={() => {
                    // on certain forms, it is nice to move the user's focus
                    // to the next input when they press enter.
                    //this.emailInput.focus()
                  }}
                />
                {fProps.touched.name && fProps.errors.name ? (
                  <Text style={styles.error}>{fProps.errors.name}</Text>
                ) : null}
                <Dropdown
                  listOfItems={industryReducer.industryList}
                  isLoaded={industryReducer.isLoaded}
                  placeholder={'Select Your Industry'}
                  onChangeItem={(data) => {
                    fProps.setFieldValue('industryId', data.value);
                  }}
                  defaultValue={fProps.values.industryId}
                />
                {fProps.touched.industryId && fProps.errors.industryId ? (
                  <Text style={styles.error}>{fProps.errors.industryId}</Text>
                ) : null}
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={fProps.handleChange('uenNumber')}
                  onBlur={fProps.handleBlur('uenNumber')}
                  value={fProps.values.uenNumber}
                  placeholder="UEN (Required for Registered Business)"
                  onSubmitEditing={() => {
                    // on certain forms, it is nice to move the user's focus
                    // to the next input when they press enter.
                    //this.emailInput.focus()
                  }}
                />
                {fProps.touched.uenNumber && fProps.errors.uenNumber ? (
                  <Text style={styles.error}>{fProps.errors.uenNumber}</Text>
                ) : null}
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={fProps.handleChange('formatted_address')}
                  onBlur={fProps.handleBlur('formatted_address')}
                  //value={fProps.values.location}
                  value={fProps.values.formatted_address}
                  placeholder="Location of Business"
                  onSubmitEditing={() => {
                    // on certain forms, it is nice to move the user's focus
                    // to the next input when they press enter.
                    //this.emailInput.focus()
                  }}
                />
                {fProps.touched.formatted_address &&
                fProps.errors.formatted_address ? (
                  <Text style={styles.error}>
                    {fProps.errors.formatted_address}
                  </Text>
                ) : null}
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={fProps.handleChange('contactNumber')}
                  onBlur={fProps.handleBlur('contactNumber')}
                  value={fProps.values.contactNumber}
                  placeholder="Business Contact Number"
                  onSubmitEditing={() => {
                    // on certain forms, it is nice to move the user's focus
                    // to the next input when they press enter.
                    //this.emailInput.focus()
                  }}
                />
                {fProps.touched.contactNumber && fProps.errors.contactNumber ? (
                  <Text style={styles.error}>
                    {fProps.errors.contactNumber}
                  </Text>
                ) : null}
                <TextInput
                  onChangeText={fProps.handleChange('businessEmail')}
                  onBlur={fProps.handleBlur('businessEmail')}
                  value={fProps.values.businessEmail}
                  placeholder="Business Email"
                  style={styles.inputStyle}
                />
                {fProps.touched.businessEmail && fProps.errors.businessEmail ? (
                  <Text style={styles.error}>
                    {fProps.errors.businessEmail}
                  </Text>
                ) : null}
                <TextInput
                  onChangeText={fProps.handleChange('websiteLink')}
                  onBlur={fProps.handleBlur('websiteLink')}
                  value={fProps.values.websiteLink}
                  placeholder="Website (Optional)"
                  style={styles.inputStyle}
                />
                {fProps.touched.websiteLink && fProps.errors.websiteLink ? (
                  <Text style={styles.error}>{fProps.errors.websiteLink}</Text>
                ) : null}
                <TextInput
                  onChangeText={fProps.handleChange('facebookLink')}
                  onBlur={fProps.handleBlur('facebookLink')}
                  value={fProps.values.facebookLink}
                  placeholder="Facebook Link (Optional)"
                  style={styles.inputStyle}
                />
                {fProps.touched.facebookLink && fProps.errors.facebookLink ? (
                  <Text style={styles.error}>{fProps.errors.facebookLink}</Text>
                ) : null}
                <TextInput
                  onChangeText={fProps.handleChange('instagramLink')}
                  onBlur={fProps.handleBlur('instagramLink')}
                  value={fProps.values.instagramLink}
                  placeholder="Instagram Link (Optional)"
                  style={{...styles.inputStyle, marginBottom: 15}}
                />
                {fProps.touched.instagramLink && fProps.errors.instagramLink ? (
                  <Text style={styles.error}>
                    {fProps.errors.instagramLink}
                  </Text>
                ) : null}

                <Button
                  onPress={fProps.handleSubmit}
                  loading={fProps.isSubmitting}
                  disabled={fProps.isSubmitting}
                  style={{height: 40, marginTop: 10}}
                  title="Next"
                  // color="black"
                  // mode="contained"
                />
              </View>
          */}
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ThirdRegisterScreen;

const styles = StyleSheet.create({
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

/*
{
   "plus_code":{
      "compound_code":"CWC8+Q9 Mountain View, CA, USA",
      "global_code":"849VCWC8+Q9"
   },
   "results":[
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJ-4uLeQK6j4AR-TyRRDtksAE",
         "plus_code":[
            "Object"
         ],
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJhehRjJ-5j4ARKFssUSrwnhY",
         "plus_code":[
            "Object"
         ],
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"Google Building 40, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJj38IfwK6j4ARNcyPDnEGa9g",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"Unnamed Road, Mountain View, CA 94043, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJ53O0ZAK6j4ARinpHk0_EvLU",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"Mountain View, CA 94043, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJoQmen1G3j4ARbhoe7nVBEoQ",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"Mountain View, CA, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJiQHsW0m3j4ARm69rRkrUF3w",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"San Francisco Peninsula, California, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJYyep9FV2j4ARqfLae7BmREU",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"Santa Clara County, CA, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJd_Y0eVIvkIARuQyDN0F1LBA",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"California, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJPV4oX_65j4ARVW8IJ6IJUYs",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"United States",
         "geometry":[
            "Object"
         ],
         "place_id":"ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
         "types":[
            "Array"
         ]
      },
      {
         "address_components":[
            "Array"
         ],
         "formatted_address":"CWC8+Q9 Mountain View, CA, USA",
         "geometry":[
            "Object"
         ],
         "place_id":"GhIJ2rtQCgS2QkARTDeJQWCFXsA",
         "plus_code":[
            "Object"
         ],
         "types":[
            "Array"
         ]
      }
   ],
   "status":"OK"
}
*/
