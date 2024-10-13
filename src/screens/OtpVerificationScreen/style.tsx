import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
    root: {
      padding: 20
     },
    title: { 
      textAlign: 'center',
      fontSize: 30
     },
    codeFieldRoot: { 
      marginTop: 20,
    },
    cell: {
      width: 58,
      height: 60,
      lineHeight: 38,
      fontSize: 24,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.lightBlackTwo,
      textAlign: 'center',
      justifyContent: 'center',
      color: COLORS.whiteTwo,
      backgroundColor: COLORS.lightBlackTwo,
      paddingTop: 7,
    },
    focusCell: {
      borderColor: COLORS.lightBlackTwo,
    },
    imageBackground: {
      height: '100%',
      width: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(32, 32, 32, 0.9)',
    },
    svg: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 11,
    },
    heading: {
      alignItems: 'center',
      fontFamily: 'rechargebd',
      justifyContent: 'center',
      color: COLORS.yellow,
      marginTop: 22,
    },
    text: {
      fontFamily: 'rechargebd',
    },
    timerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 95,
      backgroundColor: COLORS.lightBlackTwo,
      marginHorizontal: 120,
      borderRadius: 133,
      paddingVertical: 7,
      borderWidth: 1,
      borderColor: COLORS.white,
    },
    timerText: {
      fontSize: 24,
      color: COLORS.white,
      paddingTop: 11,
    },
});

export default styles;
