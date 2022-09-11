import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Heading, HStack, useTheme, VStack } from 'native-base';

import { TransactionModel } from '../../../models/transaction-model';
import {
  StackRoutes,
  StackParamList,
} from '../../../navigation/routes/stack-routes';
import { TransactionItem } from '../../../components/transaction-item';

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
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <VStack px={4} py={6}>
      <HStack alignItems="center" justifyContent="space-between" mb={4} mt={1}>
        <Heading fontSize="lg" color={colors.text[500]}>
          Recent transactions
        </Heading>
        <Button
          variant="ghost"
          _text={{
            fontWeight: 'bold',
            fontSize: 'xs',
            color: colors.primary[500],
          }}
          _pressed={{
            bg: 'transparent',
            opacity: 0.7,
          }}
          p={0}
          onPress={() => navigation.navigate(StackRoutes.Transactions)}
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
