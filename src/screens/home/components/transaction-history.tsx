import { Button, Heading, HStack, VStack } from 'native-base';

import { TransactionModel } from '../../../models/transaction-model';

import { TransactionItem } from './transaction-item';

const TRANSACTIONS: TransactionModel[] = [
  {
    id: 1,
    title: 'Netflix',
    type: 'pay',
    amount: 40,
    icon: 'netflix',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Amazon',
    type: 'pay',
    amount: 300,
    icon: 'amazon',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Uber',
    type: 'pay',
    amount: 45,
    icon: 'uber',
    date: new Date(),
  },
  {
    id: 4,
    title: 'Spotify',
    type: 'pay',
    amount: 15,
    icon: 'spotify',
    date: new Date(),
  },
];

export const TransactionHistory = () => {
  return (
    <VStack px={4} py={6}>
      <HStack alignItems="center" justifyContent="space-between" mb={3}>
        <Heading fontSize="md">Recent transactions</Heading>
        <Button
          variant="ghost"
          _text={{ fontWeight: 'bold', fontSize: 'xs' }}
          _pressed={{
            bg: 'transparent',
            opacity: 0.7,
          }}
          p={0}
        >
          Show all
        </Button>
      </HStack>
      <VStack>
        {TRANSACTIONS.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </VStack>
    </VStack>
  );
};
