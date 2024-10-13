import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {SVG} from '../../assets';
import {COLORS, CustomTheme} from '../../theme';

interface backBtnType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function BackButton(props: backBtnType): JSX.Element {
  /*
   ** Props
   */
  const {fillColor = COLORS.background, viewStyle = {}} = props;
  /*
   ** Hooks
   */
  const navigation = useNavigation();
  const {colors} = useTheme() as CustomTheme;

  return (
    <TouchableOpacity style={[styles.mainViewStyle, viewStyle]} onPress={() => navigation.goBack()}>
      <SVG.BackArrow fill={fillColor || colors.background} />
      {/* <AppIcon icon={'BackIcon'} color={colors.background} /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    backgroundColor: COLORS.whiteTwo,
    borderRadius: 50,
    height: 43,
    justifyContent: 'center',
    marginLeft: 21,
    marginTop: 44,
    width: 43,
  },
});
