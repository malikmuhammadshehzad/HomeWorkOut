import { Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { AppText, BackButton } from '../../components';
import { SVG } from '../../assets';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { useTranslation } from 'react-i18next';

const SettingScreen = () => {
  // Hooks
  const navigation = useAppNavigation();
  const { t, i18n } = useTranslation();

  // for Country
  // State and Data
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [notification, setNotification] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' }
  ];

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language.label);
    i18n.changeLanguage(language.code); // Change the language in i18n
    setModalVisible(false);
  };

  const handleNotification = () => {
    setNotification(!notification);
  };

  const onPressLocationScreen = () => {
    navigation.navigate('SettingScreenTwo');
  };

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <BackButton />
        <AppText style={styles.label} transText={'setting'} />
      </View>
      <View style={styles.notify}>
        <AppText style={styles.notification} transText={'notification'} />
        <TouchableOpacity onPress={handleNotification}>
          {notification ? <SVG.NotificationOn /> : <SVG.NotificationOff />}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.passwords} onPress={onPressLocationScreen}>
        <AppText style={styles.notification} transText={'passwords'} />
      </TouchableOpacity>

      {/* for Language */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.Button}>
        {/* <AppText style={styles.selectedText}>{selectedLanguage}</AppText> */}
        <AppText style={styles.selectedText}>
              {selectedLanguage ? selectedLanguage.toString() : t('language')}
            </AppText>
        <SVG.ArrowDownAlly />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.countryMiniContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <SVG.CrossIcon style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.code}
                  onPress={() => handleSelectLanguage(language)}
                  style={styles.optionButton}
                >
                  <AppText style={styles.optionText}>{language.label}</AppText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingScreen;
