import {StyleSheet} from 'react-native';
import { COLORS } from '../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    alignItems: 'center',
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 11,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
});
