import {Alert, ImageBackground, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AuthHeader, BackButton, InputTextLabel, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {SVG} from '../../assets';
import {useTranslation} from 'react-i18next';
import {useAppStore} from '../../store';
import {FONTS} from '../../assets/fonts';

// Function to validate password strength
const isPasswordStrong = (password: string): boolean => {
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

export default function SignupScreenOne() {
  /*
   ** State
   */
  const [fulltName, setFullName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenOne formData', formData);

  /*
   ** Hooks
   */
  const {t} = useTranslation();
  const navigation = useAppNavigation();

  // stats
  const [message, setMessage] = useState<String>('');
  /*
   ** Functions
   */
  const handleCombinedSignup = async () => {
    try {
      // Check if all fields are filled
      if (!fulltName || !emailAddress || !password) {
        Alert.alert(t('enter'));
        return;
      }

      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress)) {
        Alert.alert(t('invalid'), t('valid'));
        return;
      }

      // Password validation
      if (!isPasswordStrong(password)) {
        Alert.alert(t('weak'), t('must'));
        console.log('Password does not meet strength requirements.');
        return;
      }

      const params = {
        fulltName: fulltName,
        emailAddress: emailAddress,
        password: password,
      };
      console.log('params: SignupScreenOne', params);
      updateFormData(params);

      // Pass `uid` to SignupScreenTwo
      navigation.navigate('SignupScreenTwo');
    } catch (error) {
      console.log('Error during signup', error);
      setMessage(error.message);
    }
  };

  // Rendering
  return (
    <AppScreen>
      {/* <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}> */}
      {/* Main Body */}
      {/* <View style={{flex: 1 ,  backgroundColor: 'rgba(32, 32, 32, 0.3)',}}> */}
      <BackButton />
      {/* Progress Bar */}
      <ProgressBarAlly
        currentStep={1}
        totalSteps={9}
        inactiveColor={COLORS.lightBlackTwo}
        activeColor={COLORS.yellow}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        {/* Headers */}
        <AuthHeader
          viewStyle={styles.heading}
          text1={'Whatisyourname'}
          upperTextStyle={{color: COLORS.yellow, fontFamily: FONTS.poppinsMedium, textAlign: 'center'}}
        />
        {/* Input fields */}
        <InputTextLabel onChangeText={setFullName} placeHolder={t('fulltName')} value={fulltName} leftIcon={true}>
          <SVG.ProfileAlly />
        </InputTextLabel>
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

        <Text style={styles.message}>{message}</Text>
        {/* Main Button */}
        <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={handleCombinedSignup} />
      </ScrollView>
      {/* </View> */}
      {/* </ImageBackground> */}
    </AppScreen>
  );
}
