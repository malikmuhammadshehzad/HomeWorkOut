import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {AppVideoPlayer, BackButton} from '../../components';
import {styles} from './style';
import {COLORS} from '../../theme';

const WorkOutScreen = ({route}) => {
  const {paramData} = route?.params;
  console.log('🚀 ~ WorkOutScreen ~ paramData:yyii', paramData?.video);
  const videoUrl = paramData?.video;
  return (
    <View style={styles.main}>
      <SafeAreaView />

      {videoUrl ? (
        <AppVideoPlayer
          videoUri={videoUrl}
          videoPoster='https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg'
        />
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
      )}
    </View>
  );
};

export default WorkOutScreen;
