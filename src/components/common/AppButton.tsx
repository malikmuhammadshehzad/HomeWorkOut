import React from 'react';
import {ActivityIndicator, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors, WIDTH, CustomTheme, COLORS} from '../../theme';
import {TxKeyPath} from '../../i18n/types';
import AppText from './AppText';
import {SVG} from '../../assets';

interface appBtnType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function AppButton(props: appBtnType): JSX.Element {
  /** Props */
  const {fillColor = COLORS.whiteTwo, viewStyle = {}} = props;

  /*
   ** Props
   */
  const {
    title = '',
    onPress,
    disabled = false,
    loading = false,
    loadingColor,
    btnStyle = {},
    textStyle = {},
    activeOpacity = 0.8,
    RightChild = null,
    leftChild = null,
    smallBtn = false,
  } = props;

  /*
   ** Hooks
   */
  const {colors} = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[styles.defaultBtnStyle, smallBtn ? $smallBtnStyle(colors) : $largeBtnStyle(colors), btnStyle]}>
      {leftChild && <View style={styles.leftChildStyle}>{leftChild}</View>}
      <View style={styles.centerContainer}>
        {title && (
          <AppText
            style={textStyle}
            numberOfLines={1}
            presetStyle={'button'}
            transText={title}
            textColor={colors.black}
          />
        )}
        {loading && (
          <ActivityIndicator color={loadingColor || colors.background} style={styles.loading} size={'small'} />
        )}
      </View>
      <View style={styles.rightContainer}>
        {RightChild && <View style={styles.rightChildStyle}>{RightChild}</View>}
        {/* <SVG.Forward fill={fillColor || colors.background} style={styles.svg}/> */}
      </View>
    </TouchableOpacity>
  );
}

/*
 ** This style approach is used for dynamic styles
 */
const $largeBtnStyle = (colors: Colors): ViewStyle => {
  return {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    width: 318,
  };
};

const $smallBtnStyle = (colors: Colors): ViewStyle => {
  return {
    backgroundColor: colors.button,
    borderColor: colors.buttonBorder,
    width: 318,
  };
};

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  defaultBtnStyle: {
    alignItems: 'center',
    backgroundColor: COLORS.button,
    borderColor: COLORS.buttonBorder,
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'center',
    marginTop: 25,
    alignSelf: 'center',
    position: 'relative',
    width: 318,
  },
  leftChildStyle: {
    marginLeft: 15,
  },
  loading: {
    marginLeft: 10,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
  },
  rightChildStyle: {
    marginRight: 10,
  },
  svg: {
    marginLeft: 10,
  },
});

interface appBtnType {
  title: TxKeyPath;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeOpacity?: number;
  RightChild?: JSX.Element | null;
  leftChild?: JSX.Element | null;
  smallBtn?: boolean;
}
