import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: 111,
      },
    image: {
        height: 385,
        width: 430,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 82,
    },
    containerM: {
       
    },
    modalView: {
      flex: 1,
      paddingTop: 250,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    miniContainer: {
        backgroundColor: COLORS.lightBlackThree,
        height: 546,
        width: 393,
        position: 'absolute',
        top: 342,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    text: {
        fontFamily: FONTS.rechargebd,
        fontSize: 18,
        color: COLORS.white,
        paddingHorizontal: 27,
        paddingTop: 17,
    },
    descriptiontext: {
        fontFamily: FONTS.interLight,
        fontSize: 14,
        color: COLORS.white,
        paddingHorizontal: 27,
        paddingTop: 5,
    },
    videoCard: {
        flexDirection: 'row',
        marginLeft: 22,
        marginTop: 7,
      },
});

export default styles;
