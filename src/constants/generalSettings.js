// export function getLocalAssetImages(imagename) {
//   return require(`../assests/images/${imagename}`);
// }

import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import { themedColors } from './Colors';

export const dimensions = Dimensions.get('window');
export const height = Math.round((dimensions.width * 9) / 16);
export const width = dimensions.width;

export const commonStyle = StyleSheet.create({
  rightIcon: {
    position: 'absolute',
    right: 10,
    alignSelf :"center"
  },
  defaultButtonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 42,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 25,
  },
  defaultButtonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
});
