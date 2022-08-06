import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigator } from './drawer-navigator';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
