import { Box, Heading, Text, VStack } from 'native-base';
import { useEffect } from 'react';
import { Dimensions, Animated as RNAnimated } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type Props = {
  title: string;
  yPosition: RNAnimated.Value;
};

const AnimatedHeading = Animated.createAnimatedComponent(Heading);
const AnimatedBox = Animated.createAnimatedComponent(Box);

const halfWidth = Dimensions.get('window').width / 2;

const HEADING_WIDTH = Math.min(halfWidth, 100);
const HEADING_PADDING_L = 24;

export const StickyHeader = ({ title, yPosition }: Props) => {
  const height = useSharedValue(300);
  const fontSize = useSharedValue(32);
  const leftPosition = useSharedValue(0);
  const topPosition = useSharedValue(0);
  const borderRadius = useSharedValue(20);
  const balanceOpacity = useSharedValue(1);
  const balanceTranslate = useSharedValue(0);

  useEffect(() => {
    const yPositionListener = yPosition.addListener(({ value }) => {
      const newHeight = interpolate(value, [0, 300], [300, 52], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      height.value = newHeight;

      const newFontSize = interpolate(value, [0, 200], [32, 16], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      fontSize.value = newFontSize;

      const newLeftPosition = interpolate(
        value,
        [0, 200],
        [0, halfWidth - HEADING_WIDTH / 2 - HEADING_PADDING_L],
        {
          extrapolateRight: Extrapolate.CLAMP,
        }
      );
      leftPosition.value = newLeftPosition;

      const newTopPosition = interpolate(value, [0, 200], [0, -68], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      topPosition.value = newTopPosition;

      const newBorderRadius = interpolate(value, [0, 250, 300], [20, 20, 0], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      borderRadius.value = newBorderRadius;

      const newBalanceOpacity = interpolate(value, [0, 150], [1, 0], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      balanceOpacity.value = newBalanceOpacity;

      const newBalanceTranslate = interpolate(value, [0, 200], [0, 50], {
        extrapolateRight: Extrapolate.CLAMP,
      });
      balanceTranslate.value = newBalanceTranslate;
    });

    return () => {
      yPosition.removeListener(yPositionListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yPosition]);

  const animatedBoxStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const animatedHeadingStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: leftPosition.value },
        { translateY: topPosition.value },
      ],
      fontSize: fontSize.value,
    };
  });

  const animatedBorderedBoxStyles = useAnimatedStyle(() => {
    return {
      marginBottom: -10,
      borderTopLeftRadius: borderRadius.value,
      borderTopRightRadius: borderRadius.value,
    };
  });

  const animatedBalanceStyles = useAnimatedStyle(() => {
    return {
      opacity: balanceOpacity.value,
      transform: [{ translateY: balanceTranslate.value }],
    };
  });

  return (
    <>
      <AnimatedBox bg="darkBlue.700" style={animatedBoxStyles}>
        <AnimatedHeading
          color="white"
          textAlign="center"
          style={[
            animatedHeadingStyles,
            {
              width: HEADING_WIDTH,
              position: 'absolute',
              top: 80,
              left: HEADING_PADDING_L,
            },
          ]}
        >
          {title}
        </AnimatedHeading>
        <AnimatedBox
          style={[
            {
              position: 'absolute',
              left: 24,
              bottom: 40,
              zIndex: -1,
            },
            animatedBalanceStyles,
          ]}
        >
          <VStack>
            <Text color="white" fontSize="sm">
              Available balance
            </Text>
            <Text color="white" fontSize="4xl" fontWeight="bold">
              $1,000.00
            </Text>
          </VStack>
        </AnimatedBox>
      </AnimatedBox>
      <Box bg="darkBlue.700">
        <AnimatedBox
          bg="coolGray.100"
          height={10}
          style={animatedBorderedBoxStyles}
        />
      </Box>
    </>
  );
};
