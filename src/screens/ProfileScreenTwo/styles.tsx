import {StyleSheet} from 'react-native';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  icon: {
    height: 140,
    width: 140,
    backgroundColor: COLORS.palette.overlay100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
  },
  name: {
    fontFamily: FONTS.rechargebd,
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    fontFamily: FONTS.interMedium,
    fontSize: 14,
  },
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 11,
  },
  profileImage: {
    height: 146,
    width: 146,
    borderRadius: 100,
  },
  profileImageIcon: {
    width: 90,
    height: 90,
    borderRadius: 20,
    padding:40,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: COLORS.black,
    width: 359,
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 22,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 210,
  },
  label: {
  },
  icons: {
    width: '10%',
  },
  container: {
    paddingLeft: '2%',
  },
});

export default styles;
