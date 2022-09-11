import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStickyScrollContext } from '../../contexts/sticky-scroll-context';
import { Cards } from '../../screens/cards';
import { Home } from '../../screens/home';
import { BottomTabsRoutes } from '../routes/bottom-tabs-routes';

import { TabBar } from './components/tab-bar';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { isStickyEnabled } = useStickyScrollContext();

  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <TabBar {...props} />,
    []
  );

  return (
    <Tab.Navigator
      initialRouteName={BottomTabsRoutes.Home}
      tabBar={renderTabBar}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}
      sceneContainerStyle={{
        backgroundColor: colors.secondary[500],
        paddingBottom: isStickyEnabled ? bottom : 60 + bottom,
      }}
    >
      <Tab.Screen name={BottomTabsRoutes.Cards} component={Cards} />
      <Tab.Screen
        name={BottomTabsRoutes.Home}
        component={Home}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name={BottomTabsRoutes.Settings} component={Home} />
    </Tab.Navigator>
  );
};
