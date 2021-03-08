// export function getLocalAssetImages(imagename) {
//   return require(`../assests/images/${imagename}`);
// }

import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const dimensions = Dimensions.get('window');
export const height = Math.round((dimensions.width * 9) / 16);
export const width = dimensions.width;

export const commonStyle = StyleSheet.create({
  rightIcon: {
    position: 'absolute',
    right: 10,
    alignSelf :"center"
  },
});
