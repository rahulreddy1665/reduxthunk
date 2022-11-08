import {Dimensions, PixelRatio, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const normalize = size => {
  //use your testing phone width to replace 320
  const scale = width / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4;
  }
};

const COLORS = {
  primary: '#091A2B',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F5F5F8',
  darkGray: '#b7b7a4',
  secondary: '#e2eafc',
  red: '#FF1717',
  lightGreen: '#06d6a0',
  chatGreen: '#DCF8C5',
  boldGray: '#717171',
};

const FONTFAMILY = {
  base: 'Proxima Nova',
  semiBold: 'Proxima Nova Semibold',
  bold: 'Proxima Nova Black',
  emphasis: 'Proxima Nova Regular Italic',
};

const SIZES = {
  h1: 32,
  h2: 26,
  h3: 22,
  h4: 20,
  medium: 16,
  small: 14,
  extraSmall: 12,
  tiny: 8.5,
  base: 4,
  screenWidth: width,
  screenHeight: height,
};

const FONTS = {
  h1: {
    fontSize: normalize(SIZES.h1),
    lineHeight: 36,
    fontFamily: FONTFAMILY.base,
    color: COLORS.black,
  },
  h2: {
    // fontSize: SIZES.h2,
    fontSize: normalize(SIZES.h2),
    lineHeight: 32,
    fontFamily: FONTFAMILY.base,
    color: COLORS.black,
  },
  h3: {
    // fontSize: SIZES.h3,
    fontSize: normalize(SIZES.h3),
    lineHeight: 30,
    fontFamily: FONTFAMILY.bold,
    color: COLORS.black,
  },
  h4: {
    // fontSize: SIZES.h4,
    fontSize: normalize(SIZES.h4),
    lineHeight: 24,
    fontFamily: FONTFAMILY.base,
    color: COLORS.black,
  },
  normal: {
    // fontSize: SIZES.medium,
    fontSize: normalize(SIZES.medium),
    lineHeight: 20,
    fontFamily: FONTFAMILY.semiBold,
    color: COLORS.black,
  },
  small: {
    // fontSize: SIZES.small,
    fontSize: normalize(SIZES.small),
    lineHeight: 18,
    fontFamily: FONTFAMILY.base,
    color: COLORS.black,
  },
  extraSmall: {
    // fontSize: SIZES.extraSmall,
    fontSize: normalize(SIZES.extraSmall),
    lineHeight: 16,
    fontFamily: FONTFAMILY.base,
    color: COLORS.black,
  },
};

const ICONSIZES = {
  tiny: 16,
  small: 20,
  normal: 24,
  medium: 30,
  large: 45,
  xl: 50,
};

const IMAGESIZES = {
  small: 20,
  medium: 40,
  large: 60,
  logo: 200,
};

export {COLORS, SIZES, FONTFAMILY, FONTS, ICONSIZES, IMAGESIZES};
