import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 310,
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingLeft: 5,
    paddingRight: 6,
    paddingBottom: 25,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  step: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
});

export default styles;
