import { Box, IconButton, useTheme } from 'native-base';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { PlusCircle } from 'phosphor-react-native';

import { Card } from '../../components/card';
import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { CARDS } from '../../constants/cards';

import { AnimatedCard } from './components/animated-card';

export const Cards = () => {
  const { colors } = useTheme();
  const scrollY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const renderAddCardButton = () => {
    return (
      <IconButton
        variant="ghost"
        alignItems="center"
        justifyContent="center"
        p={1}
        icon={<PlusCircle size={28} color={colors.text[500]} />}
      />
    );
  };

  return (
    <Container>
      <Header title="My cards" rightHeader={renderAddCardButton()} />
      <Animated.FlatList
        style={{
          backgroundColor: colors.secondary[500],
          flex: 1,
        }}
        contentContainerStyle={{
          paddingTop: 80,
          backgroundColor: colors.secondary[500],
        }}
        contentInset={{
          top: 0,
          bottom: CARDS.length * 100,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6} px={6}>
            <AnimatedCard index={index} scrollY={scrollY}>
              <Card {...item} />
            </AnimatedCard>
          </Box>
        )}
        onScroll={onScrollHandler}
      />
    </Container>
  );
};
