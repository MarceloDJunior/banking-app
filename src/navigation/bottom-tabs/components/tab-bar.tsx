import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'native-base';
import { useCallback } from 'react';
import { Route } from '@react-navigation/native';

import { useStickyScrollContext } from '../../../contexts/sticky-scroll-context';

import { BottomTabItem } from './bottom-tab-item';

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  const { isScrollingDown } = useStickyScrollContext();
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  const translateX = useSharedValue(tabWidth * state.index);

  const onTabPress = useCallback(
    (route: Route<any>, index: number, isFocused: boolean) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      translateX.value = tabWidth * index;
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [navigation, tabWidth, translateX]
  );

  const onTabLongPress = useCallback(
    (route: Route<any>) => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    },
    [navigation]
  );

  const getRouteLabel = useCallback(
    (route: Route<any>) => {
      const { options } = descriptors[route.key];
      if (options.tabBarLabel) {
        return options.tabBarLabel as string;
      }
      if (options.title) {
        return options.title;
      }
      return route.name;
    },
    [descriptors]
  );

  const themedStyles = styles(colors);

  const activeTabAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: tabWidth - 20,
      transform: [
        {
          translateX: withSpring(translateX.value, {
            stiffness: 160,
            damping: 14,
            velocity: 90,
          }),
        },
      ],
    };
  });

  const containerAnimatedStyles = useAnimatedStyle(() => {
    const height = isScrollingDown ? 0 : bottom + 60;
    const paddingBottom = isScrollingDown ? 0 : bottom;
    const bottomPos = isScrollingDown ? -60 : 0;
    return {
      height: withTiming(height, { duration: 200 }),
      paddingBottom: withTiming(paddingBottom, { duration: 200 }),
      bottom: withTiming(bottomPos, { duration: 200 }),
    };
  });

  return (
    <Animated.View style={[themedStyles.container, containerAnimatedStyles]}>
      <View style={{ flexDirection: 'row' }}>
        <Animated.View
          style={[themedStyles.activeTab, activeTabAnimatedStyles]}
        >
          <View style={themedStyles.slider} />
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = getRouteLabel(route);
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onTabPress(route, index, isFocused)}
              onLongPress={() => onTabLongPress(route)}
              style={{ flex: 1 }}
              activeOpacity={0.7}
              key={index}
            >
              <BottomTabItem
                route={route.name}
                label={label}
                isCurrent={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};
const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopWidth: 0,
      backgroundColor: colors.secondary[500],
      elevation: 30,
      zIndex: 1,
      height: 60,
    },
    activeTab: {
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 10,
      borderRadius: 10,
      width: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 2,
    },
    slider: {
      width: '70%',
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.primary[500],
      position: 'absolute',
    },
  });
