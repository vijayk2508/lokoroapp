// export function getLocalAssetImages(imagename) {
//   return require(`../assests/images/${imagename}`);
// }

import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {themedColors} from './Colors';

export const dimensions = Dimensions.get('window');
export const height = Math.round((dimensions.width * 9) / 16);
export const width = dimensions.width;

export const defaultfontFamily = {
  quicksand: {
    regular: 'Quicksand-Regular',
    bold: 'Quicksand-Bold',
    light: 'Quicksand-Light',
    medium: 'Quicksand-Medium',
    semibold: 'Quicksand-SemiBold',
  },
};

export const themebutton = {
  defaultButtonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 42,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    alignContent: 'center',
  },
  defaultButtonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: defaultfontFamily.quicksand.bold,
  },
};

export const commonStyle = StyleSheet.create({
  rightIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  defaultButtonStyle: {
    ...themebutton.defaultButtonStyle,
  },
  defaultButtonTextStyle: {
    ...themebutton.defaultButtonTextStyle,
    fontFamily: defaultfontFamily.quicksand.bold,
  },
  transparentButtonStyle: {
    backgroundColor: '#FFFFFF',
    color: themedColors.default.appColor,
  },
  transparentButtonTextStyle: {
    backgroundColor: '#FFFFFF',
    color: themedColors.default.appColor,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'white',
    // alignContent: 'center',
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoImage: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
    marginBottom: 5,
    alignContent: 'center',
  },
  logoTitle: {
    color: themedColors.default.appColor,
    fontSize: 21,
    marginTop: 0,
    fontWeight: '300',
    marginBottom: 8,
    fontFamily: defaultfontFamily.quicksand.semibold,
    lineHeight: 23,
    textAlign: 'center',
  },
  logoDescription: {
    width: width - 30,
    textAlign: 'center',
    fontFamily: defaultfontFamily.quicksand.semibold,
    // borderColor: themedColors.default.appColor,
    // borderWidth: 2,
    // textAlign: 'center'
    // justifyContent: 'center',
    // textAlign: 'center',
    // margin: 40,
    // marginTop: 6,
    // marginBottom: 20,
    // fontFamily: 'Quicksand',
    // color: '#676767',
    // fontSize: 16,
    // alignSelf: 'center',
    // textAlign: 'center',
  },
});

export const getAsyncData = async (name) => {
  try {
    const jsonValue = await AsyncStorage.getItem(name);
    console.log('jsonValue', jsonValue);
    console.log('jsonValue', JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw e;
  }
};
