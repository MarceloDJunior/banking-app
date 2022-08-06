import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
  Gear as SettingsIcon,
} from 'phosphor-react-native';

import { Cards } from '../../screens/cards';
import { Home } from '../../screens/home';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { colors } = useTheme();

  const renderIcons = (route: string, focused: boolean) => {
    const color = focused ? colors.primary[500] : colors.gray[300];

    switch (route) {
      case 'Cards':
        return <CardIcon color={color} />;
      case 'Home':
        return <HouseIcon color={color} />;
      case 'Settings':
        return <SettingsIcon color={color} />;
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarIcon: ({ focused }) => renderIcons(route.name, focused),
      })}
    >
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
