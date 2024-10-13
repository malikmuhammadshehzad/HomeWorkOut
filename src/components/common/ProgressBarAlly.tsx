import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  height?: number;
  inactiveColor?: string;
  activeColor?: string;
}

const ProgressBarAlly: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  height = 2,
  inactiveColor = COLORS.lightBlackTwo,
  activeColor = COLORS.yellow,
}) => {
  // Calculate width for each step
  const stepWidth = 100 / totalSteps;

  return (
    <View style={[styles.container, { height }]}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            {
              width: `${stepWidth}%`,
              backgroundColor: index + 1 === currentStep ? activeColor : inactiveColor,
            },
          ]}
        />
      ))}
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>
          <Text style={{ color: activeColor }}>Step {currentStep}</Text>/{totalSteps}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 37,
    marginBottom: 83,
    marginTop: 27,
  },
  step: {
    height: '100%',
  },
  stepContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    paddingTop: 45,
    position: 'absolute',
    right: 0,
  },
  stepText: {
    color: COLORS.white,
    fontFamily: FONTS.QuicksandMedium,
    fontSize: 16,
  },
});

export default ProgressBarAlly;
