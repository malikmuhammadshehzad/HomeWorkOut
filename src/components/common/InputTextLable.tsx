import {StyleSheet, View, TextInput, TouchableOpacity, ViewStyle, KeyboardTypeOptions} from 'react-native';
import React, {useState} from 'react';
import {SVG} from '../../assets';
import {COLORS, WIDTH} from '../../theme';
import AppText from './AppText';
import {TxKeyPath} from '../../i18n/types';

interface inputTextLabelType {
  textLable?: TxKeyPath;
  textInputStyle?: ViewStyle;
  textLabelStyle?: ViewStyle;
  editable?: boolean;
  viewStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  rightIconPress?: () => void;
  leftIconPress?: () => void;
  children?: JSX.Element;
  leftIcon?: boolean;
  rightIcon?: boolean;
  keyType?: KeyboardTypeOptions;
  placeHolder?: string;
  value: string | undefined;
  disableAutoCapitalize?: boolean;
  isPassword?: boolean;
}

export default function InputTextLabel(props: inputTextLabelType): JSX.Element {
  /*
   ** Props
   */
  const {
    textLable,
    textInputStyle = {},
    textLabelStyle = {},
    editable = true,
    viewStyle = {},
    onChangeText,
    rightIconPress,
    leftIconPress,
    children,
    leftIcon = false,
    rightIcon = false,
    keyType = 'default',
    placeHolder = '',
    value = '',
    disableAutoCapitalize = false,
    isPassword = false,
  } = props;
  /*
   ** States
   */
  const [passSecure, setPassSecure] = useState<boolean>(true);
  /*
   ** Hooks
   */

  return (
    <View style={[styles.mainContStyle, viewStyle]}>
      <AppText transText={textLable} presetStyle={'textInputHeading'} style={textLabelStyle} />

      <View style={[styles.inputStyle2, textInputStyle]}>
        {leftIcon ? (
          <TouchableOpacity style={styles.leftButtonStyle} onPress={leftIconPress}>
            {Array.isArray(children) ? children[0] : children}
          </TouchableOpacity>
        ) : null}
        <TextInput
          style={styles.textInput2}
          editable={editable}
          secureTextEntry={isPassword ? passSecure : false}
          keyboardType={keyType}
          placeholderTextColor={COLORS.whiteTwo}
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={disableAutoCapitalize ? 'none' : 'sentences'}
          autoCorrect={false}
        />
        {isPassword && (
          <TouchableOpacity style={styles.rightButtonStyle} onPress={() => setPassSecure(!passSecure)}>
            {passSecure ? <SVG.EyeOffIcon fill={COLORS.whiteTwo} /> : <SVG.EyeOnIcon fill={COLORS.whiteTwo} />}
          </TouchableOpacity>
        )}
        {rightIcon && !isPassword ? (
          <TouchableOpacity style={styles.rightButtonStyle} onPress={rightIconPress}>
            {Array.isArray(children) ? children[1] : children}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle2: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 0.5,
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
    width: 318,
  },
  leftButtonStyle: {
    marginLeft: 11,
  },
  mainContStyle: {
    alignSelf: 'center',
    color: COLORS.whiteTwo,
    height: 60,
    marginBottom: 30,
    width: 318,
  },

  rightButtonStyle: {
    alignItems: 'flex-end',
    color: COLORS.whiteTwo,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    width: 50,
  },

  textInput2: {
    color: COLORS.black,
    height: 60,
    paddingLeft: 20,
    width: 318,
  },
});
