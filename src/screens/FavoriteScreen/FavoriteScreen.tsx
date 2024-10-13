import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {AppText, BackButton, VideoPlayerModal} from '../../components'; // Ensure VideoPlayerModal is imported
import {SVG} from '../../assets';
import styles from './style';
import {useAppStore} from '../../store'; // Import Zustand store for favorites
import {HomeCartData} from '../../data';

export default function FavoriteScreen(): JSX.Element {
  const {favourites, toggleFavourite} = useAppStore(); // Get the list of favourites and toggle function from the store
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{uri: string; poster: string} | null>(null);

  const handleFavouriteIcon = (item: any): void => {
    toggleFavourite(item); // Toggle favorite in Zustand store
  };

  const handlePlayButtonPress = (videoUri: string, videoPoster: string): void => {
    setSelectedVideo({uri: videoUri, poster: videoPoster});
    setModalVisible(true);
  };

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        {/* <BackButton /> */}
        <AppText style={styles.textAI} transText={'favorite'} />
      </View>
      {/* Display the list of favorite items */}
      <FlatList
        data={HomeCartData}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        renderItem={({item}) => (
          <View style={styles.mains}>
            <ImageBackground source={{uri: item?.image}} style={styles.imageBackground}>
              {/* Favorite Icon */}
              <TouchableOpacity onPress={() => handleFavouriteIcon(item)} style={styles.heart}>
                {HomeCartData?.some(fav => fav?.id === item?.id) ? <SVG.Heart /> : <SVG.HeartOutline />}
              </TouchableOpacity>
              {/* Play Button */}
              <TouchableOpacity
                style={styles.bookmark}
                onPress={() =>
                  handlePlayButtonPress(
                    'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Videos%2FTom%20and%20Jerry%20gym.mp4?alt=media&token=0fa13e63-bbcc-46af-9ac6-f86730288c39', // Replace with item-specific video URI if needed
                    'https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg', // Replace with item-specific poster URI if needed
                  )
                }>
                <SVG.PlayButton />
              </TouchableOpacity>
              {/* Text Content */}
              {/* <View style={styles.text}>
                <AppText style={styles.textone}>{item.motivation}</AppText>
                <AppText style={styles.texttwo}>{item.company}</AppText>
                <View style={styles.body}>
                  <AppText style={styles.textfour}>{item.body}</AppText>
                </View>
              </View> */}
            </ImageBackground>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          videoUri={selectedVideo.uri}
          videoPoster={selectedVideo.poster}
        />
      )}
    </View>
  );
}
