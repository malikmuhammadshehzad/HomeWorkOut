import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {AppButton} from '../../components';
import {SVG} from '../../assets';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {AdEventType, BannerAd, InterstitialAd, TestIds, useForeground} from 'react-native-google-mobile-ads';
import {COLORS} from '../../theme';
import {useIsFocused} from '@react-navigation/native';
import {loadString} from '../../utils/storage/storage';
import {downloadVideoToAppStorage} from '../../utils/HelperFunctions';
import {INTERTSIAL_KEY} from '../../constants';

const WorkOutDetailsScreen = ({route}: {route: any}) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [oneTimeAd, setOneTimeAd] = useState(false);
  // console.log('🚀 ~ WorkOutDetailsScreen ~ selected:', selected);
  const paramData = route?.params;
  // console.log('🚀 ~ WorkOutDetailsScreen ~ paramData:', paramData);
  const navigation = useAppNavigation();

  const handleVideoDownload = async () => {
    const videoPath = await loadString(paramData.id);
    if (videoPath) {
      paramData.video = videoPath;
      navigation.navigate('WorkOutScreen', {
        paramData,
      });
    } else {
      setIsDownloading(true);
      const res = (await downloadVideoToAppStorage(paramData?.video, paramData?.id)) as any;
      console.log('🚀 ~ handleVideoDownload ~ res:', res);
      if (res?.downloaded) {
        paramData.video = res?.path;
        navigation.navigate('WorkOutScreen', {
          paramData,
        });
        setIsDownloading(false);
      } else {
        setIsDownloading(false);
      }
    }
  };

  // add code
  // Hooks
  const bannerRef = useRef<BannerAd>(null);

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });
  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : INTERTSIAL_KEY;
  console.log('adUnitIdiiii', INTERTSIAL_KEY);

  const isFocus = useIsFocused();
  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing', 'games', 'rewards'],
  });

  const [adLoaded, setAdLoaded] = useState(false);

  // Load and Show Ad
  useEffect(() => {
    if (!oneTimeAd) {
      console.log('Interstitial Ad not ready.');
      const loadListener = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        setAdLoaded(true);
        setOneTimeAd(true);
        StatusBar.setHidden(true);
        console.log('Interstitial Ad Loaded.');
      });
      const errorListener = interstitial.addAdEventListener(AdEventType.ERROR, error => {
        console.error('Interstitial Ad failed to load:', error);
        setAdLoaded(false);
        StatusBar.setHidden(false);
      });

      const closeListener = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
        console.log('Interstitial Ad Closed.');
        setAdLoaded(false);
        setOneTimeAd(true);
        StatusBar.setHidden(false);
      });

      interstitial.load();

      return () => {
        loadListener();
        errorListener();
        closeListener();
      };
    }
  }, [interstitial, oneTimeAd]);

  // Show Ad
  useEffect(() => {
    if (adLoaded && interstitial && !oneTimeAd) {
      console.log('Attempting to show ad...');
      setTimeout(() => {
        if (adLoaded && isFocus && interstitial) {
          interstitial.show().catch(error => {
            console.error('Ad failed to show:', error);
          });
          setOneTimeAd(true);
          setAdLoaded(false);
          StatusBar.setHidden(true);
        } else {
          console.log('Ad was not loaded in time.');
          setAdLoaded(false);
          StatusBar.setHidden(false);
        }
      }, 5000);
    }
  }, [adLoaded, interstitial, oneTimeAd]);

  if (isDownloading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={COLORS.primary} size={'large'} />
        <Text>Please wait video is Downloading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor='transparent' />

      <SafeAreaView />
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <SVG.AppBackIcon />
        </TouchableOpacity>

        <Text style={styles.titleStyle}>{paramData?.workOutName}</Text>
      </View>
      <FlatList
        data={paramData?.exercises}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          // console.log('🚀 ~ WorkOutDetailsScreen ~ item:', item?.introduction);
          return (
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
                setSelected(item);
              }}
              style={styles.exercisesStyle}>
              <View style={styles.titleMainStyle}>
                <Text style={styles.nameStyle}>{item?.name}</Text>
                <Text style={styles.durationStyle}>{item?.duration}</Text>
              </View>
              <Text numberOfLines={2} style={styles.introStyle}>
                {item?.introduction}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <AppButton
        textStyle={styles.btnTextStyle}
        onPress={handleVideoDownload}
        btnStyle={styles.btnStyle}
        title='start'
      />
      <Modal transparent={true} visible={showModal}>
        <View style={styles.modalMainStyle}>
          <View style={styles.viewStyle}>
            <Text style={styles.nameStyle}>{selected?.name}</Text>
            <Text style={styles.durationStyle}>{selected?.introduction}</Text>
            <AppButton
              btnStyle={styles.closeBtn}
              onPress={() => setShowModal(false)}
              textStyle={styles.calenderBtnText}
              title='Close'
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WorkOutDetailsScreen;
