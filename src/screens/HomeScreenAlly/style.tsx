/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  arrow: {
    flexDirection: 'row',
  },
  arrowIcon: {
    marginLeft: 15,
    marginTop: 6,
  },
  // for motivator card
  cardContainer: {
    flexDirection: 'row',
  },
  containerm: {
    flex: 1,
    padding: 16,
  },
  customContainer: {
    // Custom styles for the container
  },
  customImage: {
    // Custom styles for the image
  },
  customCard: {
    // Custom styles for the card
  },
  customName: {
    // Custom styles for the name
  },
  customRole: {
    // Custom styles for the role
  },
  customDetail: {
    // Custom styles for the detail
  },
  //
  all: {
    fontFamily: FONTS.interLight,
    fontSize: 14,
    color: COLORS.whiteTwo,
    textDecorationLine: 'underline',
  },
  allC: {
    fontFamily: FONTS.interLight,
    fontSize: 14,
    color: COLORS.whiteTwo,
    textDecorationLine: 'underline',
    marginTop: 1,
  },
  bar: {
    marginLeft: 11,
    marginTop: 17,
  },
  container: {
    padding: 16,
    marginBottom: 30,
    backgroundColor: 'coral',
  },
  detail: {
    position: 'absolute',
    bottom: 7,
    left: 9,
    width: 153,
    height: 40,
    backgroundColor: COLORS.lightBlackThree,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 19,
    marginBottom: 22,
  },
  location: {
    marginLeft: 19,
  },
  icon: {},
  mark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 11,
    marginTop: 11,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileImageIcon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    // backgroundColor: COLORS.border,
    padding: 17,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 15,
    height: 50,
    width: 358,
    backgroundColor: COLORS.lightBlackThree,
  },
  searchInput: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.poppinsLightItalic,
    width: '30%',
  },
  locationText: {
    marginLeft: 8,
    color: COLORS.whiteTwo,
  },
  motivator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
  },
  videoCard: {
    flexDirection: 'row',
    marginBottom: 11,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: -7,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.black,
  },
  userName: {
    fontSize: 20,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.black,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCard: {
    backgroundColor: COLORS.lightBlackThree,
    borderRadius: 10,
    width: '100%',
  },
  infoText: {
    color: COLORS.white,
    fontFamily: FONTS.interMedium,
    fontSize: 14,
    paddingTop: 11,
    paddingLeft: 11,
  },
  infoValue: {
    color: '#6AEA1B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: COLORS.black,
    fontSize: 24,
    fontFamily: FONTS.rechargebd,
    marginVertical: 11,
  },
  sectionTitleC: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.rechargebd,
    marginTop: 15,
  },
  bot: {
    backgroundColor: COLORS.lightBlackThree,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    width: 358,
  },
  chat: {
    height: 46,
    width: 46,
    borderRadius: 55,
    backgroundColor: COLORS.lightBlackFour,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    fontFamily: FONTS.rechargebd,
    fontSize: 16,
    color: COLORS.white,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 22,
    paddingHorizontal: 3,
  },
  motivatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  motivatorCard: {
    position: 'absolute',
    left: 10,
    top: 20,
    backgroundColor: COLORS.lightBlackThree,
    borderRadius: 10,
    width: 153,
    paddingLeft: 11,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 11,
  },
  image: {
    width: 44,
    height: 44,
  },
  motivatorImage: {
    width: 173,
    height: 219,
    borderRadius: 10,
  },
  motivatorName: {
    color: COLORS.white,
    marginVertical: 8,
    fontFamily: FONTS.rechargebd,
    fontSize: 10,
  },
  motivatorRole: {
    color: COLORS.yellow,
    fontFamily: FONTS.interRegular,
    fontSize: 10,
  },

  // work out style
  listStyle: {
    height: 150,
    borderRadius: 12,
    paddingHorizontal: 19,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom:12
  },
  imageStyle: {
    borderRadius: 12,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  titleStyle: {
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.white,
    fontSize: 22,
    width: '92%',
  },
  timeMainStyle: {
    flexDirection: 'row',
    width: '92%',
  },
  timeStyle: {
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.white,
    fontSize: 15,
  },
});

export default styles;
