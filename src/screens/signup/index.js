import React, {useState} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {assestImages} from '../../assests';
import FirstRegisterScreen from './first';
import SecondRegisterScreen from './second';
import ThirdRegisterScreen from './third';

const sliderImages = [assestImages.img1, assestImages.img2];

function SignUp(props) {
  const [active, setActive] = useState(1);
  const [userDetail, setUserDetail] = useState({});
  function steps() {
    switch (active) {
      case 1:
        return (
          <FirstRegisterScreen
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            active={active}
            setActive={setActive}></FirstRegisterScreen>
        );
      case 2:
        return (
          <SecondRegisterScreen
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            active={active}
            setActive={setActive}></SecondRegisterScreen>
        );
      case 3:
        return (
          <ThirdRegisterScreen
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            active={active}
            setActive={setActive}></ThirdRegisterScreen>
        );

      default:
        return <></>;
    }
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
        <SliderBox
          //ImageComponent={FastImage}
          images={sliderImages}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
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
        {/* <Image
          source={assestImages.logo_white_background}
          style={{
            width: '50%',
            height: 100,
            resizeMode: 'contain',
            margin: 30,
            marginBottom: 5,
          }}
        /> */}
        {/* <Text> Buy and Sell with Neighbours </Text>
        <Text>
          List items you want to sell, rent, share or giveaway to your
          neighbours. Contribute to a greener planet by passing on pre-loved
          items you no longer need to others!
        </Text> */}
      </View>
      {steps()}
    </ScrollView>
  );
}

export default SignUp;
