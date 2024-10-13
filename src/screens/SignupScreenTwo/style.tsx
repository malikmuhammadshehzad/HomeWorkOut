import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',

    bottom: 44,
  },
  mainStyle: {height: '100%'},
  female: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ageminiContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  scrollView: {
    maxHeight: 280, // Adjust as needed
  },
  optionButton: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
  },
  optionText: {
    color: COLORS.black,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
  selectedText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
  },
  selectedTexth: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    width: '92%',
  },
  ageButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    width: '100%',
    marginTop: 17,
  },
  heightButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 17,
    marginTop: 17,
    width: '90%',
    alignSelf: 'center',
  },
  genderButtonMale: {
    backgroundColor: COLORS.lightBlackTwo,
    height: 60,
    width: '48%',
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  genderButtonFemale: {
    backgroundColor: COLORS.lightBlackTwo,
    height: 60,
    width: '48%',
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  genderButtonText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 17,
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingLeft: 17,
    paddingBottom: 25,
  },
  iconMale: {
    // paddingLeft: 370,
  },
  iconFemale: {
    paddingLeft: 335,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  step: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 17,
    color: COLORS.white,
    paddingTop: 9,
  },
  modalContainerh: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heightMiniContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  modalHeaderh: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  closeIconh: {
    height: 30,
    width: 30,
    // Add any additional styles for your SVG component
  },
  scrollViewh: {
    maxHeight: 280, // Adjust as needed
  },
  optionButtonh: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
  },
  optionTexth: {
    color: COLORS.black,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
});

export default styles;
