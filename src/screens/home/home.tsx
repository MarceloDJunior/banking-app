import { ScrollView } from 'native-base';

import { Container } from '../../components/container';

import { Header } from './components/header';
import { Balance } from './components/balance';
import { CardList } from './components/card-list';
import { ServicesGrid } from './components/services-grid';
import { TransactionHistory } from './components/transaction-history';

export const Home = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Balance />
        <CardList />
        <ServicesGrid />
        <TransactionHistory />
      </ScrollView>
    </Container>
  );
};
