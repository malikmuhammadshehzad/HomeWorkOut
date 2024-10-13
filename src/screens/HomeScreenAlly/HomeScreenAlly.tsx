/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import {SVG} from '../../assets';
import styles from './style';
import {COLORS} from '../../theme';
import {AppText} from '../../components';
import {useTranslation} from 'react-i18next';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppStore} from '../../store';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FONTS} from '../../assets/fonts';
import BeginnerScreen from '../BeginnerScreen/BeginnerScreen';
import AdvanceScreen from '../AdvanceScreen/AdvanceScreen';
import {IntermediateScreen} from '..';
import {BannerAd, BannerAdSize, useForeground} from 'react-native-google-mobile-ads';
import {bannerAddKey} from '../../constants';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreenAlly(): JSX.Element {
  // Hooks
  const {t} = useTranslation();
  const bannerRef = useRef<BannerAd>(null);
  const navigation = useAppNavigation();

  const {userData} = useAppStore();

  // States
  const imageSource = userData?.userProfileImage ? {uri: userData.userProfileImage} : null;

  // function
  const onPressProfile = (): void => {
    navigation.navigate('ProfileScreen');
  };

  // adds
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    // <ImageBackground source={IMAGES.AuthImage} imageStyle={{opacity:0.9}} style={styles.imageBackground}>
    <View style={styles.main}>
      <SafeAreaView />
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.icon} onPress={onPressProfileTwo}><SVG.Navbar/></TouchableOpacity> */}
        <View>
          <AppText style={styles.welcomeText}>{t('Welcome')}</AppText>
          <Text style={styles.userName}>{userData?.fulltName}</Text>
        </View>
        <TouchableOpacity onPress={onPressProfile}>
          {imageSource ? (
            <View style={{borderColor: COLORS.yellow, borderWidth: 1.5, borderRadius: 25}}>
              <Image source={imageSource} style={styles.profileImage} />
            </View>
          ) : (
            <SVG.ProfileIcon style={styles.profileImageIcon} />
          )}
        </TouchableOpacity>
      </View>
      <BannerAd ref={bannerRef} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} unitId={bannerAddKey} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: FONTS.poppinsMedium,
          },
          tabBarStyle: {
            borderWidth: 0.9,
            borderColor: COLORS.whiteTwo,
            borderRadius: 33,
            width: '92%',
            marginBottom: 17,
            alignSelf: 'center',
            backgroundColor: COLORS.white,
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.whiteThree,
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.yellow,
            height: '100%',
            width: '32.7%',
            borderRadius: 100,
          },
        }}>
        <Tab.Screen name='Beginner'>{() => <BeginnerScreen />}</Tab.Screen>
        <Tab.Screen name='intermediate'>{() => <IntermediateScreen />}</Tab.Screen>
        <Tab.Screen name='advance'>{() => <AdvanceScreen />}</Tab.Screen>
      </Tab.Navigator>
    </View>
    // </ImageBackground>
  );
}
