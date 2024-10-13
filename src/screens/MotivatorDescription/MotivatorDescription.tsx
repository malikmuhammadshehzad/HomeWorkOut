import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { AppText, BackButton, VideoPlayerModal, VideosCard } from "../../components";
import { IMAGES, SVG } from "../../assets";
import styles from "./styles";
 

export default function MotivatorDescription(): JSX.Element {

  // State 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
        <ImageBackground
        source={IMAGES.ImageFour}
        style={styles.image} 
        >
        <BackButton />
        <TouchableOpacity style={styles.icon} onPress={() => setModalVisible(true)}>
        <SVG.PlayButton/>
        </TouchableOpacity>
      </ImageBackground>

      {/* // Modal */}
      <VideoPlayerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          videoUri='https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Videos%2FTom%20and%20Jerry%20gym.mp4?alt=media&token=0fa13e63-bbcc-46af-9ac6-f86730288c39'
          videoPoster='https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg'
        />
      
      <View style={styles.miniContainer}>
      <AppText style={styles.text} transText={'description'}/>
      <AppText style={styles.descriptiontext} transText={'descriptiontext'}/>
      <View style={styles.videoCard}>
      <VideosCard
      imageSource={IMAGES.ImageSix}
      onPress={() => console.log('Card Pressed')}
      text={'lunge'}
       />
      <VideosCard
      imageSource={IMAGES.ImageSeven}
      onPress={() => console.log('Card Pressed')}
      text={'lunge'}
       />
     </View>
      <View style={styles.videoCard}>
      <VideosCard
      imageSource={IMAGES.ImageSix}
      onPress={() => console.log('Card Pressed')}
      text={'lunge'}
       />
      <VideosCard
      imageSource={IMAGES.ImageSeven}
      onPress={() => console.log('Card Pressed')}
      text={'lunge'}
       />
     </View>
      </View>
    </View>
  )
}
