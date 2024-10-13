import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList, HomeStackParamList} from '../routes/types.navigation';

/*
 ** We are buildong our own custome navigation function by  merging both stack params list
 */

 // `T` will be our parameter type, and by default, it will be a combination of AuthStackParamList and HomeStackParamList.

export function useAppNavigation<T extends ParamListBase = AuthStackParamList & HomeStackParamList>() {
  // `T` is the combined parameter list type. This essentially allows us to use navigation in our component with the correct types.
  const navigation = useNavigation<NativeStackNavigationProp<T>>();

  return navigation;
}
