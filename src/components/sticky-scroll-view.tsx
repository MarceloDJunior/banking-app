import { useState } from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { ScrollView, useTheme } from 'native-base';

import { useStickyScrollContext } from '../contexts/sticky-scroll-context';

export const StickyScrollView: React.FC = ({ children }) => {
  const { colors } = useTheme();
  const { isStickyEnabled, setIsScrollingDown, setIsStickyEnabled } =
    useStickyScrollContext();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [prevOffset, sePrevOffset] = useState(0);

  const onScrollViewLayout = (event: LayoutChangeEvent) => {
    setScrollHeight(event.nativeEvent.layout.height);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollInternalHeight = event.nativeEvent.contentSize.height;
    if (isStickyEnabled && event.nativeEvent) {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const isBouncingUp = currentOffset <= 0;
      const isBouncingDown =
        currentOffset >= scrollInternalHeight - scrollHeight;
      if (isBouncingUp) {
        setIsScrollingDown(false);
      } else if (isBouncingDown) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(currentOffset > prevOffset);
      }
      sePrevOffset(currentOffset);
    } else {
      if (scrollInternalHeight + 30 > scrollHeight) {
        setIsStickyEnabled(true);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 56 }}
      showsVerticalScrollIndicator={false}
      onLayout={onScrollViewLayout}
      onScrollBeginDrag={onScroll}
      onScrollEndDrag={onScroll}
      scrollEventThrottle={16}
      flex={1}
      bg={colors.secondary[500]}
    >
      {children}
    </ScrollView>
  );
};
