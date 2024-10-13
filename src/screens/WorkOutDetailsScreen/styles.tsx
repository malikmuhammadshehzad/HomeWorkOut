/* eslint-disable react-native/sort-styles */
import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  backButtonStyle: {
    marginTop: -4,
  },
  btnStyle: {
    alignSelf: 'center',
    marginBottom: 33,
  },
  btnTextStyle: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 15,
    marginTop: 9,
  },
  calenderBtnText: {
    color: COLORS.white,
  },
  calenderViewStyle: {
    // flex:0.6,
    padding: 22,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.yellow,
    height: 44,
    width: 100,
  },
  durationStyle: {
    color: COLORS.whiteThree,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 15,
    paddingVertical: 7,
  },
  exercisesStyle: {
    alignItems: 'center',
    backgroundColor: '#f3f5f7',
    borderRadius: 12,
    marginBottom: 17,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 22,
  },
  introStyle: {
    color: COLORS.whiteThree,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 15,
    width: '100%',
  },
  loader: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginHorizontal: 22,
  },

  modalImageStyle: {
    borderRadius: 17,
    height: '50%',
    marginTop: -3,
    resizeMode: 'contain',
    width: '100%',
  },
  modalMainStyle: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    justifyContent: 'center',
  },
  nameStyle: {
    color: COLORS.black,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 19,
  },
  secondStyle: {
    flex: 1,
    marginVertical: 22,
    paddingHorizontal: 12,
  },
  titleMainStyle: {
    alignItems: 'center',
    flexDirection: 'row',

    justifyContent: 'space-between',
    width: '100%',
  },
  titleStyle: {
    color: COLORS.black,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 22,
    textAlign: 'center',
    width: '95%',
  },
  viewStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 22,
    width: '90%',
  },
});
