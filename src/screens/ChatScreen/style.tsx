import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  // chatbot
  clearButton: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 65,
    marginTop: 40,
},
goToBottomContainer: {
  position: "absolute",
  right: 20,
  bottom: 100, // Place it just above the search bar
},
goToBottomButton: {
  padding: 8,
  backgroundColor: "silver",
  borderRadius: 40,
},
  angel: {
    position: 'absolute',
    left: 311,
    top: 267,
  },
  angelTwo: {
    position: 'absolute',
    left: 17,
    top: 414,
  },
  date: {
    color: COLORS.white,
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
    borderRadius: 50,
    height: 36,
    width: 36,
  },
  time: {
    alignSelf: 'flex-end',
    paddingRight: 11,
    paddingTop: 20,
    color: COLORS.lightBlackSix,
  },
  times: {
    alignSelf: 'flex-end',
    paddingRight: 11,
    paddingTop: 20,
    color: COLORS.white,
  },
  textMessage: {
    color: COLORS.lightBlackSix,
    fontFamily: FONTS.interRegular,
    fontSize: 14,
    paddingLeft: 11,
    paddingTop: 11,
  },
  textSend: {
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
    fontSize: 14,
    paddingLeft: 11,
    paddingTop: 11,
  },
  receive:{
    borderRadius: 10,
    fontSize: 14,
    fontFamily: FONTS.interRegular,
    height: 112,
    width: 306,
    backgroundColor: COLORS.yellow,
    marginLeft: 20,
    marginVertical: 17,
  },
  send:{
    borderRadius: 10,
    height: 112,
    width: 306,
    backgroundColor: COLORS.lightBlackFour,
    marginLeft: 20,
    marginVertical: 17,
  },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        marginHorizontal: 17,
        borderRadius: 10,
        height: 60,
        width: 358,
        backgroundColor: COLORS.lightBlackThree,
      },
      searchInput: {
        color: COLORS.whiteTwo,
        fontFamily: FONTS.interLight,
        fontSize: 14,
        width: '70%',
        paddingLeft: 15,
      },
      locationText: {
        marginLeft: 8,
        color: COLORS.whiteTwo,
      },
    main: {
        backgroundColor: COLORS.lightBlackFive,
        flex: 1,
    },
    separator: {
        marginVertical: 22,
        marginHorizontal: 25,
        borderBottomColor: COLORS.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textAI: {
        fontFamily: FONTS.rechargebd,
        color: COLORS.white,
        fontSize: 16,
        paddingTop: 44,
        marginLeft: 50,
    },
    text: {
        fontFamily: FONTS.interRegular,
        color: COLORS.white,
        fontSize: 14,
        paddingTop: 44,
        paddingLeft: 40,
    },
    upload: {
      width: '9%',
      marginRight: 5,
    },
    line: {
      paddingRight: 17,
    },
});

export default styles;
