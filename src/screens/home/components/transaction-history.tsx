import { Heading, HStack, useTheme, VStack } from 'native-base';
import { CaretRight } from 'phosphor-react-native';

import { TransactionModel } from '../../../models/transaction-model';

import { TransactionItem } from './transaction-item';

const TRANSACTIONS: TransactionModel[] = [
  {
    id: 1,
    type: 'receive',
    from: 'Paul M.',
    amount: 100,
    date: new Date(),
  },
  {
    id: 2,
    type: 'send',
    to: 'John D.',
    amount: 200,
    date: new Date(),
  },
  {
    id: 3,
    type: 'receive',
    from: 'Jane S.',
    amount: 136,
    date: new Date(),
  },
];

export const TransactionHistory = () => {
  const { colors } = useTheme();

  return (
    <VStack px={4} py={6}>
      <HStack alignItems="center" justifyContent="space-between" mb={3}>
        <Heading fontSize="md">Transaction History</Heading>
        <CaretRight size={24} color={colors.gray[500]} />
      </HStack>
      <VStack>
        {TRANSACTIONS.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </VStack>
    </VStack>
  );
};
