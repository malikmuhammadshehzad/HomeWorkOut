import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 150,
  },
  closeIconh: {
    height: 30,
    width: 30,
    // Add any additional styles for your SVG component
  },
  closeIconw: {
    height: 30,
    width: 30,
  },
  headingh: {
    alignItems: 'center',
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    justifyContent: 'center',
    marginHorizontal: 22,
    marginBottom: 22,
  },
  headingw: {
    alignItems: 'center',
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    justifyContent: 'center',
    marginHorizontal: 22,
  },
  heightButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 107,
    justifyContent: 'space-evenly',
    marginBottom: 40,
    marginHorizontal: 37,
    paddingHorizontal: 17,
    width: 318,
  },
  heightMiniContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  modalContainerh: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalContainerw: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalHeaderh: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  modalHeaderw: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  optionButtonh: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteThree,
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
  },
  optionButtonw: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteThree,
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
  },
  optionTexth: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
  optionTextw: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
  scrollViewh: {
    maxHeight: 280, // Adjust as needed
  },
  scrollVieww: {
    maxHeight: 280,
  },
  selectedTexth: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 30,
  },
  selectedTextw: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 30,
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    fontSize:17,
    color:COLORS.white,
    paddingTop:9
  },
  weightButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 107,
    justifyContent: 'space-evenly',
    marginHorizontal: 37,
    paddingHorizontal: 17,
    width: 318,
  },
  weightMiniContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
});

export default styles;
