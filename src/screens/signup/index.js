import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useDispatch, useSelector} from 'react-redux';
import {updateStepIndex} from '../../action-reducers/multisteps/action';

import {assestImages} from '../../assests';
import LayoutContainer from '../../components/LayoutContainer';
import {themedColors} from '../../constants/Colors';
import {defaultfontFamily} from '../../constants/generalSettings';
import CustomPagination from './CustomPagination';
import FirstRegisterScreen from './first';
import FourthRegisterScreen from './fourth';
import SecondRegisterScreen from './second';
import ThirdRegisterScreen from './third';

const {width} = Dimensions.get('window');
const newImage = [assestImages.img1, assestImages.img2];

const dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

const swiperData = [
  {
    image: assestImages.img1,
    title: 'Buy and Sell with Neighbours',
    description:
      'List items you want to sell, rent, share or giveaway to your neighbours. Contribute to a greener planet by passing on pre-loved items you no longer need to others!',
  },
  {
    image: assestImages.img2,
    title: 'Post and Find Jobs',
    description:
      'Whether you need help with an urgent delivery or a babysitter for your kids, find someone you can trust from the neighbourhood on Lokoro!',
  },
  {
    image: assestImages.img3,
    title: 'Meet New Friends',
    description:
      'Love to play sports, solve puzzles or go café hopping? Find new friends in your neighbourhood who share common Interests and passions!',
  },
];

const initialState = {
  mobile: '',
  email: 'test@gmail.com',
  password: 'Test@123',
  displayName: 'Test',
  image: '',
  roleId: '',
  homeAddress: 'Bishan',
  workAddress: 'Bishan',
  deviceId: '',
  notification: false,
  term: true,
  confirmPassword: 'Test@123',
};

function SignUp(props) {
  const activeIndex = useSelector(
    (state) => state.multiStepReducer.activeIndex,
  );
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({...initialState});

  useEffect(
    () =>
      props.navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

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
            {/* <View style={styles.headerStyle}>
              <Text style={styles.title}> Buy and Sell with Neighbours </Text>
              <Text style={styles.description}>
                List items you want to sell, rent, share or giveaway to your
                neighbours. Contribute to a greener planet by passing on
                pre-loved items you no longer need to others!
              </Text>
            </View> */}
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
              updateUserDetail={updateUserDetail}
              {...props}></FirstRegisterScreen>
          </>
        );
      case 2:
        return (
          <>
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
            <Text style={{...styles.description, margin: 25, marginBottom: 0}}>
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

  async function updateUserDetail(data, idx) {
    setUserDetail({...userDetail, ...data});
    if (idx) {
      await dispatch(updateStepIndex(idx));
    }
    return 1;
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}
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
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            // index={3}
            autoplayLoop
            // autoplayInvertDirection
            showPagination
            paginationStyleItem={{marginTop: -140}}
            paginationDefaultColor={themedColors.default.appColor}
            paginationActiveColor={'black'}
            paginationStyleItemActive={{
              borderColor: themedColors.default.appColor,
              border: 2,
            }}
            data={swiperData}
            renderItem={({item, index}) => (
              <>
                <ImageBackground
                  source={item.image}
                  style={{
                    ...styles.image,
                  }}>
                  <View
                    style={{
                      ...styles.headerStyle,
                    }}>
                    <Text style={{...styles.title}}> {item.title} </Text>
                    <Text style={{...styles.description}}>
                      {item.description}
                    </Text>
                  </View>
                </ImageBackground>
              </>
            )}
            contentContainerStyle={{
              height: heightPercentageToDP('48%'), // 70% of height device screen
            }}
            e2eID="swiper_1"
          />
        </View>
        {/* <Text>{JSON.stringify(userDetail)}</Text> */}
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
    marginBottom: 0,
    //backgroundColor: 'white',
    backgroundColor: 'transparent',
    marginTop: imageHeight + 24,
    marginBottom: 0,
  },
  title: {
    fontFamily: defaultfontFamily.quicksand.bold,
    fontSize: 19,
    alignSelf: 'center',
    color: '#141414',
  },
  description: {
    marginTop: 6,
    fontFamily: defaultfontFamily.quicksand.semibold,
    color: '#616161',
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
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'center',
    //resizeMode: '',
    //justifyContent: 'flex-end',
  },
  text: {
    fontSize: width * 0.1,
    color: 'black',
    textAlign: 'center',
  },
});
