import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
    btn: {
    },
    button: {
        width: 358,
        marginLeft: 11,
        marginHorizontal: 0,
        paddingHorizontal: 0,
      },
      text: {
        fontFamily: FONTS.rechargebd,
      },
    icon: {
        paddingLeft: 7,
        width: '10%',
    },
    input: {
        paddingLeft: 7,
        width: '80%',
    },
    imageBackground: {
        height: '100%',
        width: '100%',
      },
      main: {
        flex: 1,
        backgroundColor: 'rgba(36, 36, 36, 0.9)'
      },
      search: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.lightBlackThree,
        height: 192,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 11,
        marginTop: 30,
        borderRadius: 10,
        height: 50,
        width: 358,
        backgroundColor: COLORS.lightBlackThree,
      },
      searchInput: {
        color: COLORS.whiteTwo,
        fontFamily: FONTS.poppinsLightItalic,
      },
      tacker: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        height: 66,
        position: 'absolute',
        bottom: 220,
        right: 30,
        width: 66,
      }
});

export default styles;
