import { AspectRatio, Heading, HStack, Text, VStack } from 'native-base';

type CardProps = {
  type: number;
  number: string;
  name: string;
  expiry: string;
};

const getColors = (type: number): string[] => {
  switch (type) {
    case 1:
      return ['lightBlue.300', 'violet.800'];
    case 2:
      return ['red.400', 'cyan.600'];
    case 3:
      return ['purple.400', 'orange.400'];
    case 4:
      return ['primary.500', 'secondary.800'];
    case 5:
      return ['tertiary.300', 'dark.300'];
    default:
      return ['gray.700', 'gray.900'];
  }
};

export const Card = ({ type, number, name, expiry }: CardProps) => {
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  return (
    <AspectRatio p={4} borderRadius={8} ratio={16 / 9} width="full">
      <VStack
        py={4}
        px={6}
        borderRadius={12}
        bg={{
          linearGradient: {
            colors: getColors(type),
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        <HStack flex={2} alignItems="center">
          <Heading color="white">{maskedNumber}</Heading>
        </HStack>
        <HStack flex={1} alignItems="center" justify-content="space-between">
          <VStack flex={1}>
            <Text color="white" fontSize={10}>
              Card holder name
            </Text>
            <Text color="white">{name}</Text>
          </VStack>
          <VStack flex={1}>
            <Text color="white" fontSize={10}>
              Expiration date
            </Text>
            <Text color="white">{expiry}</Text>
          </VStack>
        </HStack>
      </VStack>
    </AspectRatio>
  );
};
