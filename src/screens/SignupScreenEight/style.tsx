import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
  goalButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    // borderColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    marginVertical: 15,
    paddingLeft: 22,
    width: 318,
  },
  goalButtonText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 17,
  },
  goalContainer: {
    marginLeft: 80,
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingBottom: 13,
    width:'95%'
  },
  iconGoal: {
    marginLeft: 'auto',
    paddingRight: 55,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
     
  },
  message: {
    color: 'red',
    marginLeft: 3,
    // marginRight: 11,
    marginTop: 5,
  },
  selectedGoalButton: {
    // backgroundColor: '#adff2f',
    borderColor:COLORS.yellow,
    borderWidth:1.9
  },
  step: {
    alignItems: 'center',
    width: '80%',
 
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    color:COLORS.white,
    fontSize:17,
    paddingTop:12
  },
});

export default styles;
