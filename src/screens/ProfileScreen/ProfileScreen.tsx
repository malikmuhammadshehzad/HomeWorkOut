import {Alert, Platform, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import {AppButton, AppText, BackButton, ProfileImageUploader} from '../../components';
import useImagePicker from '../../hooks/useImagePicker';
import {imageObjectType} from '../SignupScreen/types';
import {SVG} from '../../assets';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppStore} from '../../store';
// import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
// Import auth to get the current user
import {BannerAd, BannerAdSize, useForeground} from 'react-native-google-mobile-ads';
import {signOut} from '../../store/authSlice/authApiService';
import auth from '@react-native-firebase/auth';
const Separator = () => (
  <View style={styles.separators}>
    <View style={styles.separator} />
  </View>
);

const ProfileScreen = () => {
  /*
   ** Hooks
   */
  const bannerRef = useRef<BannerAd>(null);
  /*
   * custom hooks
   */
  const navigation = useAppNavigation();
  const {onPressImageUpload} = useImagePicker();
  const {updateUserData, userData} = useAppStore();
  /*
   ** States
   */
  const [loading, setLoading] = useState<boolean>(false);
  const [imageAsset, setImageAsset] = useState<imageObjectType | null>(null);
  // Functions
  const onPressSettingScreen = (): void => {
    navigation.navigate('SettingScreen');
  };

  // open camear or gallery for image upload
  /*
   ** Fetch User Data
   */
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth().currentUser;

      if (currentUser) {
        try {
          const userDoc = await firestore().collection('users').doc(currentUser.uid).get();

          if (userDoc.exists) {
            updateUserData(userDoc.data()); // Update local state with user data
          } else {
            Alert.alert('Error', 'User data not found!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  /*
   ** Image Upload Logic
   */
  const onPressMedia = (): void => {
    setLoading(true);
    onPressImageUpload({
      callBck: async result => {
        if (result.assets && result.assets[0]) {
          const imageData = result.assets[0] as unknown as imageObjectType;
          setImageAsset(imageData);

          try {
            const currentUser = auth().currentUser;
            if (currentUser) {
              // const imageRef = storage().ref(`/profile/${currentUser.uid}/${imageData.fileName}`);
              // await imageRef.putFile(imageData.uri);
              // const downloadURL = await imageRef.getDownloadURL();

              // // Update Firestore with the image URL
              // await firestore().collection('users').doc(currentUser.uid).update({
              //   userProfileImage: downloadURL,
              // });

              // updateUserData({userProfileImage: downloadURL});
              Alert.alert('Image Uploaded Successfully');
            }
          } catch (err) {
            console.error('Upload Error: ', err);
            Alert.alert('Upload failed', 'Could not upload the image.');
          }
        }
        setLoading(false);
      },
    });
  };
  // add
  const adUnitId = 'ca-app-pub-7070097383743849/5328624621';

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });
  const logOut = () =>
    Alert.alert('Logout', 'Do you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => userSignOut()},
    ]);
  const deleteAccount = () =>
    Alert.alert('Delete Account', 'Do you want to delete your account permanently?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => deleteAccountPermanently()},
    ]);
  const userSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      setLoading(false);
    } catch (error) {
      console.log('🚀 ~ signOut ~ error:', error);
      setLoading(false);
    }
  };

  //

  const deleteAccountPermanently = async () => {
    try {
      // Get the currently signed-in user
      const user = auth().currentUser;

      if (!user) {
        throw new Error('No user is signed in');
      }

      const uid = user.uid;
      // Delete user data from Firestore
      await firestore().collection('users').doc(uid).delete();
      // Sign out the user
      await userSignOut();
      Alert.alert('Account Deleted confirmation', 'you can confirm that your account deleted by signing in again');
      // Delete the user's authentication account
      const userCredential = await user.delete();
      console.log('userCredential', userCredential);
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        Alert.alert('Re-authentication Required', 'Please sign in again to delete your account.');
        // Here you should guide the user to re-authenticate
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };
  return (
    <View style={styles.mainView}>
      <SafeAreaView />
      <View style={styles.head}>
        <ProfileImageUploader
          loading={loading}
          onPressCamera={onPressMedia}
          imageAsset={imageAsset}
          url={userData?.userProfileImage}
        />
      </View>

      {/* user information */}
      <View style={styles.container}>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.ProfileAlly />
          </View>
          <AppText style={styles.label} transText={'names'} />

          <AppText style={styles.value}>{userData?.fulltName}</AppText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.MaleIcon />
          </View>
          <AppText style={styles.label} transText={'gender'} />

          <AppText style={styles.value}>{userData?.gender}</AppText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.Age />
          </View>
          <AppText style={styles.label} transText={'age'} />

          <AppText style={styles.value}>{userData?.selectedAge}</AppText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.Kg />
          </View>
          <AppText style={styles.label} transText={'weights'} />

          <AppText style={styles.value}>{userData?.selectedWeight}</AppText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.Height />
          </View>
          <AppText style={styles.label} transText={'height'} />
          <AppText style={styles.value}>{userData?.selectedHeight}</AppText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}>
            <SVG.Level />
          </View>
          <AppText style={styles.label} transText={'level'} />

          <AppText style={styles.value}>{'Beginner'}</AppText>
        </View>
        <View style={styles.infoRow}>
          <AppText onPress={() => logOut()} style={styles.logoutLabel} transText={'logout'} />
          <AppText onPress={() => deleteAccount()} style={styles.deleteAccount} transText={'Delete your Account'} />
        </View>
      </View>
      <BannerAd ref={bannerRef} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} unitId={adUnitId} />
    </View>
  );
};

export default ProfileScreen;
