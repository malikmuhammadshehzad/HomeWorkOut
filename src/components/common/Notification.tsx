import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from './AppText';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';
import {SVG} from '../../assets';
import {notifications} from '../../data';

const Notification = () => {
  return (
    <FlatList
      data={notifications}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.bot}>
            <SVG.Bot />
          </View>
          <View style={styles.container}>
            <View style={styles.mini}>
              <View style={styles.ai}>
                <AppText style={styles.text}>{item.title}</AppText>
                <AppText style={styles.descriptiontext}>{item.description}</AppText>
              </View>
              <View style={styles.dot}>
                <SVG.Dot />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  ai: {
    flex: 1,
    paddingLeft: 10,
  },
  bot: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 29,
    height: 58,
    justifyContent: 'center',
    marginLeft: 17,
    position: 'absolute',
    width: 58,
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#333333',
    flexDirection: 'row',
    height: 81,
    justifyContent: 'center',
    marginLeft: 40,
    paddingLeft: 40,
    width: 300,
  },
  descriptiontext: {
    color: COLORS.white,
    fontFamily: FONTS.interLight,
    fontSize: 14,
    marginTop: 5,
  },
  dot: {
    marginRight: 17,
  },
  list: {
    padding: 10,
  },
  mini: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 18,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Notification;
