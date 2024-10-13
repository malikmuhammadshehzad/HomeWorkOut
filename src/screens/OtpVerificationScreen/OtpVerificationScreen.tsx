import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { AppButton, AppScreen, BackButton, AuthHeader } from '../../components';
import Toast from 'react-native-simple-toast';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { ZodError } from 'zod';
import { loginSchema } from '../../utils/SchemaValidation';
import { useAppStore } from '../../store';
import { signIn } from '../../store/authSlice/authApiService';
import { COLORS, CustomTheme } from '../../theme';
import { IMAGES, SVG } from '../../assets';
import { useTheme } from '@react-navigation/native';
import style from './style';

const CELL_COUNT = 4;

const OtpVerificationScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const userData = useAppStore(state => state.userData);
  const navigation = useAppNavigation();
  const { colors } = useTheme() as CustomTheme;

  /*
   * Functions
   */
  const onPressNewPasswordScreen = (): void => {
    navigation.navigate('NewPasswordScreen');
  };

  const appBtnPress = async () => {
    try {
      const params = {
        email: emailAddress?.trim(),
        password,
      };
      loginSchema.parse(params);
      setLoading(true);
      await signIn(params);
      setLoading(false);
    } catch (error: unknown | ZodError) {
      setLoading(false);
      if (error instanceof ZodError) {
        Toast.show(error?.issues[0]?.message, Toast.LONG);
      }
    }
  };

  return (
    <AppScreen>
      <ImageBackground source={IMAGES.AuthBackgroundImg} style={style.imageBackground}>
        <View style={style.overlay} />
        <BackButton />
        <SVG.PasswordIconAlly fill={COLORS.whiteTwo} style={style.svg} />
        <AuthHeader viewStyle={style.heading} text1={'Verification'} upperTextStyle={{ color: COLORS.yellow }} />
        
        <SafeAreaView style={style.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={style.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[style.cell, isFocused && style.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>

        <AppButton textStyle={style.text} title={'continue'} onPress={onPressNewPasswordScreen} loading={loading} />

        <View style={style.timerContainer}>
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors="#D3FF00"
            rotation="counterclockwise"
            trailColor='#3C3D42'
            strokeLinecap="butt"
            size={140}
            strokeWidth={5}
            onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          >
            {({ remainingTime }) => <Text style={style.timerText}>00:{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
      </ImageBackground>
    </AppScreen>
  );
};

export default OtpVerificationScreen;
