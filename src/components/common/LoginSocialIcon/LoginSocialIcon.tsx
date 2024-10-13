import { TouchableOpacity, View } from 'react-native';
import React from 'react';

import styles from './styles';
import { SVG } from '../../../assets';

const LoginSocialIcon = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}>
                <SVG.Facebook />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <SVG.Google />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <SVG.Apple />
            </TouchableOpacity>
        </View>
    );
};

export default LoginSocialIcon;
