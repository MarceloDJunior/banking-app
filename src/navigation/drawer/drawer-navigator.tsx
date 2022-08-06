import { useCallback } from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useTheme } from 'native-base';
import { House as HouseIcon } from 'phosphor-react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import { TabNavigator } from '../bottom-tabs/bottom-tabs-navigator';

import { DrawerContent } from './components/drawer-content';
import { Drawer3dContainer } from './components/drawer-3d-container';

type DrawerNavigatorProps = {
  route: RouteProp<ParamListBase, any>;
  navigation: any;
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { colors } = useTheme();
  const renderDrawerContent = useCallback(
    (props: DrawerContentComponentProps) => {
      return <DrawerContent {...props} />;
    },
    []
  );

  const renderIcons = (route: string) => {
    switch (route) {
      case 'HomeTabs':
        return <HouseIcon color={colors.white} />;
      default:
        return null;
    }
  };

  const renderScreen = useCallback((props: DrawerNavigatorProps) => {
    return (
      <Drawer3dContainer {...props}>
        <TabNavigator />
      </Drawer3dContainer>
    );
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      screenOptions={({ route }) => ({
        headerShown: false,
        sceneContainerStyle: {
          backgroundColor: colors.primary[600],
        },
        drawerStyle: {
          width: '50%',
          paddingHorizontal: 8,
          backgroundColor: colors.primary[600],
        },
        overlayColor: 'transparent',
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
        drawerIcon: () => renderIcons(route.name),
        swipeEnabled: false,
      })}
    >
      <Drawer.Screen name="HomeTabs" options={{ title: 'Home' }}>
        {renderScreen}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
