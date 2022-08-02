import { Box, FlatList } from 'native-base';
import { Animated } from 'react-native';

import { Card } from '../components/card';
import { Container } from '../components/container';
import { StickyHeader } from '../components/sticky-header';
import { CARDS } from '../constants/cards';

const AnimatedFlatList: typeof FlatList =
  Animated.createAnimatedComponent(FlatList);

export const Home = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  return (
    <Container>
      <AnimatedFlatList
        ListHeaderComponent={<StickyHeader title="Wallet" yPosition={y} />}
        ListHeaderComponentStyle={{
          marginBottom: 10,
        }}
        contentInset={{
          top: 0,
          bottom: 240,
        }}
        stickyHeaderHiddenOnScroll={false}
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        flex={1}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6} px={6}>
            <Card type={item.id} index={index} y={y} {...item} />
          </Box>
        )}
        onScroll={onScroll}
      />
    </Container>
  );
};
