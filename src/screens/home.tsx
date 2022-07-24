import { Box, FlatList } from 'native-base';

import { Card } from '../components/card';
import { Container } from '../components/container';
import { Header } from '../components/header';

const CARDS = [
  {
    id: 1,
    number: '123456789',
    name: 'John Doe',
    expiry: '12/20',
  },
  {
    id: 2,
    number: '111111111',
    name: 'Jane Doe',
    expiry: '12/20',
  },
  {
    id: 3,
    number: '222222222',
    name: 'Alex Doe',
    expiry: '12/20',
  },
  {
    id: 4,
    number: '333333333',
    name: 'Bob Doe',
    expiry: '12/20',
  },
  {
    id: 5,
    number: '444444444',
    name: 'John Doe',
    expiry: '12/20',
  },
  {
    id: 6,
    number: '555555555',
    name: 'Jane Doe',
    expiry: '12/20',
  },
];

export const Home = () => {
  return (
    <Container>
      <Header title="Wallet" />
      <FlatList
        px={8}
        flex={1}
        contentContainerStyle={{ paddingTop: 20 }}
        data={CARDS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Box mb={6}>
            <Card type={item.id} {...item} />
          </Box>
        )}
      />
    </Container>
  );
};
