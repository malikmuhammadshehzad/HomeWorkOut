import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listStyle: {
    height: 150,
    borderRadius: 12,
    paddingHorizontal: 19,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  imageStyle: {
    borderRadius: 12,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  titleStyle: {
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.white,
    fontSize: 22,
    width: '92%',
  },
  timeMainStyle: {
    flexDirection: 'row',
    width: '92%',
  },
  timeStyle: {
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.white,
    fontSize: 15,
  },
});
export default styles;
