import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES} from '../../assets';
import {useAppStore} from '../../store';
import {useTranslation} from 'react-i18next';
import {FONTS} from '../../assets/fonts';

export default function SignupScreenSix() {
  /*
   ** State
   */
  const [fitness, setFitness] = useState('');
  const [message, setMessage] = useState('');
  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {t} = useTranslation();

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenSix formData', formData);
  /*
   ** Functions
   */
  const handleSignupScreenSix = async () => {
    try {
      const params = {
        fitness: fitness,
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
    handleSignupScreenSix();
  };

  // Rendering
  return (
    <AppScreen>
      {/* <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}>
        <View style={{flex: 1, backgroundColor: 'rgba(32, 32, 32, 0.9)'}}> */}
      <BackButton />
      {/* Progress Bar */}
      <ProgressBarAlly
        currentStep={4}
        totalSteps={5}
        inactiveColor={COLORS.lightBlackTwo}
        activeColor={COLORS.yellow}
      />
      <View style={styles.step}>
        <AuthHeader
          viewStyle={styles.heading}
          text1={'Choose the body you want'}
          upperTextStyle={{
            color: COLORS.yellow,
            fontFamily: FONTS.poppinsMedium,
            marginLeft: 27,
          }}
        />
        <View style={styles.goalContainer}>
          <TouchableOpacity
            style={[styles.goalButton, fitness === 'Beginner' ? styles.selectedGoalButton : null]}
            onPress={() => {
              handleCombinedPress();
              setFitness('Beginner');
            }}>
            {/* <Text style={styles.goalButtonText}>Beginner</Text> */}
            {/* <Image
                  style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}}
                  source={IMAGES.beachBody}
                /> */}
            <AppText style={styles.goalButtonText} transText={'Work out body'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.goalButton, fitness === 'Intermediate' ? styles.selectedGoalButton : null]}
            onPress={() => {
              setFitness('Intermediate');
              handleCombinedPress();
            }}>
            <Image style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}} source={IMAGES.workOut} />
            <AppText style={styles.goalButtonText} transText={'Cross fit body'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.goalButton, fitness === 'Advanced' ? styles.selectedGoalButton : null]}
            onPress={() => {
              handleCombinedPress();
              setFitness('Advanced');
            }}>
            <Image style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}} source={IMAGES.crossFit} />
            <AppText style={styles.goalButtonText} transText={'Beach body'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* </View>
      </ImageBackground> */}
    </AppScreen>
  );
}
