import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {AppText, BackButton, Notification} from '../../components';

export default function NotificationScreen(): JSX.Element {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <BackButton />
        <AppText style={styles.textAI} transText={'notification'} />
      </View>

      {/* <Notification /> */}
    </View>
  );
}
