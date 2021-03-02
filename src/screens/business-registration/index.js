import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useDispatch, useSelector } from 'react-redux';
import { updateStepIndex } from '../../action-reducers/multisteps/action';

import { assestImages } from '../../assests';
import { themedColors } from '../../constants/Colors';
import { BUSINESSCREATORTYPE, BUSINESSSTATUS, BUSINESSTYPE } from './constant';
import FirstRegisterScreen from './first';
import FourthRegisterScreen from './fourth';
import SecondRegisterScreen from './second';
import ThirdRegisterScreen from './third';

const sliderImages = [assestImages.img1, assestImages.img2];

const initialState = {
  businessCreatorType: BUSINESSCREATORTYPE.OWNER, //"owner", "champion"
  businessType: BUSINESSTYPE.REGISTERED,
  name: '',
  uenNumber: 1234,
  businessImage: '',
  contactNumber: "",
  businessEmail: '',
  businessAddressId: '',
  facebookLink: '',
  websiteLink: '',
  instagramLink: '',
  businessHourId: '',
  industryId: '',
  ownerUserId: '',
  championUserId: '',
  businessRating: 5,
  businessStatus: BUSINESSSTATUS.ACTIVE,
  location : ""
};

function BusinessRegistration(props) {
  const activeIndex = useSelector(
    (state) => state.multiStepReducer.activeIndex,
  );
  console.log("BusinessRegistration", activeIndex);
  const dispatch = useDispatch();
  const [businessDetail, setBusinessDetail] = useState({ ...initialState });

  useEffect(
    () =>
      props.navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        if (activeIndex - 1 < 1) {
          props.navigation.dispatch(e.data.action);
        } else {
          dispatch(updateStepIndex(activeIndex - 1));
        }
      }),
    [props.navigation, activeIndex],
  );

  useEffect(() => {
    dispatch(updateStepIndex(1));
    return () => {
      dispatch(updateStepIndex(1));
    };
  }, []);

  function steps() {
    switch (activeIndex) {
      case 1:
        return (
          <>
            <Text style={styles.formHeading}>Choose Your Profile</Text>
            <FirstRegisterScreen
              businessDetail={businessDetail}
              updateBusinessDetail={updateBusinessDetail}></FirstRegisterScreen>
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.formHeading}>Select Business Type</Text>
            <SecondRegisterScreen
              businessDetail={businessDetail}
              updateBusinessDetail={updateBusinessDetail}></SecondRegisterScreen>
          </>
        );
      case 3:
        return (
          <>
            <ThirdRegisterScreen
              businessDetail={businessDetail}
              updateBusinessDetail={updateBusinessDetail}></ThirdRegisterScreen>
          </>
        );
      case 4:
        return (
          <>
            <View style={styles.headerStyle}>
              <Text style={styles.title}> Meet New Friends </Text>
              <Text style={styles.description}>
                Love to play sports, solve puzzles or go café hopping? Find new
                friends in your neighbourhood who share common Interests and
                passions!
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#E5E5E8',
                borderBottomWidth: 1,
                margin: 15,
                marginLeft: 70,
                marginRight: 70,
              }}
            />

            <Text style={styles.formHeading}>Almost Done!</Text>
            <Text
              style={{
                ...styles.description,
                padding: 70,
                paddingTop: 0,
                paddingBottom: 0,
                marginBottom: 0,
              }}>
              Enter the 4-digit code we sent to {businessDetail.mobile}
            </Text>
            <FourthRegisterScreen
              businessDetail={businessDetail}
              updateBusinessDetail={updateBusinessDetail}
              {...props}></FourthRegisterScreen>
          </>
        );
      default:
        return <></>;
    }
  }

  function updateBusinessDetail(data, idx = null) {
    if (data) { setBusinessDetail({ ...businessDetail, ...data }); }
    if (idx) {
      dispatch(updateStepIndex(idx));
    }
    return 1;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
        }}
        bounces={true}>
        {(activeIndex === 1 || activeIndex === 2) && (
          <>
            <View
              style={{
                flex: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SliderBox
                //ImageComponent={FastImage}
                images={sliderImages}
                sliderBoxHeight={200}
                onCurrentImagePressed={(index) =>
                  console.warn(`image ${index} pressed`)
                }
                dotColor={themedColors.default.appColor}
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                  position: 'absolute',
                  bottom: 0,
                  padding: 0,
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 0,
                  backgroundColor: 'white',
                }}
                ImageComponentStyle={{
                  borderRadius: 15,
                  width: '97%',
                  marginTop: 5,
                }}
                imageLoadingColor="#2196F3"
              />
            </View>
            <View style={styles.headerStyle}>
              <Text style={styles.title}> Get Discovered! </Text>
              <Text style={styles.description}>
                New to the neighbourhood and want to get more people to know
                about you? Forget about distributing flyers. Get listed on
                Lokoro to spread the word!
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#E5E5E8',
                borderBottomWidth: 1,
                margin: 15,
                marginLeft: 70,
                marginRight: 70,
              }}
            />
          </>
        )}

        {steps()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default BusinessRegistration;

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  description: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
