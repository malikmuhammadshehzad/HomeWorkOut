import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  ageButton: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginHorizontal: 37,
    paddingHorizontal: 17,
    width: 318,
  },
  ageminiContainer: {
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    height: 346,
    marginHorizontal: 17,
    padding: 22,
    width: 318,
  },
  button: {
    marginTop: 370,
  },
  closeIcon: {
    height: 30,
    width: 30,
    
  },
  heading: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    paddingLeft: 17,
    paddingBottom: 25,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
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
  progressBarsContainer: {
    marginVertical: 20,
  },
  progressBar: {
    marginVertical: 4,
  },
  scrollView: {
    maxHeight: 280, // Adjust as needed
  },
  selectedText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
  },
  text: {
      fontFamily: FONTS.poppinsBold,
      fontSize:17,
      color:COLORS.white,
      paddingTop:9
   
  },
});

export default styles;
