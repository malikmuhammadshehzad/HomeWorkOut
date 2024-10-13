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
  forgot: {
    color: COLORS.whiteTwo,
  },
  heading: {
    alignItems: 'center',
    fontFamily: FONTS.rechargebd,
    justifyContent: 'center',
    color: COLORS.yellow
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(32, 32, 32, 0.9)',
  },
  separator: {
    marginVertical: 40,
},
  svg: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 33,
    marginBottom: 33,
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
});

export default styles;
