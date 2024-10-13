/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';
import {pixelSizeY} from '../../utils/size';

const styles = StyleSheet.create({
  // separator
  separator: {
    backgroundColor: 'black',
    borderWidth: 1,
    width: 27,
  },
  // user information
  weight: {
    marginTop: 9,
  },
  separators: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  icons: {
    width: '10%',
  },
  label: {
    alignSelf: 'center',
    color: 'grey',
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    marginBottom: -2,
    marginLeft: 7,
    width: '37%',
  },
  container: {
    marginBottom: pixelSizeY(32),
    paddingHorizontal: '5%',
  },
  infoRow: {
    flexDirection: 'row',
    marginVertical: 12,
    width: '100%',
    // alignItems:'center',
    // backgroundColor:'coral'
  },
  value: {
    alignSelf: 'center',
    color: 'black',
    fontFamily: FONTS.poppinsBold,
    fontSize: 17,
    textAlign: 'right',
    width: '50%',
  },
  deleteAccount: {
    alignSelf: 'center',
    color: COLORS.error,
    fontFamily: FONTS.poppinsBold,
    fontSize: 17,
    textAlign: 'right',
    width: '80%',
  },
  logoutLabel: {
    fontWeight: '700',
    color: COLORS.error,
    fontSize: 22,
  },
  welcomeText: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    fontSize: 14,
  },
  //
  head: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    paddingBottom: 44,
    paddingTop: 55,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    height: 46,
    justifyContent: 'center',
    marginRight: 11,
    width: 46,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 190,
    marginTop: 40,
  },
  mainView: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

export default styles;
