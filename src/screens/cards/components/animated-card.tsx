import { Box } from 'native-base';
import { useState } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  scrollY: Animated.SharedValue<number>;
  index: number;
  children: React.ReactNode;
};

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const AnimatedCard = ({ scrollY, index, children }: Props) => {
  const [cardHeight, setCardHeight] = useState(0);

  const animatedStyles = useAnimatedStyle(() => {
    const cardSpacing = 18;
    const topPositionValue = cardHeight - index - cardSpacing;
    const beforeCardValue = (index - 1) * cardHeight;
    const cardValue = index * (cardHeight - cardSpacing);
    const afterCardValue = (index + 1) * (cardHeight - cardSpacing);
    const translateY = interpolate(
      scrollY.value,
      [beforeCardValue, cardValue, afterCardValue],
      [0, 0, topPositionValue - cardSpacing * 0.2],
      {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.EXTEND,
      }
    );
    const scale = interpolate(
      scrollY.value,
      [beforeCardValue, cardValue, afterCardValue],
      [1, 1, 0.98],
      {
        extrapolateLeft: Extrapolate.CLAMP,
      }
    );
    return {
      shadowOpacity: 0.8,
      shadowColor: '#000000',
      shadowRadius: 3,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      transform: [{ perspective: 1000 }, { translateY }, { scale }],
    };
  });

  return (
    <AnimatedBox
      onLayout={({ nativeEvent }) =>
        setCardHeight(nativeEvent.layout.height + 25)
      }
      style={animatedStyles}
    >
      {children}
    </AnimatedBox>
  );
};
