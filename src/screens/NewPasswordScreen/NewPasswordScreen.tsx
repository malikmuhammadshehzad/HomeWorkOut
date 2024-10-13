import React, { useState } from 'react';
import { ImageBackground, ScrollView, View, ViewStyle } from 'react-native';
import { AppButton, AppScreen, AuthHeader, BackButton, InputTextLabel } from '../../components';
import Toast from 'react-native-simple-toast';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { ZodError } from 'zod';
import { loginSchema } from '../../utils/SchemaValidation';
import styles from './style';
import { useAppStore } from '../../store';
import { signIn } from '../../store/authSlice/authApiService';
import { COLORS, CustomTheme } from '../../theme';
import { IMAGES, SVG } from '../../assets';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

interface profileType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function NewPasswordScreen(props: profileType): JSX.Element {
  /*
   ** States
   */
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const userData = useAppStore(state => state.userData);

  console.log('🚀 ~ LoginScreen ~ userData:', userData);
  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {colors} = useTheme() as CustomTheme;
  const {t} = useTranslation()
  /*
   ** Props
   */
   const {fillColor = COLORS.whiteTwo, viewStyle = {}} = props;
  /*
   * Functions
   */
  const onPressLoginScreen = (): void => {
    navigation.navigate('LoginScreen');
  };
  /*
   *  Btn press to make user Login
   */
  const appBtnPress = async () => {
    try {
      const params = {
        email: emailAddress?.trim(),
        password,
      };
      loginSchema.parse(params);
      setLoading(true);
      // signing user in app
      await signIn(params);
      setLoading(false);
      console.log('params:', params);
    } catch (error: unknown | ZodError) {
      setLoading(false);
      if (error instanceof ZodError) {
        Toast.show(error?.issues[0]?.message, Toast.LONG);
      }
      console.log('🚀 ~ appBtnPress ~ error:', error);
    }
  };
  
  return (
    <AppScreen>
      <ImageBackground 
        source={IMAGES.AuthBackgroundImg}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <BackButton />
        <ScrollView style={{flex: 1, marginBottom: 40}}>
        <SVG.PasswordIconAlly fill={fillColor || colors.background} style={styles.svg}/>
        <AuthHeader viewStyle={styles.heading} text1={'newPassword'} upperTextStyle={{color: COLORS.yellow}} />
        <InputTextLabel onChangeText={setPassword} value={password}  placeHolder={t('newPassword')} isPassword={true} leftIcon={true}><SVG.Password /></InputTextLabel>
        <InputTextLabel onChangeText={setConfirmPassword} value={confirmPassword} placeHolder={t('new')} isPassword={true} leftIcon={true}><SVG.Password /></InputTextLabel>
        <AppButton textStyle={styles.text} title={'update'} onPress={onPressLoginScreen} loading={loading} />
        </ScrollView>
      </ImageBackground>
    </AppScreen> 
  );
}