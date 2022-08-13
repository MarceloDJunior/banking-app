import { HStack, VStack, Text, useTheme } from 'native-base';

export const Balance = () => {
  const { colors } = useTheme();
  return (
    <HStack
      px={4}
      pt={8}
      pb={6}
      alignItems="center"
      justifyContent="flex-start"
    >
      <VStack>
        <Text fontSize="xs" fontWeight="bold" color={colors.text[500]}>
          Total balance
        </Text>
        <HStack>
          <Text fontSize="3xl" fontWeight="bold" color={colors.text[500]}>
            $2,340.00
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
