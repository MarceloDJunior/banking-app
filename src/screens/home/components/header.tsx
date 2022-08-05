import { Heading, HStack, Button, Box } from 'native-base';
import { UserCircle as UserIcon } from 'phosphor-react-native';

export const Header = () => {
  return (
    <HStack px={4} py={4} justifyContent="space-between" alignItems="center">
      <HStack flex={1} justifyContent="flex-start">
        <Button bg="white" p={0} _pressed={{ bg: 'white' }}>
          <Box bg="gray.600" h={1} w={7} mb={1} rounded={2} />
          <Box bg="gray.600" h={1} w={5} mb={1} rounded={2} />
          <Box bg="gray.600" h={1} w={3} rounded={2} />
        </Button>
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
