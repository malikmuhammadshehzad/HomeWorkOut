import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';
import { FONTS } from '../../../assets/fonts';
import { useTranslation } from 'react-i18next';
import AppText from '../AppText';

interface SignUpProps {
    text?: string;
    textone?: string;
    onPress?: (title: string) => void;
}

const FooterText = ({ text = '', textone = '', onPress = () => { } }: SignUpProps) => {
  const {t} = useTranslation()

    return (
        <View style={styles.containerL}>
            <AppText style={styles.textL}>{t(text)}</AppText>
            <TouchableOpacity>
                <AppText style={styles.linkL} onPress={() => onPress(textone)}>
                    {t(textone)}
                </AppText>
            </TouchableOpacity>
        </View>
    );
};

export default FooterText;

const styles =  StyleSheet.create({
    containerL: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
    },
    linkL: {
      color: COLORS.black,
      fontSize: 16,
      fontFamily: FONTS.interRegular,
      marginLeft: 7,
      textDecorationLine: 'underline',
    },
    textL: {
      color: COLORS.whiteTwo,
      fontSize: 14,
      fontFamily: FONTS.interMedium,
    },
  });
  
