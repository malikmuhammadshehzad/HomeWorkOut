import {ActivityIndicator, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SVG} from '../../assets';
import {imageObjectType} from '../../screens/SignupScreen/types';
import {COLORS, WIDTH} from '../../theme';

export default function ProfileImageUploader(props: ProfileImageUploaderType): JSX.Element {
  // destructring props
  const {loading, onPressCamera, imageAsset = null, url = null} = props;
  console.log('image asset is', imageAsset);
  return (
    <View style={styles.imageViewStyle}>
      {url ? <Image source={{uri: url}} style={styles.profileImageStyle} resizeMode={'cover'} /> : imageAsset ? (
        <Image source={{uri: imageAsset?.uri}} style={styles.profileImageStyle} resizeMode={'cover'} />
      ) : (
        <SVG.profilefillicon width={WIDTH * 0.15} height={WIDTH * 0.15} fill={COLORS.palette.secondary400} />
      )}
      <TouchableOpacity style={styles.IconMainViewStyle} onPress={onPressCamera}>
        {loading ? (
          <ActivityIndicator size={'small'} color={COLORS.loaderPrimary} />
        ) : (
          <SVG.CameraIcon width={WIDTH * 0.06} height={WIDTH * 0.06} fill={COLORS.palette.secondary400} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  IconMainViewStyle: {
    alignItems: 'center',
    backgroundColor: COLORS.palette.overlay100,
    borderRadius: 17,
    height: 35,
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: -15,
    width: 35,
  },
  imageViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.palette.overlay100,
    borderRadius: 100,
    height: WIDTH * 0.3,
    justifyContent: 'center',
    padding: 10,
    width: WIDTH * 0.3,
  },

  profileImageStyle: {
    borderRadius: 100,
    height: WIDTH * 0.3,
    width: WIDTH * 0.3,
  },
});

interface ProfileImageUploaderType {
  loading: boolean;
  onPressCamera: () => void;
  imageAsset: null | imageObjectType;
  url?: string | null
}
