import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { Heading, HStack, Image, Switch, useTheme, VStack } from 'native-base';
import { useLayoutEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useAppContext } from '../../../contexts/app-context';

const AnimatedDrawerContentScrollView = Animated.createAnimatedComponent(
  DrawerContentScrollView
);

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { theme, setTheme } = useAppContext();
  const { colors } = useTheme();
  const drawerStatus = useDrawerStatus();
  const rotate = useSharedValue('25deg');
  const marginVertical = useSharedValue(0);

  useLayoutEffect(() => {
    if (drawerStatus === 'open') {
      rotate.value = '0';
      marginVertical.value = 32;
    } else {
      rotate.value = '25deg';
      marginVertical.value = 0;
    }
  }, [drawerStatus, rotate, marginVertical]);

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      marginVertical: withTiming(marginVertical.value, { duration: 300 }),
      transform: [
        {
          perspective: 1000,
        },
        {
          rotateY: withTiming(rotate.value, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return (
    <AnimatedDrawerContentScrollView {...props} style={animatedViewStyle}>
      <VStack w="full" mb={6} p={3}>
        <Image
          size={20}
          resizeMode="contain"
          borderRadius={100}
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGqpJwb-P7cyQ/profile-displayphoto-shrink_800_800/0/1596593420728?e=1665014400&v=beta&t=PW-MjxdNTzbnoIBw7Uz4MzCVL0a1MgYebuCNim3XP-8',
          }}
          alt="User image"
          mb={3}
        />
        <Heading fontSize="md" color="white">
          Marcelo D. Junior
        </Heading>
      </VStack>
      <DrawerItemList {...props} />
      <HStack alignItems="center" p={3} mt={8}>
        <Heading fontSize="sm" color="white" mr={4}>
          Dark Mode
        </Heading>
        <Switch
          isChecked={theme === 'dark'}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          offTrackColor={colors.gray[300]}
          onTrackColor={colors.primary[500]}
        />
      </HStack>
    </AnimatedDrawerContentScrollView>
  );
};
