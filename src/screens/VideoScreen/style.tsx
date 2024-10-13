import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';
import {normalizeHeight} from '../../utils/size';

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    paddingHorizontal: 22,
  },
  boxStyle: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
    marginBottom: 22,
    paddingHorizontal: 17,
    paddingBottom: 12,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1.5,
  },

  descriptionStyle: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 7,
  },
  imgStyle: {
    height: normalizeHeight(220),
    width: '100%',
  },
  loaderMain: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  textAI: {
    color: COLORS.black,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 22,
    paddingBottom: 12,
    paddingLeft: 29,
    paddingTop: 18,
  },
  titleStyle: {
    color: COLORS.black,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 7,
  },
});

export default styles;
