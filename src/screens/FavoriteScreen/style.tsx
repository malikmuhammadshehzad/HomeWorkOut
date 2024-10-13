import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';

export default StyleSheet.create({
  bookmark: {
    alignItems: 'center',
    color: COLORS.white,
    alignSelf: 'center',
    top: 97,
    position: 'absolute',
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 22,
  },
  mains: {
    backgroundColor:COLORS.white,
    width: '100%',
    height: 248,
    
  },
  top: {
   
    marginTop: 15,
    marginBottom:-7
  },
  textAI: {
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.black,
    fontSize: 22,

  },
  itemContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    borderRadius: 12,
  
    height: '100%',
    marginTop: 22,
    overflow: 'hidden',
    width: '100%',
  },
  heart: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    zIndex: 1,
  },
  text: {
    flexDirection: 'column',
    paddingLeft: 11,
  },
  textone: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 14,
    paddingTop: 30,
  },
  texttwo: {
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
    fontSize: 14,
    marginVertical: 5,
  },
  body: {
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    borderRadius: 10,
    height: 30,
    width: 105,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    
  },
  textfour: {
    color: COLORS.lightBlackFive,
    fontFamily: FONTS.interLight,
    fontSize: 14,
  },
});
