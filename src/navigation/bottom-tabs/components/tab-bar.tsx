import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'native-base';
import { useCallback } from 'react';
import { Route } from '@react-navigation/native';

import { BottomTabItem } from './bottom-tab-item';

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  const translateX = useSharedValue(tabWidth * state.index);

  const activeTabStyles = useAnimatedStyle(() => {
    return {
      width: tabWidth - 20,
      transform: [
        {
          translateX: withSpring(translateX.value, {
            stiffness: 70,
            velocity: 20,
          }),
        },
      ],
    };
  });

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

  return (
    <View
      style={[
        themedStyles.container,
        {
          paddingBottom: bottom,
          height: bottom + 60,
        },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={[themedStyles.activeTab, activeTabStyles]}>
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
    </View>
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
      backgroundColor: colors.white,
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
