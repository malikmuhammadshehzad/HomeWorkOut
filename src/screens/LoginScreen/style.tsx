import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  buttonStyle: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 40,
    marginTop: 15,
    textAlign: 'right',
  },
  button: {
    alignSelf: 'center',
  },
  forgot: {
    color: COLORS.whiteTwo,
  },
  heading: {
    alignItems: 'center',
    fontFamily: FONTS.poppinsMedium,
    justifyContent: 'center',
    color: COLORS.yellow,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  message: {
    color: 'red',
    marginLeft: 35,
    marginRight: 11,
    marginTop: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  separator: {
    marginVertical: 40,
  },
  svg: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 15,
    color: COLORS.white,
    paddingVertical: 12,
    marginBottom: -7,
  },
});

export default styles;
