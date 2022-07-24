import { Box, FlatList } from 'native-base';
import { Animated } from 'react-native';

import { Card } from '../components/card';
import { Container } from '../components/container';
import { Header } from '../components/header';
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
      <Header title="Wallet" />
      <AnimatedFlatList
        scrollEventThrottle={16}
        px={8}
        flex={1}
        contentContainerStyle={{ paddingTop: 20 }}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6}>
            <Card type={item.id} index={index} y={y} {...item} />
          </Box>
        )}
        onScroll={onScroll}
      />
    </Container>
  );
};
