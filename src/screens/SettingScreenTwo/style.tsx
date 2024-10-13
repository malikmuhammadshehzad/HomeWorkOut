import { StyleSheet } from "react-native";
import { FONTS } from "../../assets/fonts";
import { COLORS } from "../../theme";

const styles = StyleSheet.create({
  button: {
      position: 'absolute',
      bottom: 40,
      alignSelf: 'center', // Center the button horizontally
  },
  errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 5,
      textAlign: 'center',
  },
  main: {
      backgroundColor: COLORS.whiteTwo,
      flex: 1,
  },
  message: {
      color: 'red',
      marginLeft: 35,
      marginRight: 11,
      marginTop: 15,
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
  text: {
      fontFamily: FONTS.rechargebd,
  },
  scrollViewContent: {
      paddingBottom: 100,  // Add padding to avoid content being covered by the button
  }
});

export default styles;
