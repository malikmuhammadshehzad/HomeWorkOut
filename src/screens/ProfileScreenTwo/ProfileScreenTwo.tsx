import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AlertLogoutModal, AppText, BackButton} from '../../components';
import styles from './styles';
import {SVG} from '../../assets';
// import {signOut} from '../../store/authSlice/authApiService';
import {useAppStore} from '../../store';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const Separator = () => <View style={styles.separator} />;

export default function ProfileScreenTwo(): JSX.Element {
  /*
   ** Hooks
   */
  const userData = useAppStore(state => state.userData);
  // const userTokens = useAppStore(state => state.tokens);
  const navigation = useAppNavigation();
  /*
   ** States
   */
  // const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const imageSource = userData?.userProfileImage ? {uri: userData.userProfileImage} : null;
  /*
   ** Functions
   */
  // const userSignOut = async () => {
  //   try {
  //     setLoading(true);
  //     await signOut();
  //     setLoading(false);
  //   } catch (error) {
  //     console.log('🚀 ~ signOut ~ error:', error);
  //     setLoading(false);
  //   }
  // };

  const onPressTermsAndConditions = (): void => {
    navigation.navigate('TermsAndConditions');
  };

  const onPressPrivacyPolicy = (): void => {
    navigation.navigate('PrivacyPolicy');
  };

  const onPressContactUs = (): void => {
    navigation.navigate('ContactUs');
  };

  return (
    <View style={styles.main}>
      <BackButton />
      <View style={styles.icon}>
        <TouchableOpacity>
          {imageSource ? (
            <Image source={imageSource} style={styles.profileImage} />
          ) : (
            <SVG.ProfileIcon style={styles.profileImageIcon} /> // Use your SVG component and style accordingly
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <AppText style={styles.name}>{userData?.fulltName}</AppText>
        <AppText style={styles.email}>{userData?.emailAddress}</AppText>
      </View>
      <Separator />
      <View style={styles.container}>
        <TouchableOpacity style={styles.terms} onPress={onPressTermsAndConditions}>
          <View style={styles.icons}>
            <SVG.Terms />
          </View>
          <AppText style={styles.label} transText={'terms'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.terms} onPress={onPressPrivacyPolicy}>
          <View style={styles.icons}>
            <SVG.Privacy />
          </View>
          <AppText style={styles.label} transText={'privacy'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.terms} onPress={onPressContactUs}>
          <View style={styles.icons}>
            <SVG.ProfileIcon />
          </View>
          <AppText style={styles.label} transText={'contactus'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            setVisible(!visible);
          }}>
          <View style={styles.icons}>
            <SVG.Logout />
          </View>
          <AppText style={styles.label} transText={'logout'} />
        </TouchableOpacity>
      </View>
      <AlertLogoutModal visible={visible} setVisible={setVisible} />
    </View>
  );
}
