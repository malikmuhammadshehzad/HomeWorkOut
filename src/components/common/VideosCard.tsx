import React, {useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IMAGES, SVG} from '../../assets';
import AppText from './AppText';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';
import {VideoPlayerModal} from '..';
import { useTranslation } from 'react-i18next';

const VideosCard = ({imageSource, onPress, text}) => {
  const {t} = useTranslation()
  // state
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground source={imageSource} defaultSource={IMAGES.Image11} style={styles.image}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <SVG.PlayButtonSmall />
          </TouchableOpacity>
          <AppText transText={text} style={styles.text}>{t(text)}</AppText>
        </View>

        {/* // Modal */}
        <VideoPlayerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          videoUri='https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Videos%2FTom%20and%20Jerry%20gym.mp4?alt=media&token=0fa13e63-bbcc-46af-9ac6-f86730288c39'
          videoPoster='https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg'
        />
      </ImageBackground>
    </Pressable>
  );
};

export default VideosCard;

const styles = StyleSheet.create({
  cross: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 230,
    backgroundColor: 'red',
  },
  containerM: {},
  modalView: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    borderRadius: 11,
    height: 139,
    width: 173,
  },
  icon: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    borderRadius: 11,
    height: 139,
    width: 173,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 14,
    marginTop: 11,
  },
});
