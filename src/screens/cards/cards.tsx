import { Box } from 'native-base';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Card } from '../../components/card';
import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { CARDS } from '../../constants/cards';

import { AnimatedCard } from './components/animated-card';

export const Cards = () => {
  const scrollY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <Container>
      <Header title="My cards" />
      <Animated.FlatList
        contentContainerStyle={{
          paddingTop: 80,
        }}
        contentInset={{
          top: 0,
          bottom: CARDS.length * 60,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1 }}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6} px={6}>
            <AnimatedCard index={index} scrollY={scrollY}>
              <Card type={item.id} {...item} />
            </AnimatedCard>
          </Box>
        )}
        onScroll={onScrollHandler}
      />
    </Container>
  );
};
