import { useLayoutEffect } from 'react';
import { Box } from 'native-base';
import { useDrawerStatus } from '@react-navigation/drawer';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const Drawer3dContainer: React.FC = ({ children }) => {
  const drawerStatus = useDrawerStatus();

  const borderRadius = useSharedValue(0);
  const rotateY = useSharedValue('0deg');
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  useLayoutEffect(() => {
    if (drawerStatus === 'open') {
      borderRadius.value = 20;
      rotateY.value = '-40deg';
      translateX.value = -70;
      scale.value = 0.9;
    } else {
      borderRadius.value = 0;
      rotateY.value = '0deg';
      translateX.value = 0;
      scale.value = 1;
    }
  }, [drawerStatus, rotateY, scale, borderRadius, translateX]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          perspective: 1000,
        },
        {
          rotateY: withTiming(rotateY.value, {
            duration: 200,
          }),
        },
        {
          translateX: withTiming(translateX.value, {
            duration: 200,
          }),
        },
        {
          scale: withTiming(scale.value, {
            duration: 200,
          }),
        },
      ],
    };
  });

  const animatedChildStyle = useAnimatedStyle(() => {
    return {
      overflow: 'hidden',
      borderRadius: withTiming(borderRadius.value, {
        duration: 200,
      }),
    };
  });

  return (
    <AnimatedBox flex={1} style={animatedContainerStyle}>
      <AnimatedBox flex={1} style={animatedChildStyle}>
        {children}
      </AnimatedBox>
    </AnimatedBox>
  );
};
