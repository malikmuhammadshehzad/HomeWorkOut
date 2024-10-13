import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBarAllyOne = ({ currentStep, totalSteps }) => {
  const progressWidth = (currentStep / totalSteps) * 100 + '%';

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: progressWidth }]} />
      <View style={styles.remainingBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    height: 4,
    marginBottom: 20,
    width: '100%',
  },
  progressBar: {
    backgroundColor: 'yellow',
    height: '100%',
  },
  remainingBar: {
    backgroundColor: 'gray',
    flex: 1,
    height: '100%',
  },
});

export default ProgressBarAllyOne;
