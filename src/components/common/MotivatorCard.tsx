// MotivatorCard.tsx
import React from 'react';
import { View, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '../../hooks/useAppNavigation';

interface MotivatorCardProps {
  imageSource: any; // Replace 'any' with the appropriate type if possible
  motivatorImageSource: any;
  name: string;
  role: string;
  detail: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  cardStyle?: ViewStyle;
  nameStyle?: TextStyle;
  roleStyle?: TextStyle;
  detailStyle?: TextStyle;
}

const MotivatorCard: React.FC<MotivatorCardProps> = ({
  imageSource,
  motivatorImageSource,
  name,
  role,
  detail,
  containerStyle,
  imageStyle,
  cardStyle,
  nameStyle,
  roleStyle,
  detailStyle,
}) => {

  // Hooks
  const {t} = useTranslation()
  const navigation = useAppNavigation();
  // function
  const onPressDescription = (): void => {
    navigation.navigate('MotivatorDescription');
  };

  return (
    <View style={[styles.motivatorsContainer, containerStyle]}>
      <Image source={imageSource} style={[styles.motivatorImage, imageStyle]} />
      <View style={[styles.motivatorCard, cardStyle]}>
        <Image source={motivatorImageSource} style={styles.image} />
        <View style={styles.name}>
          {/* <AppText style={[styles.motivatorName, nameStyle]} transText={name} /> */}
          <AppText style={[styles.motivatorName, nameStyle]}>{t(name)}</AppText>
          {/* <AppText style={[styles.motivatorRole, roleStyle]} transText={role} /> */}
          <AppText style={[styles.motivatorRole, roleStyle]}>{t(role)}</AppText>
        </View>
      </View>
      <TouchableOpacity style={[styles.detail, detailStyle]} onPress={onPressDescription}>
        {/* <AppText style={styles.text} transText={detail} /> */}
        <AppText style={styles.text}>{t(detail)}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    alignItems: 'center',
    bottom: 7,
    backgroundColor: COLORS.lightBlackThree,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    left: 9,
    position: 'absolute',
    width: 153,
  },
  image: {
    height: 44,
    width: 44,
  },
  motivatorsContainer: {
    marginRight: 11,
  },
  motivatorImage: {
    borderRadius: 10,
    borderWidth: 1,
    borderTopLeftRadius: 20, // Adjust the value as needed
    borderTopRightRadius: 20, 
    height: 219,
    overflow: 'hidden', 
    width: 173,
  },
  motivatorCard: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightBlackThree,
    backgroundColor: COLORS.lightBlackThree,
    flexDirection: 'row',
    height: 60,
    left: 10,
    position: 'absolute',
    paddingLeft: 11,
    top: 20,
    width: 153,
  },
  name: {
    marginLeft: 11,
  },
  motivatorName: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 10,
    marginVertical: 8,
  },
  motivatorRole: {
    color: COLORS.yellow,
    fontFamily: FONTS.interRegular,
    fontSize: 10,
  },
  text: {
    color: COLORS.yellow,
    fontFamily: FONTS.rechargebd,
    fontSize: 10,
  },
});

export default MotivatorCard;
