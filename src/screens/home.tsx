import { Box, ScrollView } from 'native-base';

import { Card } from '../components/card';
import { Container } from '../components/container';
import { Header } from '../components/header';

export const Home = () => {
  return (
    <Container>
      <Header title="Wallet" />
      <ScrollView px={8} flex={1} contentContainerStyle={{ paddingTop: 20 }}>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <Box key={item} mb={6}>
            <Card type={item} />
          </Box>
        ))}
      </ScrollView>
    </Container>
  );
};
