import {colors} from './Colors';
import {setFontSize} from './deviceDimensions';

export const CommonStyles = {
  TXT_16_BOLD_WHITE: {
    color: colors.white,
    fontSize: setFontSize(16),
    fontFamily: 'OpenSans-Bold',
  },
  TXT_12_Regular_WHITE: {
    color: colors.white,
    fontSize: setFontSize(12),
    fontFamily: 'OpenSans-Regular',
  },
  TXT_12_Regular_BOLD: {
    color: colors.white,
    fontSize: setFontSize(12),
    fontFamily: 'OpenSans-Bold',
  },
  TXT_10_SEMI_BOLD_333333: {
    color: colors.color_333333,
    fontSize: setFontSize(10),
    fontFamily: 'OpenSans-SemiBold',
  },
};
