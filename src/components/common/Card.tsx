import {FlatList, ImageBackground, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from './AppText';
import {SVG} from '../../assets';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';
import {useAppNavigation} from '../../hooks/useAppNavigation';
// import {VideoPlayerModal} from '..';
import firestore from '@react-native-firebase/firestore';
import { useAppStore } from '../../store';

const Card = () => {
  // Hooks
  const navigation = useAppNavigation();
  // Zustand state
  const {favourites, toggleFavourite} = useAppStore();
  // Local state
  // const [modalVisible, setModalVisible] = useState(false);
  const [activitiess, setActivitiess] = useState([]);

  // Functions
  const onPressDescription = (): void => {
    navigation.navigate('MotivatorDescription');
  };

  const handleFavouriteIcon = (item): void => {
    toggleFavourite(item);
  };

  //   Add Documents to Firestore:
  const addActivitiesToFirestore = async () => {
    const batch = firestore().batch(); // Use batch for better performance

    activitiess.forEach(activity => {
      const activityRef = firestore().collection('Activities').doc(activity.id.toString()); // Use the id as the document ID
      batch.set(activityRef, activity);
    });

    try {
      await batch.commit();
      console.log('HomeCartData added successfully!');
    } catch (error) {
      console.error('Error adding HomeCartData: ', error);
    }
  };

  const checkAndAddActivities = async () => {
    try {
      const snapshot = await firestore().collection('Activities').get();
      if (snapshot.empty) {
        // If no documents exist, add the data to Firestore
        await addActivitiesToFirestore();
      } else {
        console.log('Activities already exist in Firestore.');
      }
    } catch (error) {
      console.error('Error checking activities: ', error);
    }
  };

  // Add data to Firestore only if it doesn't already exist
  useEffect(() => {
    checkAndAddActivities();
  }, []);

  // .....................now getting data from firebase ......................
  // Fetch Data from Firestore
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const snapshot = await firestore().collection('Activities').get();
        const activitiesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivitiess(activitiesList);
      } catch (error) {
        console.error('Error fetching activities: ', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <FlatList
      data={activitiess}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        const isFavourite = favourites.some(fav => fav.id === item.id);

        return (
          <TouchableOpacity style={styles.main} onPress={onPressDescription}>
            <ImageBackground source={{uri: item.image}} style={styles.imageBackground}>
              <TouchableOpacity onPress={() => handleFavouriteIcon(item)} style={styles.heart}>
                {isFavourite ? <SVG.Heart /> : <SVG.HeartOutline />}
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.bookmark} onPress={() => setModalVisible(true)}> */}
              <TouchableOpacity style={styles.bookmark} onPress={onPressDescription}>
                <SVG.PlayButton />
              </TouchableOpacity>
              <View style={styles.text}>
                <View>
                  {/* <AppText style={styles.textL}>{t(text)}</AppText> */}
                  {/* <AppText style={styles.textone} transText={item.motivation} /> */}
                  <AppText style={styles.textone}>{item.motivation}</AppText>
                  <AppText style={styles.texttwo}>{item.company}</AppText>
                  <View style={styles.body}>
                    <AppText style={styles.textfour}>{item.body}</AppText>
                  </View>
                </View>
              </View>
              {/* Modal */}
              {/* <VideoPlayerModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                videoUri='https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Videos%2FTom%20and%20Jerry%20gym.mp4?alt=media&token=0fa13e63-bbcc-46af-9ac6-f86730288c39'
                videoPoster='https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg'
              /> */}
            </ImageBackground>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  body: {
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    width: 93,
  },
  bookmark: {
    alignItems: 'center',
    color: COLORS.white,
    marginLeft: 110,
    paddingTop: 11,
    width: '20%',
  },
  heart: {
    alignSelf: 'flex-end',
    paddingTop: 11,
    width: '18%',
  },
  imageBackground: {
    borderRadius: 10,
    borderBottomLeftRadius: 31,
    marginTop: 22,
    overflow: 'hidden',
    height: 248,
    width: 267,
    
  },
  main: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 248,
    marginBottom: 11,
    marginRight: 15,
    overflow: 'hidden',
    width: 267,
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
  textthree: {
    color: COLORS.white,
    fontFamily: FONTS.interLight,
    fontSize: 11,
  },
  textfour: {
    color: COLORS.lightBlackFive,
    fontFamily: FONTS.interLight,
    fontSize: 14,
  },
});
