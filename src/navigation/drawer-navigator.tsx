import { useCallback } from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useTheme } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
} from 'phosphor-react-native';

import { DrawerContent } from '../components/drawer-content';

import { TabNavigator } from './tab-navigator';

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
      case 'Home':
        return <HouseIcon color={colors.white} />;
      case 'Cards':
        return <CardIcon color={colors.white} />;
      default:
        return null;
    }
  };

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
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Cards" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
