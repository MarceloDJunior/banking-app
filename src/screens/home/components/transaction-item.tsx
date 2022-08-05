import { Box, HStack, Text, VStack } from 'native-base';

import { TransactionModel } from '../../../models/transaction-model';

type Props = {
  transaction: TransactionModel;
};

export const TransactionItem = ({ transaction }: Props) => {
  return (
    <HStack alignItems="center" py={2}>
      <Box
        style={{ width: 60, height: 60 }}
        bg="gray.100"
        rounded="full"
        p={1}
        mr={2}
      >
        <Box size="full" bg="gray.200" rounded="full" />
      </Box>
      <VStack>
        <HStack>
          <Text fontSize="sm" textTransform="capitalize" fontWeight="bold">
            {transaction.type}
          </Text>
          <Text
            fontSize="sm"
            textTransform="capitalize"
            fontWeight="bold"
            color="blue.500"
          >
            &nbsp;
            {transaction.type === 'receive' ? transaction.from : transaction.to}
          </Text>
        </HStack>
        <Text fontSize="xs" color="gray.500" mt={1}>
          {transaction.date.toLocaleString('en-US')}
        </Text>
      </VStack>
      <Text fontSize="sm" fontWeight="bold" flex={1} textAlign="right">
        {transaction.type === 'receive' ? '+' : '-'}{' '}
        {transaction.amount.toFixed(2)}
      </Text>
    </HStack>
  );
};
