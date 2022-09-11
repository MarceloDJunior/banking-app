import { IconButton, useTheme, ScrollView } from 'native-base';
import { Bell as NotificationIcon } from 'phosphor-react-native';

import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { useStickyScrollEvents } from '../../hooks/use-sticky-scroll-events';

import { Balance } from './components/balance';
import { CardList } from './components/card-list';
import { ServicesGrid } from './components/services-grid';
import { TransactionHistory } from './components/transaction-history';

export const Home = () => {
  const { colors } = useTheme();
  const { onScroll, onScrollViewLayout } = useStickyScrollEvents();

  const renderNotificationsButton = () => {
    return (
      <IconButton
        variant="ghost"
        alignItems="center"
        justifyContent="center"
        p={1}
        icon={<NotificationIcon size={24} color={colors.text[500]} />}
      />
    );
  };

  return (
    <Container>
      <Header title="Home" rightHeader={renderNotificationsButton()} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 56 }}
        showsVerticalScrollIndicator={false}
        onLayout={onScrollViewLayout}
        onScrollBeginDrag={onScroll}
        onScrollEndDrag={onScroll}
        scrollEventThrottle={16}
        flex={1}
        bg={colors.secondary[500]}
      >
        <Balance />
        <CardList />
        <ServicesGrid />
        <TransactionHistory />
      </ScrollView>
    </Container>
  );
};
