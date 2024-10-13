import { FlatList, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AppText from './AppText';
import { HomeCartData } from '../../data';
import { SVG } from '../../assets';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';
import { VideoPlayerModal } from '..';
import { useAppStore } from '../../store'; // Import Zustand store for favorites

const CardList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Access favorites and toggleFavourite from Zustand store
  const { favourites, toggleFavourite } = useAppStore();

  const handleFavouriteIcon = (item: any): void => {
    toggleFavourite(item); // Toggle favorite in Zustand store
  };

  return (
    <FlatList
      data={HomeCartData}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      renderItem={({ item }) => {
        const isFavourite = favourites.some(fav => fav.id === item.id); // Check if item is in favorites

        return (
          <View style={styles.main}>
            <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
              {/* Favorite Icon */}
              <TouchableOpacity onPress={() => handleFavouriteIcon(item)} style={styles.heart}>
                {isFavourite ? <SVG.Heart /> : <SVG.HeartOutline />}
              </TouchableOpacity>
              {/* Play Button */}
              <TouchableOpacity style={styles.bookmark} onPress={() => setModalVisible(true)}>
                <SVG.PlayButton />
              </TouchableOpacity>
              {/* Text Content */}
              <View style={styles.text}>
                <View>
                  <AppText style={styles.textone}>{item.motivation}</AppText>
                  <AppText style={styles.texttwo}>{item.company}</AppText>
                  <View style={styles.body}>
                    <AppText style={styles.textfour}>{item.body}</AppText>
                  </View>
                </View>
              </View>
            </ImageBackground>
            {/* Video Player Modal */}
            <VideoPlayerModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              videoUri='https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Videos%2FTom%20and%20Jerry%20gym.mp4?alt=media&token=0fa13e63-bbcc-46af-9ac6-f86730288c39'
              videoPoster='https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg'
            />
          </View>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
  },
  bookmark: {
    alignItems: 'center',
    color: COLORS.white,
    paddingTop: 11,
  },
  heart: {
    alignItems: 'flex-end',
    paddingTop: 13,
    paddingRight: 17,
  },
  imageBackground: {
    borderRadius: 10,
    borderBottomLeftRadius: 31,
    height: 248,
    marginTop: 22,
    overflow: 'hidden',
    width: 358,
  },
  main: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 248,
    overflow: 'hidden',
    marginLeft: 17,
    width: 358,
  },
  scrollView: {
    maxHeight: '75%',
  },
  text: {
    flexDirection: 'row',
    paddingLeft: 11,
  },
  textone: {
    color: COLORS.white,
    fontFamily: FONTS.rechargebd,
    fontSize: 14,
    paddingTop: 40,
  },
  texttwo: {
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
    fontSize: 14,
    marginVertical: 5,
  },
  textfour: {
    color: COLORS.lightBlackFive,
    fontFamily: FONTS.interLight,
    fontSize: 14,
  },
});
