import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';
import AppText from './AppText';
import { useTranslation } from 'react-i18next';

const ProgressBar = ({currentIndex, setCurrentIndex}) => {
  // hook
  const {t} = useTranslation()

  const handleDotPress = index => {
    setCurrentIndex(index); // update parent state
  };

  const renderDots = () => {
    return Array.from({length: 7}).map((_, index) => (
      <React.Fragment key={index}>
        {index > 0 && <View style={[styles.line, index <= currentIndex ? styles.activeLine : styles.inactiveLine]} />}
        <TouchableOpacity
          style={[styles.dot, index <= currentIndex ? styles.activeDot : styles.inactiveDot]}
          onPress={() => handleDotPress(index)}
        />
      </React.Fragment>
    ));
  };

  return (
    <View>
      <View>
        <View style={styles.container}>
          {/* <Text style={styles.textWork}>{`${currentIndex + 1} Times / Week`}</Text> */}
          {/* <AppText style={styles.textWork}>{t('{{count}} Times', {count: currentIndex + 1})}</AppText> */}
          <AppText style={styles.textWork}>{`${currentIndex + 1}`} {t('Times')}</AppText>

          <View style={styles.progressBar}>{renderDots()}</View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: COLORS.yellow,
  },
  activeLine: {
    backgroundColor: COLORS.yellow,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 11,
    padding: 20,
  },
  dot: {
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  heading: {
    marginBottom: 10,
  },
  inactiveDot: {
    backgroundColor: COLORS.white,
  },
  inactiveLine: {
    backgroundColor: COLORS.white,
  },
  line: {
    flex: 1,
    height: 2,
  },
  progressBar: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textWork: {
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProgressBar;
