/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, Platform, ScrollView, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {AppButton, AppScreen, AppText, AuthHeader, BackButton, InputTextLabel, FooterText} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {useAppStore} from '../../store';
import {COLORS} from '../../theme';
import {SVG} from '../../assets';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {FONTS} from '../../assets/fonts';
import {
  AdEventType,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
  useForeground,
} from 'react-native-google-mobile-ads';
import {useIsFocused} from '@react-navigation/native';
import style from '../FavoriteScreen/style';
import {bannerAddKey} from '../../constants';

interface profileType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function LoginScreen(props: profileType): JSX.Element {
  /*
   ** States
   */

  console.log('bannerAddKey', bannerAddKey);

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');

  const userData = useAppStore(state => state.userData);

  console.log('🚀 ~ LoginScreen ~ userData:', userData);
  /*
   * Hooks
   */
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const {updateUserData} = useAppStore();
  /*
   ** Props
   */

  /*
   * Functions
   */
  const onPressSignupScreenOne = (): void => {
    navigation.navigate('SignupScreenOne');
  };
  const onPressForgotChangePassScreenAlly = (): void => {
    navigation.navigate('ForgotChangePassScreenAlly');
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (emailAddress.length > 0 && password.length > 0) {
        // Sign in the user
        const userCredential = await auth().signInWithEmailAndPassword(emailAddress, password);
        console.debug('🟢 ~ handleLogin ~ userCredential:', userCredential);
        const {user} = userCredential;

        console.log('User:', user);

        // Check if the email is verified
        if (user.emailVerified) {
          // Fetch user data from Firestore
          const firestoreDoc = await firestore().collection('users').doc(user.uid).get();
          console.debug('🟢 ~ handleLogin ~ firestoreDoc:', firestoreDoc);
          const userData = firestoreDoc.data();
          console.debug('🟢 ~ handleLogin ~ userData:', userData);

          if (userData) {
            // Update state with fetched user data and new password
            updateUserData({...userData, password}); // Store the new password in your app's state
            console.log('User data from Firestore with new password:', {...userData, password});

            // Update Firestore with the new password and reset information
            await firestore().collection('users').doc(user.uid).update({
              password, // Update Firestore with the new password
              passwordReset: true,
              passwordResetTimestamp: firestore.FieldValue.serverTimestamp(),
            });

            // Alert.alert('Firestore updated with new password and reset info');

            // Check if email verification alert has been shown
            if (!userData.emailVerifiedAlertShown) {
              Alert.alert('You are verified');
              await firestore().collection('users').doc(user.uid).update({
                emailVerifiedAlertShown: true,
              });
            }

            // Navigate to the Home screen
            // navigation.dispatch(StackActions.replace('Home'));
          } else {
            console.error('No user data found in Firestore.');
          }

          // Alert.alert('You are verified');
        } else {
          Alert.alert('Please verify your email.');

          // Send email verification and sign out
          await auth().currentUser?.sendEmailVerification();
          await auth().signOut();
        }
      } else {
        Alert.alert('Please Enter All Data');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  /*
   *  Btn press to make user Login
   */
  // const appBtnPress = async () => {
  //   try {
  //     const params = {
  //       email: emailAddress?.trim(),
  //       password,
  //     };
  //     loginSchema.parse(params);
  //     setLoading(true);
  //     // signing user in app
  //     await signIn(params);
  //     setLoading(false);
  //     console.log('params:', params);
  //   } catch (error: unknown | ZodError) {
  //     setLoading(false);
  //     if (error instanceof ZodError) {
  //       Toast.show(error?.issues[0]?.message, Toast.LONG);
  //     }
  //     console.log('🚀 ~ appBtnPress ~ error:', error);
  //   }
  // };

  // adds
  const bannerRef = useRef<BannerAd>(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  //
  // const isFocus = useIsFocused();

  // const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-7070097383743849/5328624621';

  // const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  //   keywords: ['fashion', 'clothing'],
  // });

  // const [loaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });

  //   // Start loading the interstitial straight away
  //   interstitial.load();
  //   console.log('showing....');
  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, [interstitial]);

  // useEffect(() => {
  //   if (loaded) {
  //     setTimeout(() => {
  //       interstitial.show();
  //     }, 1000);
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator color={COLORS.primary} size={'large'} />
  //     </View>
  //   );
  // }

  return (
    <AppScreen>
      {/* <ImageBackground source={IMAGES.AuthImage} style={styles.imageBackground}> */}
      <View style={styles.overlay} />
      <BackButton />
      <ScrollView>
        {/* <SVG.profilefillicon fill={fillColor || colors.background} style={styles.svg} /> */}
        <AuthHeader
          viewStyle={styles.heading}
          text1={'welcomeBack'}
          upperTextStyle={{
            color: COLORS.yellow,
            fontFamily: FONTS.poppinsMedium,
            fontSize: 33,
            paddingTop: 12,
            marginTop: 50,
            marginRight: 22,
          }}
        />
        <InputTextLabel onChangeText={setEmailAddress} placeHolder={t('email')} value={emailAddress} leftIcon={true}>
          <SVG.Email />
        </InputTextLabel>
        <InputTextLabel
          onChangeText={setPassword}
          placeHolder={t('password')}
          value={password}
          isPassword={true}
          leftIcon={true}>
          <SVG.Password />
        </InputTextLabel>
        {message && <Text style={styles.message}>{message}</Text>}

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <AppText
            onPress={onPressForgotChangePassScreenAlly}
            style={styles.forgot}
            transText={'forgotPasswordsmall'}
            presetStyle={'default'}
          />
        </TouchableOpacity>
        <AppButton
          btnStyle={styles.button}
          textStyle={styles.text}
          title={'login'}
          onPress={handleLogin}
          loading={loading}
        />
        {/* <Separator text="or continue with" TextStyle={styles.separator} /> */}
        {/* <Separator transText='continuewith' TextStyle={styles.separator} /> */}
        {/* <LoginSocialIcon /> */}
        <FooterText text={'accounts'} textone={'signUp'} onPress={onPressSignupScreenOne} />
        <View style={{marginTop: 22}}>
          <BannerAd ref={bannerRef} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} unitId={bannerAddKey} />
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </AppScreen>
  );
}
