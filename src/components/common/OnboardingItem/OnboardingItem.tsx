import {Image, StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../../theme';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width}]} />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlack,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginBottom: -190,
  },
});
