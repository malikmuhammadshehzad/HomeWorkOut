import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    backgroundColor: COLORS.green,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 8,
    marginTop: 30,
  },
});
