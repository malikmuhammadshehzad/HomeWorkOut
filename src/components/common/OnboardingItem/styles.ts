import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../../assets';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    color: COLORS.lightblack,
    fontFamily: FONTS.primary.Regular,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.primary.Bold,
    fontSize: 32,
    marginVertical: 20,
    textAlign: 'center',
  },
});
