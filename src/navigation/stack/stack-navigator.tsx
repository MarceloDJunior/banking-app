import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'native-base';

import { Transactions as TransactionsScreen } from '../../screens/transactions';
import { TabNavigator } from '../bottom-tabs/bottom-tabs-navigator';
import { Drawer3dContainer } from '../drawer/components/drawer-3d-container';
import { StackParamList, StackRoutes } from '../routes/stack-routes';

const Stack = createStackNavigator<StackParamList>();

const HomeTabs = () => (
  <Drawer3dContainer>
    <TabNavigator />
  </Drawer3dContainer>
);

export const StackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.primary[600] },
      }}
    >
      <Stack.Screen name={StackRoutes.HomeTabs} component={HomeTabs} />
      <Stack.Screen
        name={StackRoutes.Transactions}
        component={TransactionsScreen}
      />
    </Stack.Navigator>
  );
};
