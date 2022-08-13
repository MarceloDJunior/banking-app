import { AspectRatio, Heading, HStack, Text, VStack } from 'native-base';

import VisaSVG from '../assets/svgs/visa.svg';
import MastercardSVG from '../assets/svgs/mastercard.svg';
import { CardModel } from '../models/card-model';

type Props = CardModel;

export const Card = ({ brand, color, expiry, name, number, type }: Props) => {
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  const getColors = () => {
    if (typeof color === 'string') {
      return color;
    } else {
      return {
        linearGradient: {
          colors: color,
          start: [0, 0],
          end: [1, 0],
        },
      };
    }
  };

  const renderBrand = () => {
    if (brand === 'visa') {
      return <VisaSVG width={50} height={30} />;
    }
    return <MastercardSVG width={40} height={30} />;
  };

  return (
    <AspectRatio borderRadius={8} ratio={16 / 10} width="full" shadow="6">
      <VStack py={4} px={6} borderRadius={12} bg={getColors()}>
        <HStack flex={1} justifyContent="space-between" alignItems="center">
          {renderBrand()}
          <Text
            textTransform="capitalize"
            color="white"
            opacity={0.6}
            fontWeight="bold"
          >
            {type}
          </Text>
        </HStack>
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
