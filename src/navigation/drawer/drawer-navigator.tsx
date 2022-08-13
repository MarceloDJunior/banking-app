import { useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useTheme } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
  Gear as SettingsIcon,
} from 'phosphor-react-native';
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
    const props = {
      style: {
        position: 'absolute',
        left: 0,
      } as StyleProp<ViewStyle>,
    };

    switch (route) {
      case 'HomeTabs':
        return <HouseIcon color={colors.white} {...props} />;
      case 'CardsTabs':
        return <CardIcon color={colors.white} {...props} />;
      case 'SettingsTabs':
        return <SettingsIcon color={colors.white} {...props} />;
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
        drawerItemStyle: {
          backgroundColor: colors.primary[600],
          marginLeft: 12,
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
      <Drawer.Screen name="CardsTabs" options={{ title: 'Cards' }}>
        {renderScreen}
      </Drawer.Screen>
      <Drawer.Screen name="SettingsTabs" options={{ title: 'Settings' }}>
        {renderScreen}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
