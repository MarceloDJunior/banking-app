import { HStack, VStack, Text } from 'native-base';

export const Balance = () => {
  return (
    <HStack
      px={4}
      pt={8}
      pb={6}
      alignItems="center"
      justifyContent="flex-start"
    >
      <VStack>
        <Text fontSize="xs">Total balance</Text>
        <HStack>
          <Text fontSize="3xl" fontWeight="bold">
            $2,340.00
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
