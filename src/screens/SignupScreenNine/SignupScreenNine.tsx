import {Alert, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useAppStore} from '../../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useTranslation } from 'react-i18next';

export default function SignupScreenNine() {
  /*
   ** State
   */
  const [loading, setLoading] = useState<boolean>(false);
  // for location
  // for Country
  // State and Data

  const [modalVisibleC, setModalVisibleC] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'India',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Brazil',
    'Mexico',
    'Japan',
    'China',
    'Russia',
    'South Africa',
    'South Korea',
    'Netherlands',
    'Sweden',
    'Norway',
    'Argentina',
    'New Zealand',
    'Singapore',
    'Switzerland',
    'Turkey',
    'Saudi Arabia',
    'United Arab Emirates',
    'Thailand',
    'Indonesia',
    'Vietnam',
    'Malaysia',
  ];

  const handleSelectCountry = country => {
    setSelectedCountry(country);
    setModalVisibleC(false);
  };
  // for city
  // State and Data

  const [modalVisibleCity, setModalVisibleCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix', // United States
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Ottawa', // Canada
    'London',
    'Birmingham',
    'Manchester',
    'Glasgow',
    'Liverpool', // United Kingdom
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide', // Australia
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai', // India
  ];

  const handleSelectCity = city => {
    setSelectedCity(city);
    setModalVisibleCity(false);
  };
  // for state
  // State and Data

  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const states = [
    'California',
    'Texas',
    'New York',
    'Florida',
    'Illinois', // United States
    'Ontario',
    'Quebec',
    'British Columbia',
    'Alberta',
    'Manitoba', // Canada
    'England',
    'Scotland',
    'Wales',
    'Northern Ireland', // United Kingdom
    'New South Wales',
    'Victoria',
    'Queensland',
    'Western Australia',
    'South Australia', // Australia
    'Maharashtra',
    'Tamil Nadu',
    'Karnataka',
    'Gujarat',
    'Rajasthan', // India
  ];

  const handleSelectState = state => {
    setSelectedState(state);
    setModalVisibleState(false);
  };
  
  /*
   * Hooks
   */
  const {t} = useTranslation()
  const navigation = useAppNavigation();
  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenNine formData', formData)
  // stats
  const [message, setMessage] = useState('');
  /*
   ** Functions
   */
   const handleSignupScreenNine =async () => {
    setLoading(true)
    try {

  

      const params = {
        selectedCountry: selectedCountry,
        selectedCity: selectedCity,
        selectedState: selectedState,
      };
      console.log('params: LoginScreen', params);
      updateFormData(params);

        const response = await auth().createUserWithEmailAndPassword(
          formData?.emailAddress,
          formData?.password,
        );

        const userData = {
          ...formData,
          selectedCountry: selectedCountry,
          selectedCity: selectedCity,
          selectedState: selectedState,
          uid: response.user.uid,
        }

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
      setLoading(false)
    }
  };
  
  // Combine all functions into one
  const handleCombinedPress = () => {
    handleSignupScreenNine(); 
  };
  

  // Rendering
  return (
    <AppScreen>
      <ImageBackground source={IMAGES.SignUpCarouselImage} style={styles.imageBackground}>
        <BackButton />
        {/* Progress Bar */}
        <ProgressBarAlly
          currentStep={9}
          totalSteps={9}
          inactiveColor={COLORS.lightBlackTwo}
          activeColor={COLORS.yellow}
        />
        <View>
          <AuthHeader viewStyle={styles.heading} text1={'Location'} upperTextStyle={{color: COLORS.yellow}} />
          {/* for Country */}
          <TouchableOpacity onPress={() => setModalVisibleC(true)} style={styles.countryButton}>
            <AppText style={styles.selectedText}>{selectedCountry ? selectedCountry.toString() : t('selectCountry')}</AppText>
            <SVG.ArrowDown />
          </TouchableOpacity>

          <Modal visible={modalVisibleC} transparent={true} animationType='slide'>
            <View style={styles.modalContainer}>
              <View style={styles.countryMiniContainer}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setModalVisibleC(false)}>
                    <SVG.CrossIcon style={styles.closeIcon} />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                  {countries.map(country => (
                    <TouchableOpacity
                      key={country}
                      onPress={() => handleSelectCountry(country)}
                      style={styles.optionButton}>
                      <Text style={styles.optionText}>{country}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
          {/* for City */}
          <TouchableOpacity onPress={() => setModalVisibleCity(true)} style={styles.countryButton}>
            <AppText style={styles.selectedText}>{selectedCity ? selectedCity.toString() : t('selectCity')}</AppText>
            <SVG.ArrowDown />
          </TouchableOpacity>

          <Modal visible={modalVisibleCity} transparent={true} animationType='slide'>
            <View style={styles.modalContainer}>
              <View style={styles.countryMiniContainer}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setModalVisibleCity(false)}>
                    <SVG.CrossIcon style={styles.closeIcon} />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                  {cities.map(city => (
                    <TouchableOpacity key={city} onPress={() => handleSelectCity(city)} style={styles.optionButton}>
                      <Text style={styles.optionText}>{city}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
          {/* for State */}
          <TouchableOpacity onPress={() => setModalVisibleState(true)} style={styles.stateButton}>
            <AppText style={styles.selectedText}>{selectedState ? selectedState.toString() : t('selectState')}</AppText>
            <SVG.ArrowDown />
          </TouchableOpacity>

          <Modal visible={modalVisibleState} transparent={true} animationType='slide'>
            <View style={styles.modalContainer}>
              <View style={styles.stateMiniContainer}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setModalVisibleState(false)}>
                    <SVG.CrossIcon style={styles.closeIcon} />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                  {states.map(state => (
                    <TouchableOpacity key={state} onPress={() => handleSelectState(state)} style={styles.optionButton}>
                      <Text style={styles.optionText}>{state}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        <Text style={styles.message}>{message}</Text>
        <AppButton
          btnStyle={styles.button}
          textStyle={styles.text}
          title={'save'}
          loading={loading}
          onPress={handleCombinedPress}
        />
      </ImageBackground>
    </AppScreen>
  );
}
