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

export default function SignupScreenFour() {
  // stats
  const [message, setMessage] = useState('');
  /*
   ** State
   */
  // for height selection

  const [modalVisibleHeight, setModalVisibleHeight] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState(null);

  const heights = Array.from({length: 24}, (_, i) => {
    const feet = Math.floor(i / 12) + 4;
    const inches = i % 12;
    return `${feet}’${inches}”`;
  });

  const handleSelectHeight = height => {
    setSelectedHeight(height);
    setModalVisibleHeight(false);
  };

  //

  // for weight selection

  // State and Weight Data
  const [modalVisibleWeight, setModalVisibleWeight] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(null);

  const weights = Array.from({length: 250}, (_, i) => `${i + 50} lb`);

  // Handle Weight Selection
  const handleSelectWeight = weight => {
    setSelectedWeight(weight);
    setModalVisibleWeight(false);
  };

  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {t} = useTranslation();

  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenFour formData:', formData);
  /*
   ** Functions
   */
  const handleSignupScreenFour = async () => {
    try {
      if (!selectedHeight) {
        // Alert.alert(t('validation'), t('selectWeight'));
        Alert.alert(t('validation'), t('heights'));
        return;
      }

      if (!selectedWeight) {
        Alert.alert(t('validation'), t('weightss'));
        return;
      }

      const params = {
        selectedHeight: selectedHeight,
        selectedWeight: selectedWeight,
      };
      console.log('params: LoginScreen', params);
      updateFormData(params);

      navigation.navigate('SignupScreenFive');
    } catch (error) {
      console.log('Error During Login In LoginScreen');
      setMessage(error.message);
    }
  };

  // Combine both functions in one
  const handleCombinedPress = () => {
    handleSignupScreenFour();
  };

  // Rendering
  return (
    <AppScreen>
      <ImageBackground source={IMAGES.signupPic} style={styles.imageBackground}>
        <View style={{flex: 1, backgroundColor: 'rgba(32, 32, 32, 0.9)'}}>
          <BackButton />
          {/* Progress Bar */}
          <ProgressBarAlly
            currentStep={4}
            totalSteps={9}
            inactiveColor={COLORS.lightBlackTwo}
            activeColor={COLORS.yellow}
          />
          <View>
            <AuthHeader viewStyle={styles.headingh} text1={'heightWeight'} upperTextStyle={{color: COLORS.yellow ,  fontFamily: FONTS.poppinsMedium , textAlign:'center'}} />
            <TouchableOpacity onPress={() => setModalVisibleHeight(true)} style={styles.heightButton}>
              <SVG.HeightSelectionIcon />
              <AppText style={styles.selectedTexth}>
                {selectedHeight ? selectedHeight.toString() : t('Select Height')}
              </AppText>
            </TouchableOpacity>

            <Modal visible={modalVisibleHeight} transparent={true} animationType='slide'>
              <View style={styles.modalContainerh}>
                <View style={styles.heightMiniContainer}>
                  <View style={styles.modalHeaderh}>
                    <TouchableOpacity onPress={() => setModalVisibleHeight(false)}>
                      <SVG.CrossIcon style={styles.closeIconh} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.scrollViewh} showsVerticalScrollIndicator={false}>
                    {heights.map(height => (
                      <TouchableOpacity
                        key={height}
                        onPress={() => handleSelectHeight(height)}
                        style={styles.optionButtonh}>
                        <Text style={styles.optionTexth}>{height}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisibleWeight(true)} style={styles.weightButton}>
              <SVG.WeightSelectionIcon />
              <AppText style={styles.selectedTextw}>
                {selectedWeight ? selectedWeight.toString() : t('selectWeight')}
              </AppText>
            </TouchableOpacity>

            <Modal visible={modalVisibleWeight} transparent={true} animationType='slide'>
              <View style={styles.modalContainerw}>
                <View style={styles.weightMiniContainer}>
                  <View style={styles.modalHeaderw}>
                    <TouchableOpacity onPress={() => setModalVisibleWeight(false)}>
                      <SVG.CrossIcon style={styles.closeIconw} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.scrollVieww} showsVerticalScrollIndicator={false}>
                    {weights.map(weight => (
                      <TouchableOpacity
                        key={weight}
                        onPress={() => handleSelectWeight(weight)}
                        style={styles.optionButtonw}>
                        <Text style={styles.optionTextw}>{weight}</Text>
                      </TouchableOpacity>
                    ))}
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
