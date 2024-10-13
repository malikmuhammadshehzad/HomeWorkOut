import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Platform, SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {AppText} from '../../components';
import {dietPlan} from '../../data';

import {
  InterstitialAd,
  TestIds,
  AdEventType,
  useForeground,
  BannerAdSize,
  BannerAd,
} from 'react-native-google-mobile-ads';
import {useIsFocused} from '@react-navigation/native';
import {bannerAddKey, INTERTSIAL_KEY} from '../../constants';

export default function VideoScreen(): JSX.Element {
  // Hooks
  const bannerRef = useRef<BannerAd>(null);
  const [oneTimeAd, setOneTimeAd] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adClosed, setAdClosed] = useState(false);
  const isFocus = useIsFocused();

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : INTERTSIAL_KEY;
  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing', 'games', 'rewards'],
  });

  // Load and Show Ad
  useEffect(() => {
    if (!oneTimeAd) {
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
        setAdClosed(true);
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
        if (adLoaded) {
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

  return (
    <View style={styles.main}>
      <SafeAreaView />
      <View>
        <AppText style={styles.textAI} transText={'dietPlan'} />
      </View>
      <BannerAd
        ref={bannerRef}
        unitId={bannerAddKey}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <View style={styles.bodyStyle}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dietPlan}
          renderItem={({item}) => (
            <View style={styles.boxStyle}>
              <Image resizeMode='center' source={item.image} style={styles.imgStyle} />
              <Text style={styles.titleStyle}>{item.name}</Text>
              <Text style={styles.descriptionStyle}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
