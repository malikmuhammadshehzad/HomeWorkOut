import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../../assets';

export default StyleSheet.create({
  containerL: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  linkL: {
    color: COLORS.green,
    fontSize: 14,
    fontFamily: FONTS.primary.Bold,
    marginLeft: 7,
  },
  textL: {
    fontSize: 14,
    fontFamily: FONTS.primary.Regular,
  },
});
