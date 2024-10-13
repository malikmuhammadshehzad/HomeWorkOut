import {Alert, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useAppStore} from '../../store';
import {useTranslation} from 'react-i18next';
import {FONTS} from '../../assets/fonts';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function SignupScreenEight() {
  /*
   ** State
   */
  const [equipment, setEquipment] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {t} = useTranslation();

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenEight formData', formData);
  /*
   ** Functions
   */
  const handleSignupScreenEight = async () => {
    try {
      navigation.navigate('SignupScreenNine'); // Pass `uid` to the next screen
    } catch (error) {
      console.log('Error During Login In LoginScreen');
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const params = {
        equipment: equipment,
      };
      console.log('params: LoginScreen', params);
      updateFormData(params);
      const response = await auth().createUserWithEmailAndPassword(formData?.emailAddress, formData?.password);
      console.log('response', response);

      const userData = {
        ...formData,
        equipment: equipment,
        uid: response.user.uid,
      };
      console.log('userData', userData);

      // Update Firestore with additional data
      await firestore().collection('users').doc(response.user.uid).set(userData);

      await auth().currentUser?.sendEmailVerification();
      await auth().signOut();

      Alert.alert(t('mail'));

      // Navigate to the Login screen
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log('Error During Login In LoginScreen', error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Combine both functions in one
  const handleCombinedPress = () => {
    handleSignupScreenEight();
  };

  // Rendering
  return (
    <AppScreen>
      {/* <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}> */}
      {/* <View style={{flex: 1, backgroundColor: 'rgba(32, 32, 32, 0.9)'}}> */}
      <BackButton />
      {/* Progress Bar */}
      <ProgressBarAlly
        currentStep={5}
        totalSteps={5}
        inactiveColor={COLORS.lightBlackTwo}
        activeColor={COLORS.yellow}
      />
      <View style={styles.step}>
        <AuthHeader
          viewStyle={styles.heading}
          text1={'Equipment'}
          upperTextStyle={{color: COLORS.yellow, fontFamily: FONTS.poppinsMedium, marginLeft: 27}}
        />
        <View style={styles.goalContainer}>
          <TouchableOpacity
            style={[styles.goalButton, equipment === 'Yes Equipments' ? styles.selectedGoalButton : null]}
            onPress={() => {
              setEquipment('Yes Equipments');
            }}>
            <AppText style={styles.goalButtonText} transText={'yes'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.goalButton, equipment === 'No Equipments' ? styles.selectedGoalButton : null]}
            onPress={() => setEquipment('No Equipments')}>
            <AppText style={styles.goalButtonText} transText={'no'} />
          </TouchableOpacity>
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
      <AppButton
        btnStyle={styles.button}
        textStyle={styles.text}
        title={'save'}
        loading={loading}
        onPress={handleSignup}
      />
      {/* </View> */}
      {/* </ImageBackground> */}
    </AppScreen>
  );
}
