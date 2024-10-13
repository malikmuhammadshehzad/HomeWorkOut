import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppScreen,
  AuthHeader,
  BackButton,
} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import { COLORS } from '../../theme';
import { IMAGES, SVG } from '../../assets';

export default function SignupScreenTen() {
  /*
   ** State
   */
   const [gender, setGender] = useState('');
  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  /*
   ** Functions
   */

  /*
   **   When continue button is pressed
   */
   const onPressSignup = (): void => {
    navigation.navigate('SignupScreenThree');
  };
  // Rendering
  return (
    <AppScreen>
      <ImageBackground 
        source={IMAGES.SignUpCarouselImage}
        style={styles.imageBackground}
      >
      <BackButton />
    <AuthHeader viewStyle={styles.heading} text1={'Whatisyourgender'} upperTextStyle={{color: COLORS.yellow}} />
      <View style={styles.step}>
    <View style={styles.genderContainer}>
      <TouchableOpacity
        style={[
          styles.genderButtonMale,
          //gender === 'male' ? styles.selectedGenderButton : null,
        ]}
        onPress={() => setGender('male')}
      >
        <SVG.MaleIcon/>
        <Text style={styles.genderButtonText}>Male</Text>
        {gender === 'male' ? <SVG.SelectedGender style={styles.iconMale}/> : <SVG.UnselectedGender style={styles.iconMale}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.genderButtonFemale,
          //gender === 'female' ? styles.selectedGenderButton : null,
        ]}
        onPress={() => setGender('female')}
      >
        <SVG.FemaleIcon/>
        <Text style={[styles.female]}>Female</Text>
        {gender === 'female' ? <SVG.SelectedGender style={styles.iconFemale}/> : <SVG.UnselectedGender style={styles.iconFemale}/>}
      </TouchableOpacity>
    </View>
  </View>
    <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={onPressSignup} />
      </ImageBackground>
    </AppScreen>
  );
}
