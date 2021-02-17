import React, {useState} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {assestImages} from '../../assests';
import FirstRegisterScreen from './first';
import SecondRegisterScreen from './second';
import ThirdRegisterScreen from './third';
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
      <View style={{alignItems: 'center'}}>
        <Image
          source={assestImages.logo_white_background}
          style={{
            width: '50%',
            height: 100,
            resizeMode: 'contain',
            margin: 30,
            marginBottom: 5,
          }}
        />
        <Text> Buy and Sell with Neighbours </Text>
        <Text>
          List items you want to sell, rent, share or giveaway to your
          neighbours. Contribute to a greener planet by passing on pre-loved
          items you no longer need to others!
        </Text>
      </View>
      {steps()}
    </ScrollView>
  );
}

export default SignUp;
