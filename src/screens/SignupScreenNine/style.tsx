import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 160,
  },
  closeIcon: {
    height: 30,
    width: 30,
    // Add any additional styles for your SVG component
  },
  countryButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginHorizontal: 37,
    marginTop: 17,
    marginBottom: 13,
    paddingHorizontal: 17,
    width: 318,
  },
  countryMiniContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingBottom: 13,
    paddingLeft: 13,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  message: {
    color: 'red',
    marginLeft: 35,
    marginRight: 11,
    marginTop: 5,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  optionButton: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteThree,
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
  },
  optionText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
  saveButton: {
    marginTop: 130,
  },
  scrollView: {
    maxHeight: 280, // Adjust as needed
  },
  selectedText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
  },
  step: {
    alignItems: 'center',
    width: '80%',
  },
  stateButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginHorizontal: 37,
    marginTop: 17,
    paddingHorizontal: 17,
    width: 318,
  },
  stateMiniContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
});

export default styles;
