import React from "react";
import { View } from "react-native";
import styles from './style';
import { AppText, BackButton } from "../../components";

export default function TermsAndConditions(): JSX.Element {
    return (
        <View style={styles.main}>
        <View style={styles.top}>
        <BackButton />
        <AppText style={styles.heading} transText={'terms'}/>
        </View>

        <View>
        <AppText style={styles.textAI} transText={'termOne'}/>
        <AppText style={styles.textAI} transText={'termTwo'}/>
        <AppText style={styles.textAI} transText={'termThree'}/>
        <AppText style={styles.textAI} transText={'termFour'}/>
        </View>
        </View>
    )
}