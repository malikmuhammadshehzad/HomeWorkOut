import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 140,
  },
  goalButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    height: 130,
    marginVertical: 15,
    width: '100%',
  },
  goalButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsBold,
    fontSize: 16,
    paddingLeft: 17,
    position: 'absolute',
  },
  goalContainer: {
    marginLeft: 80,
    width: '100%',
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingBottom: 17,
    paddingLeft: 17,
  },
  iconGoal: {
    marginLeft: 'auto',
    paddingRight: 55,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  selectedGoalButton: {
    // backgroundColor: COLORS.white,
    borderColor: COLORS.yellow,
  },
  step: {
    alignItems: 'center',
    width: '80%',
    marginTop: -33,
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 17,
    color: COLORS.white,
    paddingTop: 9,
  },
});

export default styles;
