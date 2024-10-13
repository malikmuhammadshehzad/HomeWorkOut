import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {TabScreens} from '../data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabNavigatorParamList, tabBarIconType} from './types.navigation';
import {COLORS, CustomTheme, Globaltypography} from '../theme';
import {useTheme} from '@react-navigation/native';
import TabButton from '../components/common/TabButton';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

// function for tab bar icon redering
const TabBarIconFunc = ({color, size, item}: tabBarIconType) => {
  return <item.tabBarIcon fill={color} width={size} heigth={size} />;
};

const BottomTab = (): JSX.Element => {
  /*
   ** Hooks
   */
  const insets = useSafeAreaInsets();
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={styles.main}>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: colors.yellow,
          // tabBarInactiveTintColor: colors.palette.secondary100,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              height: insets.bottom + 75,
              backgroundColor: colors.white,
              borderTopColor:COLORS.lightBlackThree,
              paddingTop: 17,
              paddingBottom: 9,
            },
          ],

          // tabBarItemStyle: $tabBarItem,
        }}>
        {TabScreens.map((item, index) => (
          <Tab.Screen
            key={`index-${index}`}
            name={item.name as keyof BottomTabNavigatorParamList}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton Item={item} {...props} />,
              // tabBarLabel: item.tabBarLabel,
              // tabBarLabelStyle: styles.label,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...Globaltypography.formLabel,
  },
  tabBarStyle: {
    shadowColor: COLORS.palette.black,
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  main: {
    backgroundColor: COLORS.lightBlackFive,
    flex: 1,
  },
});


export default BottomTab;
