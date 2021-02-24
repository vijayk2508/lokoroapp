import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useDispatch, useSelector} from 'react-redux';
import {updateStepIndex} from '../../action-reducers/multisteps/action';

import {assestImages} from '../../assests';
import {themedColors} from '../../constants/Colors';
import FirstRegisterScreen from './first';
import FourthRegisterScreen from './fourth';
import SecondRegisterScreen from './second';
import ThirdRegisterScreen from './third';

const sliderImages = [assestImages.img1, assestImages.img2];

const initialState = {
  mobile: '',
  email: '',
  password: '',
  displayName: '',
  userImage: '',
  roleId: '',
  address: {latitude: 0, longitude: 0},
  deviceId: '',
  notification: false,
  term: false,
  confirmPassword: '',
};

function SignUp(props) {
  const activeIndex = useSelector((state) => state.signupReducer.activeIndex);
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({...initialState});

  useEffect(
    () =>
      props.navigation.addListener('beforeRemove', (e) => {
        // if (activeIndex > -1) {
        //   // If we don't have unsaved changes, then we don't need to do anything
        //   return;
        // }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen

        if (activeIndex - 1 < 1) {
          // Alert.alert(
          //   'Discard Registration Process?',
          //   'Are you sure to discard them and leave the screen?',
          //   [
          //     // {
          //     //   text: 'Go Back',
          //     //   style: 'cancel',
          //     //   onPress: () => {
          //     //   },
          //     // },
          //     {text: "Don't leave", style: 'cancel', onPress: () => {}},
          //     {
          //       text: 'Discard',
          //       style: 'destructive',
          //       // If the user confirmed, then we dispatch the action we blocked earlier
          //       // This will continue the action that had triggered the removal of the screen
          //       onPress: () => props.navigation.dispatch(e.data.action),
          //     },
          //   ],
          // );
          props.navigation.dispatch(e.data.action);
        } else {
          dispatch(updateStepIndex(activeIndex - 1));
        }
      }),
    [props.navigation, activeIndex],
  );

  function steps() {
    switch (activeIndex) {
      case 1:
        return (
          <>
            <View style={styles.headerStyle}>
              <Text style={styles.title}> Buy and Sell with Neighbours </Text>
              <Text style={styles.description}>
                List items you want to sell, rent, share or giveaway to your
                neighbours. Contribute to a greener planet by passing on
                pre-loved items you no longer need to others!
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

            <Text style={styles.formHeading}>Create Your Sign in</Text>
            <FirstRegisterScreen
              userDetail={userDetail}
              updateUserDetail={updateUserDetail}></FirstRegisterScreen>
          </>
        );
      case 2:
        return (
          <>
            <View style={styles.headerStyle}>
              <Text style={styles.title}> Post and Find Jobs </Text>
              <Text style={styles.description}>
                Whether you need help with an urgent delivery or a babysitter
                for your kids, find someone you can trust from the neighbourhood
                on Lokoro!
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

            <Text style={styles.formHeading}>Setup Your Profile</Text>
            <SecondRegisterScreen
              userDetail={userDetail}
              updateUserDetail={updateUserDetail}></SecondRegisterScreen>
          </>
        );
      case 3:
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

            <Text style={styles.formHeading}>Secure Your Account</Text>
            <Text style={styles.description}>
              For the security of your account and the safety of the Lokoro
              community, users need to perform a one-time SMS verification.
            </Text>
            <ThirdRegisterScreen
              userDetail={userDetail}
              updateUserDetail={updateUserDetail}></ThirdRegisterScreen>
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
              Enter the 4-digit code we sent to {userDetail.mobile}
            </Text>
            <FourthRegisterScreen
              userDetail={userDetail}
              updateUserDetail={updateUserDetail}
              {...props}></FourthRegisterScreen>
          </>
        );
      default:
        return <></>;
    }
  }

  function updateUserDetail(data, idx) {
    setUserDetail({...userDetail, ...data});
    if (idx) {
      dispatch(updateStepIndex(idx));
    }
    return 1;
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
        }}
        bounces={false}>
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
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
        </View>
        {steps()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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
