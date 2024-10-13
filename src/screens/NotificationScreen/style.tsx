import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 23,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
    fontSize: 14,
    paddingTop: 44,
    paddingLeft: 40,
  },
  textAI: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 16,
    marginLeft: 50,
    paddingTop: 44,
  },
});

export default styles;
