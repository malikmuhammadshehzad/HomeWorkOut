import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import { FONTS } from '../../assets/fonts';

const styles = StyleSheet.create({
  // for language
  Button: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginTop: 17,
    marginHorizontal: 18,
    marginBottom: 13,
    paddingHorizontal: 17,
    width: 358,
    backgroundColor: COLORS.whiteThree,
  },
  selectedText: {
    fontFamily: FONTS.interRegular,
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  countryMiniContainer: {
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
    marginBottom: 20,
  },
  closeIcon: {
    height: 30,
    width: 30,
    // Add any additional styles for your SVG component
  },
  scrollView: {
    maxHeight: 280, // Adjust as needed
  },
  optionButton: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteThree,
    borderRadius: 5,
    marginVertical: 20,
    padding: 15,
  },
  optionText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 20,
  },
  //
  main: {
    backgroundColor: COLORS.whiteTwo,
    flex: 1,
  },
  head: {
    flexDirection: 'row',
  },
  label: {
    paddingLeft: 90,
    marginTop: 55,
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.rechargebd,
  },
  notify: {
    marginTop: 40,
    marginHorizontal: 17,
    width: 358,
    height: 54,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
  },
  notification: {
    
  },
  passwords: {
    marginTop: 40,
    marginHorizontal: 17,
    width: 358,
    height: 54,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
  },
});

export default styles;
