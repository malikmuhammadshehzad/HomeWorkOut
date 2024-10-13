import {Alert, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AuthHeader, BackButton, ProgressBar, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES} from '../../assets';
import {useAppStore} from '../../store';
import { useTranslation } from 'react-i18next';

export default function SignupScreenSeven() {
  /*
   ** State
   */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');

  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {t} = useTranslation()
  /*
   ** Functions
   */

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenSeven formData', formData)

  const handleSignupScreenSeven =async () => {
    try {
      if (!currentIndex) {
        Alert.alert(t('validation'), t('select'));
        return;
      }

      const params = {
        currentIndex: currentIndex + 1,
      };
      console.log('params: LoginScreen', params);
      updateFormData(params);

      navigation.navigate('SignupScreenEight');

    } catch (error) {
      console.log('Error During Login In LoginScreen');
      setMessage(error.message);
    }
  };


  // Combine both functions in one
  const handleCombinedPress = () => {
    handleSignupScreenSeven();
  };

  // Rendering
  return (
    <AppScreen>
      <ImageBackground source={IMAGES.SignUpCarouselImage} style={styles.imageBackground}>
        <BackButton />
        {/* Progress Bar */}
        <ProgressBarAlly
          currentStep={7}
          totalSteps={9}
          inactiveColor={COLORS.lightBlackTwo}
          activeColor={COLORS.yellow}
        />
        <AuthHeader viewStyle={styles.heading} text1={'workout'} upperTextStyle={{color: COLORS.yellow}} />
        <ProgressBar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={handleCombinedPress} />
      </ImageBackground>
    </AppScreen>
  );
}
