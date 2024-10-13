import {useEffect, useRef} from 'react';
import {StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
 
import { COLORS } from '../../theme';
// import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({Item, accessibilityState, onPress}) => {
  console.debug('item', Item);
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const {translate, scale} = animatedValues;

  useEffect(() => {
    handleAnimated();
  }, [accessibilityState.selected]);

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Animated.View style={[styles.button, translateStyles]}>
        <Animated.View
          style={[
            {
              width: 70,
              height: 70,
              borderRadius: 11,
              position: 'absolute',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#000',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            },
            scaleStyles,
          ]}
        />
        {accessibilityState.selected ? <Item.tabBarActiveIcon size={30} /> : <Item.tabBarIcon size={30} />}
        {/* <Text style={{color:accessibilityState.selected? 'yellow': 'white' }}>{Item.tabBarLabel}</Text> */}
        <Animated.Text style={[styles.title, {color: accessibilityState.selected ? COLORS.yellow : COLORS.lightWhiteTwo}]}>
          {Item.tabBarLabel}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    alignSelf: 'stretch',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 20,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    position: 'absolute',
    bottom: 15,
  },
});
