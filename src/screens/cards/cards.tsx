import { Box, FlatList } from 'native-base';
import { Animated } from 'react-native';

import { Card } from '../../components/card';
import { Container } from '../../components/container';
import { CARDS } from '../../constants/cards';

import { AnimatedCard } from './components/animated-card';

const AnimatedFlatList: typeof FlatList =
  Animated.createAnimatedComponent(FlatList);

export const Cards = () => {
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
        bg="coolGray.100"
        contentContainerStyle={{
          paddingTop: 30,
        }}
        contentInset={{
          top: 0,
          bottom: 240,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        flex={1}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6} px={6}>
            <AnimatedCard index={index} y={y}>
              <Card type={item.id} {...item} />
            </AnimatedCard>
          </Box>
        )}
        onScroll={onScroll}
      />
    </Container>
  );
};
