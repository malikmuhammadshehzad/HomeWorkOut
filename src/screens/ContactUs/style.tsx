import {StyleSheet} from 'react-native';
import { FONTS } from '../../assets/fonts';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontFamily: FONTS.rechargebd,
        color: COLORS.black,
        fontSize: 16,
        paddingTop: 44,
        marginLeft: 50,
    },
    textAI: {
        fontFamily: FONTS.QuicksandMedium,
        color: COLORS.black,
        fontSize: 13,
        paddingTop: 30,
        marginHorizontal: 20,
    },
})

export default styles;