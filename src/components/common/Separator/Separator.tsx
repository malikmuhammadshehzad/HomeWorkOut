import React from 'react';
import { View, TextStyle } from 'react-native';
import styles from './styles';
import AppText from '../AppText';

interface SeparatorProps {
    transText?: string; // For i18n translations
    text?: string; // Fallback text in case transText isn't used
    TextStyle?: TextStyle;
}

const Separator = ({ transText, text = '', TextStyle = {} }: SeparatorProps) => (
    <View style={[styles.container, TextStyle]}>
        <View style={styles.separator} />
        <AppText style={styles.text} transText={transText}>
          {!transText && text}
        </AppText>
        <View style={styles.separator} />
    </View>
);

export default Separator;
