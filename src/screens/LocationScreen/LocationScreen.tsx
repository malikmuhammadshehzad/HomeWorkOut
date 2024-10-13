import React, { useState } from "react";
import { ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import { IMAGES, SVG } from "../../assets";
import styles from './style';
import { AppButton, BackButton } from "../../components";
import { COLORS } from "../../theme";
import { useTranslation } from "react-i18next";

export default function LocationScreen(): JSX.Element {
    // States
  const [search, setSearch] = useState<string>('');
  // Hooks
  const {t} = useTranslation()

  return (
    <ImageBackground source={IMAGES.Location} imageStyle={{opacity:0.9}} style={styles.imageBackground}>
      <View style={styles.main}>
        <BackButton/>

        <TouchableOpacity style={styles.tacker}>
            <SVG.Tracker/>
        </TouchableOpacity>
        
        <View style={styles.search}>
        <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.icon}>
        <SVG.Search/>
        </TouchableOpacity>
        <View style={styles.input}>
        <TextInput style={styles.searchInput} placeholderTextColor={COLORS.whiteTwo} placeholder={t('searchText')}  onChangeText={setSearch} value={search}/>
        </View>
        <TouchableOpacity>
        <SVG.LocationIcon/>
        </TouchableOpacity>
      </View>

      {/* Main Button */}
    
      <AppButton
            btnStyle={styles.button}
            textStyle={styles.text}
            title={'confirm'}
          />
      </View>

      </View>
    </ImageBackground>
  )
}
