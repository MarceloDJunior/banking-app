import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Heading, HStack } from 'native-base';
import { UserCircle as UserIcon } from 'phosphor-react-native';

import { MenuButton } from '../../../components/menu-button';

export const Header = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <HStack px={4} py={3} justifyContent="space-between" alignItems="center">
      <HStack flex={1} justifyContent="flex-start">
        <MenuButton onPress={openDrawer} />
      </HStack>
      <Heading fontSize="lg" flex={1} textAlign="center">
        My Wallet
      </Heading>
      <HStack flex={1} justifyContent="flex-end">
        <UserIcon size={30} />
      </HStack>
    </HStack>
  );
};
