import { AspectRatio, Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';
import { Animated, Dimensions } from 'react-native';

type Card = {
  type: number;
  number: string;
  name: string;
  expiry: string;
};

type Props = Card & {
  index: number;
  y: Animated.Value;
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

const AnimatedAspectRatio = Animated.createAnimatedComponent(AspectRatio);

const height = Dimensions.get('window').height - 52;

export const Card = ({ type, number, name, expiry, y, index }: Props) => {
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;
  const [cardHeight, setCardHeight] = useState(0);

  const position = Animated.subtract(index * cardHeight, y);
  const isDisappearing = -cardHeight;
  const isTop = 0;
  const isBottom = height - cardHeight;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.1 + index * cardHeight],
        outputRange: [0, -index * cardHeight],
        extrapolateRight: 'clamp',
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -cardHeight / 4],
      extrapolate: 'clamp',
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <AnimatedAspectRatio
      borderRadius={8}
      ratio={16 / 10}
      width="full"
      onLayout={({ nativeEvent }) =>
        setCardHeight(nativeEvent.layout.height + 25)
      }
      style={{
        opacity,
        transform: [{ translateY, scale }],
        padding: 20,
      }}
    >
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
    </AnimatedAspectRatio>
  );
};
