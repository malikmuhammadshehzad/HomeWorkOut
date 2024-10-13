import {StyleSheet} from 'react-native';
import { FONTS } from '../../../assets/fonts';
import { COLORS } from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
  nextButton: {
    backgroundColor: COLORS.yellow,
    borderRadius: 30,
    marginBottom: 15,
    padding: 15,
    width: 300,
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    textAlign: 'center',
  },
  skipButton: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    backgroundColor: COLORS.yellow,
    padding: 15,
  },
  skipButtonText: {
    color: COLORS.black,
    fontFamily: FONTS.rechargebd,
    textAlign: 'center',
  },
});
