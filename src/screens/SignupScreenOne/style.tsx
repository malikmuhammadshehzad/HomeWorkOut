import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 160,
    alignSelf: 'center',
    // marginRight: 22,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.poppinsMedium,
    paddingLeft: 17,
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 17,
    color: COLORS.white,
    paddingTop: 12,
  },
  message: {
    color: 'red',
    marginLeft: 35,
    marginRight: 11,
    marginTop: 15,
  },
});

export default styles;
