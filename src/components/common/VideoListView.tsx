import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import VideosCard from './VideosCard';
import {videoData} from '../../data';
import firestore from '@react-native-firebase/firestore';

const VideoListView = () => {
  // Step 1: Add videoData to Firestore
  const addVideoDataToFirestore = async () => {
    const batch = firestore().batch(); // Use batch for better performance

    videoData.forEach(video => {
      const videoRef = firestore().collection('Videos').doc(video.id.toString()); // Use the id as the document ID
      batch.set(videoRef, video);
    });

    try {
      await batch.commit();
      console.log('VideoData added successfully!');
    } catch (error) {
      console.error('Error adding VideoData: ', error);
    }
  };

  const checkAndAddVideoData = async () => {
    try {
      const snapshot = await firestore().collection('Videos').get();
      if (snapshot.empty) {
        // If no documents exist, add the data to Firestore
        await addVideoDataToFirestore();
      } else {
        console.log('VideoData already exists in Firestore.');
      }
    } catch (error) {
      console.error('Error checking VideoData: ', error);
    }
  };

  // Add video data to Firestore only if it doesn't already exist
  useEffect(() => {
    checkAndAddVideoData();
  }, []);

  // Step 2: Fetch videoData from Firestore
  // // State
  const [videos, setVideos] = useState([]);

  // Fetch Data from Firestore
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const snapshot = await firestore().collection('Videos').get();
        // console.log("🚀 ~ fetchVideoData ~ snapshot:", snapshot.docs)
        const videoList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('videoList', videoList);

        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching VideoData: ', error);
      }
    };

    fetchVideoData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <VideosCard
        imageSource={{uri: String(item.imageSource)}}
        text={item.text}
        onPress={() => console.log('Video pressed!')}
      />
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Show 2 items in a row
        style={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 139,
    overflow: 'hidden',
  },
  listContainer: {
    flex: 1,
  },
  scrollView: {
    maxHeight: '95%',
    marginLeft: 22,
  },
});

export default VideoListView;
