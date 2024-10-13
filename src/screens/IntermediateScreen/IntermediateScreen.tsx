import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Intermediate} from '../../data';
import {useAppNavigation} from '../../hooks/useAppNavigation';

export default function IntermediateScreen() {
  const navigation = useAppNavigation();
  return (
    <View style={styles.main}>
      <FlatList
        data={Intermediate}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('WorkOutDetailsScreen', item);
              }}
              style={styles.listStyle}>
              <Image source={item?.image} style={styles.imageStyle} />
              <Text style={styles.titleStyle}>{item?.workOutName}</Text>
              <View style={styles.timeMainStyle}>
                <Text style={styles.timeStyle}>{item?.totalTimes} MINS . </Text>
                <Text style={styles.timeStyle}>{item?.totalExercises} EXERCISE</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
