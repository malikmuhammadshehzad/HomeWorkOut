import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {COLORS, CustomTheme} from '../../../theme';
import {FONTS} from '../../../assets/fonts';
import {AppButton, FooterText} from '../..';
import {useAppNavigation} from '../../../hooks/useAppNavigation';

const OnboardingNextButton = ({scrollTo, item}) => {
  const {colors} = useTheme() as CustomTheme;
  const navigation = useAppNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  /*
   * Functions
   */
  const onPressLogin = async (): Promise<void> => {
    setLoading(true);
    // Simulate an async operation, like API call or navigation delay
    try {
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulated delay
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Navigation error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <AppButton   textStyle={styles.text} title={'getStarted'} onPress={onPressLogin} loading={loading} />
        {/* <FooterText text='account' textone='login' onPress={onPressLogin} /> */}
       
    </View>
  );
};

export default OnboardingNextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,  
    width: '100%',
  },
  description: {
    color: COLORS.lightWhiteTwo,
    fontFamily: FONTS.poppinsRegular,
    fontSize:  14,
    marginBottom: 22,
    marginHorizontal: 30,
    textAlign: 'center',
  },
  skipButton: {
    backgroundColor: COLORS.yellow,
    borderRadius: 10,
    height: 54,
    marginHorizontal: 37,
    marginBottom: 15,
    padding: 15,
    width: 318,
  },
  skipButtonText: {
    color: COLORS.black,
    fontFamily: FONTS.rechargebd,
    textAlign: 'center',
  },
  text: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 16,
    color:COLORS.white,
    paddingVertical:12,
    marginBottom:-7
    
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 25,
    marginVertical: 20,
    textAlign: 'center',
   
  },
});
