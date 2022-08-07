import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useCallback } from 'react';

import { Cards } from '../../screens/cards';
import { Home } from '../../screens/home';

import { TabBar } from './components/tab-bar';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <TabBar {...props} />,
    []
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={renderTabBar}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}
      sceneContainerStyle={{
        paddingBottom: 60,
      }}
    >
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
