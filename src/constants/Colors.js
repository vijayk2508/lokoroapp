import {Dimensions, StyleSheet} from 'react-native';

export const regularFontFamily = 'AvenirNextLTPro-Regular';
export const mediumFontFamily = 'AvenirNextLTPro-Medium';
export const boldFontFamily = 'AvenirNextLTPro-Bold';
export const heavyFontFamily = 'AvenirNextLTPro-Heavy';

// default light colors
export const colors = {
  BLUE: '#3543bf',
  ORANGE: '#fe7d32',
  GREEN: '#30a960',
  RED: '#f06159',
  BLACK: '#0b0b0b',
  SILVER: '#efefef',
  WHITE: '#fff',
  GREY: '#7e7e7e',
  WHITE_GREY: '#d4d4d4',
  DARK_GREY: '#555555',
  LIGHT_BLACK: '#212121',
  DARK_RED: '#c04d47',
  SEMI_TRANSPARENT: 'rgba(0,0,0,0.5)',
  LIGHT_RED: '#fef3ec',
  YELLOW: '#fec72e',
  LIGHT_GREY: '#a9a9a9',
  PALE_YELLOW: '#fff6ef',
  DARK_BLUE: '#2e68b2',
  LIGHT_BLUE: '#EEEFF9',
  appColor: '#1190CB',
  appBg: '#FFF',
  secondBg: '#F7F8FA',
  backBtn: '#000',
  replyBg: '#FFF',

  // categories colors
  redCBg: '#F75C96',
  purpCBg: '#BE31E3',
  blueCBg: '#4C97FD',
  yellowCBg: '#F8BD38',
  greenCBg: '#5ECFB1',
  orangeCBg: '#E9776D',

  shadowCl: '#D2D3D7',

  regularText: '#1E2432', // default regular text
  mediumText: '#1E2432', // default medium text
  boldText: '#1E2432', // default bold text
  heavyText: '#1E2432', // default heavy text

  hText: '#1E2432', // heading text
  tText: '#1E2432', // title text
  taxTitle: '#1E2432', // category/location text
  taxCount: '#B8BBC6', // category/location counter text
  addressText: '#B8BBC6', // address text
  pText: '#1E2432', // paragraph text

  searchText: '#C7C7CC', // text for search box
  searchBg: 'rgba(142,142,147,0.12)', // search box
  avatarIcon: '#979797', // avatar icon

  separator: '#EAECEF', // separator line
  searchIconBg: 'rgba(216,216,216,0.7)', // icon background near result title

  fieldLbl: '#BEC2CE', // input field label
  inputFocus: '#BEC2CE',

  pastDay: '#BEC2CE',
  unavailableDay: '#BEC2CE',

  lMoreText: '#8E8E93',

  buttonPrimaryBg: '#4DB7FE',

  headerNavStyle: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAECEF',
    // height: 80,
  },
  headerTitleStyle: {
    fontFamily: boldFontFamily,
    color: '#1E2432',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 700,
    alignSelf: 'center',
  },
  tabBarColors: {
    activeTintColor: '#4DB7FE',
    inactiveTintColor: '#808080',
    style: {
      backgroundColor: '#F2F2F2', // '#FFF',
      borderTopColor: '#EAECEF',
    },
  },
  modalBg: '#00000040', // must be 6 or 8 characters color
  modalInner: '#FFF',
};

export const themedColors = {
  default: {
    ...colors,
  },
  light: {
    ...colors,
  },
  dark: {
    ...colors,

    // dark mode colors
    appColor: 'tomato',

    appBg: '#000',
    secondBg: '#222831',
    backBtn: '#FFF',
    replyBg: '#FFF',
    // categories colors
    redCBg: '#F75C96',
    purpCBg: '#BE31E3',
    blueCBg: '#4C97FD',
    yellowCBg: '#F8BD38',
    greenCBg: '#5ECFB1',
    orangeCBg: '#E9776D',

    shadowCl: '#222831',

    regularText: '#FFF',
    mediumText: '#FFF',
    boldText: '#FFF',
    heavyText: '#FFF',

    hText: '#FFF',
    tText: '#FFF',
    taxTitle: '#FFF',
    taxCount: '#EEE',
    addressText: '#EEE',
    pText: '#FFF',

    searchText: '#FFF',
    searchBg: '#393e46',
    avatarIcon: '#FFF',

    separator: '#393e46',
    searchIconBg: '#393e46', // '#222831',

    fieldLbl: '#EEE',
    inputFocus: '#EEE',

    pastDay: '#EEE',
    unavailableDay: '#EEE',

    lMoreText: '#FFF',

    buttonPrimaryBg: 'tomato',

    headerNavStyle: {
      backgroundColor: '#000',
      borderBottomWidth: 0.5,
      borderBottomColor: '#393e46',
      // height: 80,
    },
    headerTitleStyle: {
      fontFamily: boldFontFamily,
      color: '#FFF',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 700,
      alignSelf: 'center',
    },
    tabBarColors: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#FFF',
      style: {
        backgroundColor: '#010101', // '#000',
        borderTopColor: '#272729', // '#393e46',
      },
    },
    modalBg: '#000000', // must be 6 or 8 characters color
    modalInner: '#222831',
  },
};

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin',
};

/**
 * mr - margin right
 * ml - margin left
 * mt - margin top
 * p  - padding
 * px - padding horizontal
 */
export const GenericStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  mr12: {
    marginRight: 12,
  },
  mt12: {
    marginTop: 12,
  },
  mt24: {
    marginTop: 24,
  },
  mr4: {
    marginRight: 4,
  },
  mb12: {
    marginBottom: 12,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  noBorder: {
    borderWidth: 0,
  },
  whiteBackgroundContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  fill: {
    flex: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  positiveText: {
    color: colors.GREEN,
  },
  negativeText: {
    color: colors.RED,
  },
  centerAlignedText: {
    textAlign: 'center',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedInfoText: {
    fontSize: 12,
    backgroundColor: colors.LIGHT_RED,
    padding: 8,
    borderRadius: 2,
  },
  // use CustomCard when background is non-white else use this style
  card: {
    borderColor: colors.SILVER,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: 5,
    padding: 12,
    backgroundColor: colors.WHITE,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  greyBar: {
    height: 1,
    backgroundColor: colors.SILVER,
  },
  p16: {
    padding: 16,
  },
  navigationHeaderBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.SILVER,
  },
  rightAligned: {
    justifyContent: 'flex-end',
  },
});

export function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.5,
    shadowRadius: 0.8 * elevation,
    borderWidth: 0.1,
  };
}
