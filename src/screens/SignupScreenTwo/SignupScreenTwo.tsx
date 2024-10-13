import {Alert, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScreen, AppText, AuthHeader, BackButton, ProgressBarAlly} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './style';
import {COLORS} from '../../theme';
import {IMAGES, SVG} from '../../assets';
import {useAppStore} from '../../store';
import {FONTS} from '../../assets/fonts';
import {t} from 'i18next';
import style from '../FavoriteScreen/style';

export default function SignupScreenTwo() {
  const [gender, setGender] = useState('');
  // stats
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);
  const [modalVisibleWeight, setModalVisibleWeight] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [modalVisibleHeight, setModalVisibleHeight] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const {updateFormData, formData} = useAppStore();
  console.log('SignupScreenTwo formData', formData);
  const navigation = useAppNavigation();
  const ages = Array.from({length: 100}, (_, i) => i + 18);
  const handleSelectWeight = weight => {
    setSelectedWeight(weight);
    setModalVisibleWeight(false);
  };
  const handleSelectAge = age => {
    setSelectedAge(age);
    setModalVisible(false);
  };

  const heights = Array.from({length: 24}, (_, i) => {
    const feet = Math.floor(i / 12) + 4;
    const inches = i % 12;
    return `${feet}’${inches}”`;
  });
  const weights = Array.from({length: 250}, (_, i) => `${i + 50} lb`);
  const handleSelectHeight = height => {
    setSelectedHeight(height);
    setModalVisibleHeight(false);
  };

  const handleSignupScreenTwo = async () => {
    try {
      if (!gender || !selectedAge || !selectedWeight || !selectedHeight) {
        Alert.alert('Validation', 'Please select your gender');
        return;
      }

      const params = {
        gender: gender,
        selectedAge: selectedAge,
        selectedHeight: selectedHeight,
        selectedWeight: selectedWeight,
      };
      console.log('params: SignupScreenTwo', params);
      updateFormData(params);

      navigation.navigate('SignupScreenFive');
    } catch (error) {
      console.log('Error During Signup in SignupScreenTwo', error);
      setMessage(error.message);
    }
  };

  const handleCombinedPress = () => {
    handleSignupScreenTwo();
  };

  // Rendering
  return (
    <AppScreen>
      <View style={styles.mainStyle}>
        <BackButton />
        {/* Progress Bar */}
        <ProgressBarAlly
          currentStep={2}
          totalSteps={5}
          inactiveColor={COLORS.lightBlackTwo}
          activeColor={COLORS.yellow}
        />
        {/* <AuthHeader viewStyle={styles.heading} text1={'Whatisyourgender'} upperTextStyle={{color: COLORS.yellow ,  fontFamily:FONTS.poppinsMedium , textAlign:'center' }} /> */}
        <View style={styles.step}>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderButtonMale, gender === 'male' ? {borderColor: COLORS.yellow, borderWidth: 3} : null]}
              onPress={() => setGender('male')}>
              <SVG.MaleIcon />
              <AppText style={styles.genderButtonText} transText={'male'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButtonFemale,
                gender === 'female' ? {borderColor: COLORS.yellow, borderWidth: 3} : null,
              ]}
              onPress={() => setGender('female')}>
              <SVG.FemaleIcon />
              <AppText style={styles.female} transText={'female'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.ageButton}>
            <AppText style={styles.selectedText}>
              {selectedAge ? selectedAge.toString() : t('selectAge')} {/* Wrap text inside <Text> */}
            </AppText>
            <SVG.ArrowDown />
          </TouchableOpacity>
        </View>
        {/* height */}
        <TouchableOpacity onPress={() => setModalVisibleHeight(true)} style={styles.heightButton}>
          <AppText style={styles.selectedTexth}>
            {selectedHeight ? selectedHeight.toString() : t('Select Height')}
          </AppText>
          <SVG.HeightSelectionIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisibleWeight(true)} style={styles.heightButton}>
          <AppText style={styles.selectedTexth}>
            {selectedWeight ? selectedWeight.toString() : t('selectWeight')}
          </AppText>
          <SVG.WeightSelectionIcon />
        </TouchableOpacity>
        <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={handleCombinedPress} />
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
        <Modal visible={modalVisibleWeight} transparent={true} animationType='slide'>
          <View style={styles.modalContainerh}>
            <View style={styles.heightMiniContainer}>
              <View style={styles.modalHeaderh}>
                <TouchableOpacity onPress={() => setModalVisibleWeight(false)}>
                  <SVG.CrossIcon style={styles.closeIconh} />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scrollViewh} showsVerticalScrollIndicator={false}>
                {weights.map(weight => (
                  <TouchableOpacity
                    key={weight}
                    onPress={() => handleSelectWeight(weight)}
                    style={styles.optionButtonh}>
                    <Text style={styles.optionTexth}>{weight}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </AppScreen>
  );
}
