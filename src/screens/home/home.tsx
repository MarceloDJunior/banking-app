import { IconButton, useTheme } from 'native-base';
import { Bell as NotificationIcon } from 'phosphor-react-native';

import { Container } from '../../components/container';
import { StickyScrollView } from '../../components/sticky-scroll-view';
import { Header } from '../../components/header';

import { Balance } from './components/balance';
import { CardList } from './components/card-list';
import { ServicesGrid } from './components/services-grid';
import { TransactionHistory } from './components/transaction-history';

export const Home = () => {
  const { colors } = useTheme();

  const renderNotificationsButton = () => {
    return (
      <IconButton
        variant="ghost"
        alignItems="center"
        justifyContent="center"
        p={1}
        icon={<NotificationIcon size={24} color={colors.gray[700]} />}
      />
    );
  };

  return (
    <Container>
      <Header title="Home" rightHeader={renderNotificationsButton()} />
      <StickyScrollView>
        <Balance />
        <CardList />
        <ServicesGrid />
        <TransactionHistory />
      </StickyScrollView>
    </Container>
  );
};
