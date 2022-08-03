import { Box } from 'native-base';
import { useState } from 'react';
import { Animated, Dimensions } from 'react-native';

type Props = {
  y: Animated.Value;
  index: number;
  children: React.ReactNode;
};

const height = Dimensions.get('window').height - 52;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const AnimatedCard = ({ y, index, children }: Props) => {
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
    <AnimatedBox
      onLayout={({ nativeEvent }) =>
        setCardHeight(nativeEvent.layout.height + 25)
      }
      style={{
        opacity,
        transform: [{ translateY }, { scale }],
      }}
    >
      {children}
    </AnimatedBox>
  );
};
