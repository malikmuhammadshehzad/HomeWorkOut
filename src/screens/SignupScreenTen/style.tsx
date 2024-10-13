import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 300,
  },
  female: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 10,
  },
  genderContainer: {
    marginLeft: 80,
  },
  genderButtonMale: {
    backgroundColor: COLORS.lightBlackTwo,
    height: 60, 
    width: 318,
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
    width: 318,
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginTop: 33,
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
    paddingLeft: 370,
  },
  iconFemale: {
    paddingLeft: 335,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  step: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
});

export default styles;
