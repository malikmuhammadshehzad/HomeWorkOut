import React, {useState} from 'react';
import {Alert, Image, ImageBackground, View, ViewStyle} from 'react-native';
import {AppButton, AppScreen, AuthHeader, BackButton, InputTextLabel} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {useAppStore} from '../../store';
import {COLORS, CustomTheme} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

interface profileType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function ForgotChangePassScreenAlly(props: profileType): JSX.Element {
  /*
   ** States
   */
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const userData = useAppStore(state => state.userData);

  console.log('🚀 ~ LoginScreen ~ userData:', userData);
  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {colors} = useTheme() as CustomTheme;
  const {t} = useTranslation();
  /*
   ** Props
   */
  const {fillColor = COLORS.whiteTwo, viewStyle = {}} = props;
  /*
   * Functions
   */

  // const onPressOtpVerificationScreen = (): void => {
  //   navigation.navigate('OtpVerificationScreen');
  // };
  const onPressOtpVerificationScreen = (): void => {
    navigation.navigate('LoginScreen');
  };

  const handlePassword = async () => {
    setLoading(true);
    try {
      await auth().sendPasswordResetEmail(emailAddress);
      Alert.alert('Password reset email sent 🚀');
    } catch (error: any) {
      console.log('Error while sending email for reset password', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCombinedPress = () => {
    handlePassword();
    onPressOtpVerificationScreen();
  };

  return (
    <AppScreen>
      <View style={styles.overlay} />
      <BackButton />
      {/* <SVG.EmailAlly fill={fillColor || colors.whiteTwo} style={styles.svg} /> */}
      <Image source={IMAGES.forget} style={styles.svg} />
      <View style={styles.imageBackground}>
        <AuthHeader viewStyle={styles.heading} text1={'forgotPasswordBold'} upperTextStyle={{color: COLORS.yellow}} />
        <InputTextLabel
          onChangeText={setEmailAddress}
          placeHolder={t('Your Email')}
          value={emailAddress}
          leftIcon={true}>
          <SVG.Email />
        </InputTextLabel>
        <AppButton textStyle={styles.text} title={'continue'} onPress={handleCombinedPress} loading={loading} />
      </View>
    </AppScreen>
  );
}
