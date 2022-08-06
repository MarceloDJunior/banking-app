import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
} from 'phosphor-react-native';

import { Drawer3dContainer } from '../components/drawer-3d-container';
import { Cards } from '../screens/cards';
import { Home } from '../screens/home';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { colors } = useTheme();

  const renderIcons = (route: string, focused: boolean) => {
    const color = focused ? colors.primary[500] : colors.gray[300];

    switch (route) {
      case 'Home':
        return <HouseIcon color={color} />;
      case 'Cards':
        return <CardIcon color={color} />;
      default:
        return null;
    }
  };

  return (
    <Drawer3dContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary[500],
          tabBarInactiveTintColor: colors.gray[300],
          tabBarIcon: ({ focused }) => renderIcons(route.name, focused),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cards" component={Cards} />
      </Tab.Navigator>
    </Drawer3dContainer>
  );
};
