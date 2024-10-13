/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Modal, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import {Icons} from '../../icons';
import {COLORS, HEIGHT} from '../../theme';
import {normalizeHeight, pixelSizeY} from '../../utils/size';
import BackButton from './BackButton';
// import {Icons} from '../../icons';
interface AppVideoPlayerProps {
  videoUri: string;
  videoPoster: string;
}
interface VideoRef {
  seek: (time: number) => void;
}
const AppVideoPlayer = ({videoUri, videoPoster}: AppVideoPlayerProps) => {
  // State
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false); // Track if the video has started
  const [modalVisible, setModalVisible] = useState(false);
  const [speedModalVisible, setSpeedModalVisible] = useState(false);
  const [locked, setLocked] = useState(false);
  const [visibleLockButton, setVisibleLockButton] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(1.0);
  const [progress, setProgress] = useState({
    currentTime: 0,
    seekableDuration: 0,
  });
  const [fullScreen, setFullScreen] = useState(false);
  // Hook

  // Refs for video and tap timeout
  const videoRef = useRef<VideoRef>(null);
  const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Functions
  // Function to format seconds into MM:SS
  const format = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  // Function to handle play/pause button press
  const handlePlayPause = () => {
    console.log('klklk∂');
    if (paused && progress.currentTime >= progress.seekableDuration) {
      videoRef.current?.seek(0); // Restart the video if it has ended
      setProgress({
        currentTime: 0,
        seekableDuration: progress.seekableDuration,
      });
    }
    setPaused(!paused); // Toggle pause state
    // setClicked(true); // Show controls overlay
    if (!videoStarted) {
      setVideoStarted(true);
    }
  };
  // Function to handle fullscreen toggle
  const handleFullscreen = () => {
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setFullScreen(!fullScreen);
  };
  // Function to handle video end event
  const handleVideoEnd = () => {
    setPaused(true);
    setVideoStarted(false);
    setProgress({currentTime: 0, seekableDuration: 0});
    setClicked(false);
    if (fullScreen) {
      Orientation.lockToPortrait();
      setFullScreen(false);
    }
  };
  const handleClick = () => {
    if (videoStarted) {
      handleTap();
    }
  };

  // Function to handle double-tap for seek forward and backward
  const handleTap = (direction: 'left' | 'right') => {
    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
      tapTimeoutRef.current = null;
      handleDoubleTap(direction);
    } else {
      tapTimeoutRef.current = setTimeout(() => {
        handleSingleTap();
        tapTimeoutRef.current = null;
      }, 300); // Adjust timeout value as needed
    }
  };

  const handleDoubleTap = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      videoRef.current?.seek(Math.max(0, progress.currentTime - 10));
    } else if (direction === 'right') {
      videoRef.current?.seek(Math.min(progress.seekableDuration, progress.currentTime + 10));
    }
  };

  const handleSingleTap = () => {
    setClicked(!clicked);
  };
  const handleSetting = () => {
    setModalVisible(!modalVisible);
  };
  const handleLock = () => {
    if (locked) {
      setLocked(!locked);
      setFullScreen(!fullScreen);
      setLocked(!locked);
      setClicked(false);
    } else {
      Orientation.lockToLandscape();
      setModalVisible(!modalVisible);
      setFullScreen(!fullScreen);
      setClicked(!clicked);
      setLocked(!locked);
    }
  };
  const handleFullscreenLock = () => {
    if (locked) {
      setLocked(!locked);
      setClicked(false);
    } else {
      setModalVisible(!modalVisible);
      setClicked(!clicked);
      setLocked(!locked);
    }
  };
  const speeds = [
    {label: '0.5x', value: 0.5},
    {label: '1x', value: 1},
    {label: '1.5x', value: 1.5},
    {label: '2x', value: 2},
  ];

  const handleSpeed = (value: {label: string; value: number}) => {
    const speed = value.value;
    setSelectedSpeed(speed);
    setSpeedModalVisible(!speedModalVisible);
  };

  return (
    <View style={styles.mainStyle}>
      <BackButton viewStyle={styles.backBtn} />

      <Pressable
        style={{
          width: '100%',
          height: fullScreen ? '100%' : normalizeHeight(770),
          marginTop: fullScreen ? 0 : pixelSizeY(12),
        }}
        onPress={() => handleClick()}>
        {/*  Lock Button */}
        {locked && (
          <Pressable onPress={() => setVisibleLockButton(!visibleLockButton)} style={styles.lockViewStyle}>
            {visibleLockButton && (
              <TouchableOpacity
                style={styles.lockboxStyle}
                onPress={() => {
                  if (fullScreen) {
                    handleFullscreenLock();
                  } else {
                    handleLock();
                  }
                }}>
                <Icons.lockIcon />
                <Text style={styles.lockIconTextStyle}>Lock</Text>
              </TouchableOpacity>
            )}
          </Pressable>
        )}

        <Video
          onError={error => console.error(error)}
          paused={paused}
          source={{
            uri: videoUri as string,
          }}
          ref={videoRef}
          onProgress={x => setProgress(x)}
          onEnd={handleVideoEnd}
          style={{width: '100%', height: fullScreen ? '100%' : normalizeHeight(770)}}
          resizeMode='contain'
          fullscreen={fullScreen}
          rate={selectedSpeed}
        />

        {/* {!videoStarted && (
          <Image
            source={{
              uri: videoPoster as string,
            }}
            style={styles.thumbnail}
          />
        )} */}
        {!videoStarted && (
          <View style={styles.playButtonOverlay}>
            <Pressable onPress={handlePlayPause}>
              <Icons.playIcon />
            </Pressable>
          </View>
        )}

        <Pressable style={[styles.overlay, {opacity: clicked && !locked ? 1 : 0}]} onPress={() => setClicked(!clicked)}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={{
                width: '45%',
                height: '100%',
              }}
              onPress={() => handleTap('left')}
            />
            {clicked && (
              <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}
                onPress={handlePlayPause}>
                {paused ? <Icons.playIcon /> : <Icons.pause />}
              </Pressable>
            )}
            <Pressable
              style={{
                width: '45%',
                height: '100%',
              }}
              onPress={() => handleTap('right')}
            />
          </View>
          <View style={styles.bottomControls}>
            <Text style={{color: 'white'}}>
              {format(progress.currentTime)}/<Text style={{color: 'white'}}>{format(progress.seekableDuration)}</Text>
            </Text>
            <Slider
              value={progress.currentTime}
              style={{width: '90%'}}
              minimumValue={0}
              maximumValue={progress.seekableDuration}
              minimumTrackTintColor='#FFFFFF'
              maximumTrackTintColor='#fff'
              onValueChange={x => videoRef.current?.seek(x)}
            />
          </View>

          {clicked && (
            <View style={styles.settingIcon}>
              <Pressable onPress={handleSetting}>
                <Icons.setting />
              </Pressable>
            </View>
          )}
          {clicked && (
            <View style={styles.topControls}>
              <Pressable onPress={handleFullscreen}>
                {fullScreen ? <Icons.minimize /> : <Icons.fullScreenIcon />}
              </Pressable>
            </View>
          )}
        </Pressable>
      </Pressable>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.centeredView}>
          <Pressable
            style={[
              styles.modalView,
              // {height: fullScreen ? '32%' : '18%'},
              {width: fullScreen ? '60%' : '90%'},
            ]}>
            <TouchableOpacity
              onPress={() => {
                setSpeedModalVisible(!speedModalVisible);
                setModalVisible(!modalVisible);
              }}
              style={styles.settingModalViewStyle}>
              <Icons.speedIcon />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={styles.textStyle}>Play Speed</Text>
                <Text style={styles.textStyle}>Normal {'>'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (fullScreen) {
                  handleFullscreenLock();
                } else {
                  handleLock();
                }
              }}
              style={styles.settingModalViewStyle}>
              <Icons.lockIcon />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={styles.textStyle}>Lock Screen</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
        </TouchableOpacity>
      </Modal>
      <Modal
        animationType='slide'
        transparent={true}
        visible={speedModalVisible}
        onRequestClose={() => {
          setSpeedModalVisible(!modalVisible);
        }}>
        <TouchableOpacity onPress={() => setSpeedModalVisible(!speedModalVisible)} style={styles.speedModalView}>
          <Pressable
            style={[
              styles.modalView,
              // {height: fullScreen ? '32%' : '18%'},
              {width: fullScreen ? '60%' : '90%'},
            ]}>
            {speeds.map((speed, index) => (
              <TouchableOpacity
                onPress={() => handleSpeed(speed)}
                style={{
                  paddingVertical: 10,
                  marginVertical: 3,
                }}
                key={index}>
                <Text style={styles.textStyle}>{speed.label}</Text>
              </TouchableOpacity>
            ))}
          </Pressable>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {flex: 1},
  thumbnail: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  backBtn: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteTwo,
    borderRadius: 50,
    height: 37,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: 37,
    marginTop: 22,
  },
  playButtonOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2 )',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 999,
  },
  // playButton: {
  //   width: 30,
  //   height: 30,
  //   tintColor: 'white',
  // },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  controlIcon: {
    height: 30,
    tintColor: 'white',
    width: 30,
  },
  bottomControls: {
    bottom: 0,
    paddingLeft: 7,
    position: 'absolute',
    width: '100%',
  },
  topControls: {
    bottom: 20,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    right: 0,
  },
  settingIcon: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    right: 0,
    top: 10,
  },
  centeredView: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  speedModalView: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 12,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingTop: 7,
  },
  settingModalViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%',
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  speedTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  lockIconTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  lockViewStyle: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 999,
  },
  lockboxStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'row',
    padding: 3,
    top: 280,
  },
});

export default AppVideoPlayer;
