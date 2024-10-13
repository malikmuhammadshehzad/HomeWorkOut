import { View, Animated, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../../../theme';
import { SVG } from '../../../assets';

const OnboardingPaginator = ({ data, scrollX, scrollTo, scrollBack }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={scrollBack}>
        <SVG.LeftArrow style={styles.arrow} />
         
        </TouchableOpacity>
      <View style={styles.container}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 40, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [10, 40, 10],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.black, COLORS.yellow, COLORS.black],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth, opacity, backgroundColor }]}
              key={i.toString()}
            />
          );
        })}
      </View>
      <TouchableOpacity onPress={scrollTo}>
        <SVG.RightArrow style={styles.arrow} />
        </TouchableOpacity>
    </View>
  );
};

export default OnboardingPaginator;

const styles = StyleSheet.create({
  arrow: {
    paddingHorizontal: 10,
    color:COLORS.black
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64,
    paddingBottom: 27,
  },
  dot: {
    backgroundColor: COLORS.yellow,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 8,
    marginTop: 30,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
