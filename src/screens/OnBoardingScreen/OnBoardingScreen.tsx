import {FlatList, View, Animated, Platform} from 'react-native';
import React, {useState, useRef} from 'react';
import Slides from '../../components/common/OnboardingSlides/OnboardingSlides';
import styles from './styles';
import {OnboardingItem, OnboardingNextButton, OnboardingPaginator} from '../../components';
import {BannerAd, BannerAdSize, useForeground} from 'react-native-google-mobile-ads';
import {bannerAddKey} from '../../constants';

// Our onboarding component contains FlatList, paginator and next button
export default function OnBoardingScreen(): JSX.Element {
  const bannerRef = useRef<BannerAd>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  // For Forward Icon
  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      console.log('Last item.');
    }
  };

  // For Backword Icon
  const scrollBack = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({index: currentIndex - 1});
    } else {
      console.log('Last item.');
    }
  };

  // adds
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={Slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <BannerAd ref={bannerRef} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} unitId={bannerAddKey} />
      <OnboardingNextButton scrollTo={scrollTo} item={Slides[currentIndex]} />
      <OnboardingPaginator data={Slides} scrollX={scrollX} scrollTo={scrollTo} scrollBack={scrollBack} />
    </View>
  );
}
