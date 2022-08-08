import { Container } from '../../components/container';
import { StickyScrollView } from '../../components/sticky-scroll-view';
import { Header } from '../../components/header';

import { Balance } from './components/balance';
import { CardList } from './components/card-list';
import { ServicesGrid } from './components/services-grid';
import { TransactionHistory } from './components/transaction-history';

export const Home = () => {
  return (
    <Container>
      <Header />
      <StickyScrollView>
        <Balance />
        <CardList />
        <ServicesGrid />
        <TransactionHistory />
      </StickyScrollView>
    </Container>
  );
};
