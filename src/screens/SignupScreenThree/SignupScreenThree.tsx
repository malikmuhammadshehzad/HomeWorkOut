import {Alert, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useAppStore} from '../../store';
import {useTranslation} from 'react-i18next';
import { FONTS } from '../../assets/fonts';

export default function SignupScreenThree() {
  /*
   ** State
   */
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);

  const ages = Array.from({length: 100}, (_, i) => i + 18);

  const handleSelectAge = age => {
    setSelectedAge(age);
    setModalVisible(false);
  };

  // stats
  const [message, setMessage] = useState('');

  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {t} = useTranslation();

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenThree formData', formData);
  /*
   ** Functions
   */
  const handleSignupScreenThree = async () => {
    try {
      if (!selectedAge) {
        Alert.alert(t('validation'), t('ages'));
        return;
      }

      const params = {
        selectedAge: selectedAge,
      };
      console.log('params: LoginScreen', params);
      updateFormData(params);

      navigation.navigate('SignupScreenFour');
    } catch (error) {
      console.log('Error During Login In LoginScreen');
      setMessage(error.message);
    }
  };

  // Combine both functions in one
  const handleCombinedPress = () => {
    handleSignupScreenThree();
  };

  // Rendering
  return (
    <AppScreen>
      <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}>
        <View style={{flex: 1, backgroundColor: 'rgba(32, 32, 32, 0.9)'}}>
          <BackButton />
          {/* Progress Bar */}
          <ProgressBarAlly
            currentStep={3}
            totalSteps={9}
            inactiveColor={COLORS.lightBlackTwo}
            activeColor={COLORS.yellow}
          />
          <View>
            <AuthHeader
              viewStyle={styles.heading}
              text1={'howOldAreYou'}
              upperTextStyle={{color: COLORS.yellow, fontFamily: FONTS.poppinsMedium , textAlign:'center', marginRight:16}}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.ageButton}>
              <AppText style={styles.selectedText}>
                {selectedAge ? selectedAge.toString() : t('selectAge')} {/* Wrap text inside <Text> */}
              </AppText>
              <SVG.ArrowDown />
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType='slide'>
              <View style={styles.modalContainer}>
                <View style={styles.ageminiContainer}>
                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <SVG.CrossIcon style={styles.closeIcon} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {ages.map(age => (
                      <TouchableOpacity key={age} onPress={() => handleSelectAge(age)} style={styles.optionButton}>
                        <Text style={styles.optionText}>{age.toString()}</Text>
                      </TouchableOpacity>
                    ))}
                    <Text>{message}</Text>
                  </ScrollView>
                </View>
              </View>
            </Modal>
          </View>
          <AppButton
            btnStyle={styles.button}
            textStyle={styles.text}
            title={'nextStep'}
            onPress={handleCombinedPress}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}
