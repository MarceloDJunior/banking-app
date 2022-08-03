import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/home';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cards" component={Home} />
    </Tab.Navigator>
  );
};
