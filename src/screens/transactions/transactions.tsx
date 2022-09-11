import { useEffect } from 'react';
import { Box, Heading, SectionList, useTheme } from 'native-base';
import { InterfaceSectionListProps } from 'native-base/lib/typescript/components/basic/SectionList/types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { TransactionItem } from '../../components/transaction-item';
import { useStickyScrollContext } from '../../contexts/sticky-scroll-context';
import { useStickyScrollEvents } from '../../hooks/use-sticky-scroll-events';
import { TransactionModel } from '../../models/transaction-model';

const todayDate = new Date();
const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
const lastWeekDate = new Date(todayDate.setDate(todayDate.getDate() - 7));

type SectionType = {
  title: string;
  data: TransactionModel[];
};

const TRANSACTIONS: SectionType[] = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        title: 'Netflix',
        type: 'pay',
        amount: 40,
        icon: 'netflix',
        date: todayDate,
      },
      {
        id: 2,
        title: 'Amazon',
        type: 'pay',
        amount: 300,
        icon: 'amazon',
        date: todayDate,
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 3,
        title: 'Uber',
        type: 'pay',
        amount: 45,
        icon: 'uber',
        date: yesterdayDate,
      },
      {
        id: 4,
        title: 'Spotify',
        type: 'pay',
        amount: 15,
        icon: 'spotify',
        date: yesterdayDate,
      },
      {
        id: 5,
        title: 'Uber',
        type: 'pay',
        amount: 45,
        icon: 'uber',
        date: yesterdayDate,
      },
      {
        id: 6,
        title: 'Spotify',
        type: 'pay',
        amount: 15,
        icon: 'spotify',
        date: yesterdayDate,
      },
    ],
  },
  {
    title: 'Last Week',
    data: [
      {
        id: 7,
        title: 'Netflix',
        type: 'pay',
        amount: 40,
        icon: 'netflix',
        date: lastWeekDate,
      },
      {
        id: 8,
        title: 'Amazon',
        type: 'pay',
        amount: 300,
        icon: 'amazon',
        date: lastWeekDate,
      },
      {
        id: 9,
        title: 'Spotify',
        type: 'pay',
        amount: 15,
        icon: 'spotify',
        date: yesterdayDate,
      },
      {
        id: 10,
        title: 'Uber',
        type: 'pay',
        amount: 45,
        icon: 'uber',
        date: yesterdayDate,
      },
      {
        id: 11,
        title: 'Spotify',
        type: 'pay',
        amount: 15,
        icon: 'spotify',
        date: yesterdayDate,
      },
    ],
  },
];

const AnimatedSectionList =
  Animated.createAnimatedComponent<
    InterfaceSectionListProps<TransactionModel, SectionType>
  >(SectionList);

export const Transactions = () => {
  const { colors } = useTheme();
  const { isScrollingDown } = useStickyScrollContext();
  const topPosition = useSharedValue(56);

  const { onScrollViewLayout, onScroll } = useStickyScrollEvents();

  useEffect(() => {
    topPosition.value = isScrollingDown ? 0 : 54;
  }, [isScrollingDown, topPosition]);

  const sectionListAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: withTiming(topPosition.value, { duration: 200 }),
    };
  });

  return (
    <Container>
      <Header title="Transactions" backButton />
      <AnimatedSectionList
        onLayout={onScrollViewLayout}
        onScrollBeginDrag={onScroll}
        onScrollEndDrag={onScroll}
        style={sectionListAnimatedStyles}
        flex={1}
        bg={colors.secondary[500]}
        sections={TRANSACTIONS}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Box px={4}>
            <TransactionItem transaction={item} />
          </Box>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Heading
            px={4}
            fontSize="md"
            py={3}
            color={colors.text[500]}
            bg={colors.secondary[500]}
            opacity={0.96}
          >
            {title}
          </Heading>
        )}
        stickySectionHeadersEnabled
      />
    </Container>
  );
};
