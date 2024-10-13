import {StyleSheet} from 'react-native';
import { COLORS } from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 17,
    marginVertical: 20,
  },
  separator: {
    backgroundColor: COLORS.whiteTwo,
    flex: 1,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 17,
  },
  text: {
    color: COLORS.whiteTwo,
    marginHorizontal: 8,
  },
});
