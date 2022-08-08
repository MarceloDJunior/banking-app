import { Text, useTheme, VStack } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
  Gear as SettingsIcon,
} from 'phosphor-react-native';
import { useLayoutEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  isCurrent: boolean;
  label: string;
  route: string;
};

const AnimatedVStack = Animated.createAnimatedComponent(VStack);

export const BottomTabItem = ({ isCurrent, label, route }: Props) => {
  const { colors } = useTheme();
  const color = isCurrent ? colors.primary[500] : colors.gray[500];
  const scale = useSharedValue(1);

  const renderIcon = () => {
    switch (route) {
      case 'Cards':
        return <CardIcon color={color} size={24} />;
      case 'Home':
        return <HouseIcon color={color} size={24} />;
      case 'Settings':
        return <SettingsIcon color={color} size={24} />;
      default:
        return null;
    }
  };

  useLayoutEffect(() => {
    if (isCurrent) {
      scale.value = 1.1;
    } else {
      scale.value = 1;
    }
  }, [isCurrent, scale]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value) }],
    };
  });

  return (
    <AnimatedVStack
      w="full"
      alignItems="center"
      justifyContent="center"
      height="full"
      p={2}
      style={animatedStyles}
    >
      {renderIcon()}
      <Text fontSize="2xs" color={color}>
        {label}
      </Text>
    </AnimatedVStack>
  );
};
