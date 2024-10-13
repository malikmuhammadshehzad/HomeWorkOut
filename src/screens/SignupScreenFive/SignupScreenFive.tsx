import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useAppStore} from '../../store';
import {t} from 'i18next';
import {FONTS} from '../../assets/fonts';

export default function SignupScreenFive() {
  /*
   ** State
   */
  const [goal, setGoal] = useState('');
  const [message, setMessage] = useState('');
  /*
   * Hooks
   */
  const navigation = useAppNavigation();

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenFive formDatA', formData);
  /*
   ** Functions
   */
  const handleSignupScreenFive = async () => {
    try {
      const params = {
        goal: goal,
      };
      console.log('params: SignupScreenSix', params);
      updateFormData(params);

      navigation.navigate('SignupScreenSix');
    } catch (error) {
      console.log('Error During Login In LoginScreen');
      setMessage(error.message);
    }
  };

  // Combine both functions in one
  const handleCombinedPress = () => {
    handleSignupScreenFive();
  };

  // Rendering
  return (
    <AppScreen>
      {/* <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}>
        <View style={{flex: 1, backgroundColor: 'rgba(32, 32, 32, 0.9)'}}> */}
      <BackButton />
      {/* Progress Bar */}
      <ProgressBarAlly
        currentStep={3}
        totalSteps={5}
        inactiveColor={COLORS.lightBlackTwo}
        activeColor={COLORS.yellow}
      />
      <View style={styles.step}>
        <AuthHeader
          viewStyle={styles.heading}
          text1={'mainGoal'}
          upperTextStyle={{color: COLORS.yellow, fontFamily: FONTS.poppinsMedium}}
        />
        <View style={styles.goalContainer}>
          <TouchableOpacity
            style={[styles.goalButton, goal === 'build muscle' ? styles.selectedGoalButton : null]}
            onPress={() => {
              handleCombinedPress();
              setGoal('build muscle');
            }}>
            <Image style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}} source={IMAGES.musculs} />
            <AppText style={styles.goalButtonText} transText={'build'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.goalButton, goal === 'Health & Wellness' ? styles.selectedGoalButton : null]}
            onPress={() => {
              handleCombinedPress();
              setGoal('Health & Wellness');
            }}>
            <Image style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}} source={IMAGES.health} />
            <AppText style={styles.goalButtonText} transText={'Health & Wellness'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.goalButton, goal === 'lose weight' ? styles.selectedGoalButton : null]}
            onPress={() => {
              handleCombinedPress();
              setGoal('lose weight');
            }}>
            <Image style={{width: '100%', height: '99%', borderRadius: 10, opacity: 0.5}} source={IMAGES.sixPack} />
            <AppText style={styles.goalButtonText} transText={'Six pack'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* </View>
      </ImageBackground> */}
    </AppScreen>
  );
}
