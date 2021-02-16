import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {assestImages} from '../../assests';
import {themedColors} from '../../constants/Colors';

function Splash(props) {
  const [LogoAnime, setLogoAnime] = useState(new Animated.Value(0));
  const [LogoText, setLogoText] = useState(new Animated.Value(0));
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200,
      }),
    ]).start(() => {
      setLoadingSpinner(true);
      //props.navigation.navigate('login');
      setTimeout(() => {
        props.navigation.navigate('login');
      }, 1500);
    });

    return () => {};
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: LogoAnime,
            top: LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image
            source={assestImages.Transparent_Logo}
            style={{height: 100, width: 150}}
          />
          {loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color={themedColors.default.appColor}
            />
          ) : null}
        </Animated.View>
        <Animated.View style={{opacity: LogoText}}>
          <Text style={styles.logoText}> Building communities for Good </Text>
        </Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themedColors.default.appColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    //fontFamily : "Goo"
    fontSize: 20,
    marginTop: 0,
    fontWeight: '300',
  },
});

export default Splash;
