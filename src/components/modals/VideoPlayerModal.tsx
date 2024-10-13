import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import VideoPlayer from '../common/videoPlayer';

const VideoPlayerModal = ({ visible, onClose, videoUri, videoPoster }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <VideoPlayer
          setMainModalVisible={onClose}
          videoUri={videoUri}
          videoPoster={videoPoster}
        />
        {/* Additional content like buttons can go here */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default VideoPlayerModal;
