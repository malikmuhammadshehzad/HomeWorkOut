import React, {useState, useEffect} from 'react';
import {View, Alert, Text, ScrollView} from 'react-native';
import {AppButton, AppText, BackButton, InputTextLabel} from '../../components';
import styles from './style';
import {SVG} from '../../assets';
import {useTranslation} from 'react-i18next';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppStore} from '../../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function SettingScreenTwo(): JSX.Element {
  // State
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [isPasswordFieldDisabled, setIsPasswordFieldDisabled] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [message, setMessage] = useState<String>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Hooks
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const {userData, updateUserData} = useAppStore();

  useEffect(() => {
    // Provide feedback if current password doesn't match
    if (currentPassword && currentPassword !== userData?.password) {
      setPasswordError(t('currentpasswords'));
      setIsPasswordFieldDisabled(true);
    } else {
      setPasswordError(null);
      setIsPasswordFieldDisabled(false);
    }
  }, [currentPassword, userData?.password]);

  // Validate Password Strength
  const isPasswordStrong = (password: string): boolean => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  // Function to handle password update
  const onPressUpdatePassword = async (): Promise<void> => {
    if (passwordError) {
      Alert.alert(t('error'), t(passwordError));
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert(t('error'), t('newPasswords'));
      return;
    }

    if (!isPasswordStrong(newPassword)) {
      Alert.alert(t('weak'), t('must'));
      return;
    }

    try {
      setLoading(true);
      const currentUser = auth().currentUser;
      if (currentUser) {
        // Update Firebase Authentication password
        await currentUser.updatePassword(newPassword);

        // Update Firestore
        await firestore().collection('users').doc(currentUser.uid).update({
          password: newPassword,
        });

        // Update Store
        updateUserData({password: newPassword});

        Alert.alert(t('success'), t('passwordupdated'));
        navigation.navigate('SettingScreen');
      }
    } catch (err) {
      console.error('Password Update Error: ', err);
      setMessage(err.message);
      Alert.alert(t('error'), t(`Failed to update password: ${message}`));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <BackButton />
        <AppText style={styles.label} transText={'setting'} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <InputTextLabel
          onChangeText={setCurrentPassword}
          value={currentPassword}
          isPassword={true}
          leftIcon={true}
          placeHolder={t('currentpassword')}>
          <SVG.Password />
        </InputTextLabel>

        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <InputTextLabel
          onChangeText={setNewPassword}
          value={newPassword}
          isPassword={true}
          leftIcon={true}
          placeHolder={t('newPassword')}
          editable={!isPasswordFieldDisabled}>
          <SVG.Password />
        </InputTextLabel>

        <InputTextLabel
          onChangeText={setConfirmNewPassword}
          value={confirmNewPassword}
          isPassword={true}
          leftIcon={true}
          placeHolder={t('confirmnewpassword')}
          editable={!isPasswordFieldDisabled}>
          <SVG.Password />
        </InputTextLabel>

        <Text style={styles.message}>{message}</Text>
      </ScrollView>

      <View style={styles.button}>
        <AppButton textStyle={styles.text} title={'update'} onPress={onPressUpdatePassword} loading={loading} />
      </View>
    </View>
  );
}
