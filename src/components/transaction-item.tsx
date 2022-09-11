import { Box, HStack, Text, useTheme, VStack, Image } from 'native-base';
import { useCallback } from 'react';

import AmazonIcon from '../assets/images/amazon.jpeg';
import NetflixIcon from '../assets/images/netflix.jpeg';
import SpotifyIcon from '../assets/images/spotify.jpeg';
import UberIcon from '../assets/images/uber.jpeg';
import { TransactionModel } from '../models/transaction-model';

type Props = {
  transaction: TransactionModel;
};

export const TransactionItem = ({ transaction }: Props) => {
  const { colors } = useTheme();

  const renderIcon = useCallback(() => {
    const props = {
      alt: transaction.icon,
      width: '100%',
      height: '100%',
    };

    switch (transaction.icon) {
      case 'amazon':
        return <Image source={AmazonIcon} {...props} />;
      case 'netflix':
        return <Image source={NetflixIcon} {...props} />;
      case 'spotify':
        return <Image source={SpotifyIcon} {...props} />;
      case 'uber':
        return <Image source={UberIcon} {...props} />;
      default:
        return null;
    }
  }, [transaction.icon]);

  return (
    <HStack alignItems="center" py={3}>
      <Box
        style={{ width: 60, height: 60 }}
        size="full"
        rounded={16}
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        mr={4}
      >
        {renderIcon()}
      </Box>
      <VStack>
        <HStack>
          <Text
            fontSize="md"
            textTransform="capitalize"
            fontWeight="bold"
            color={colors.text[500]}
          >
            {transaction.title}
          </Text>
        </HStack>
        <Text fontSize="xs" color={colors.gray[500]} mt={1}>
          {transaction.date.toLocaleString('en-US')}
        </Text>
      </VStack>
      <Text
        fontSize="md"
        fontWeight="bold"
        flex={1}
        textAlign="right"
        color={colors.text[500]}
      >
        {transaction.type === 'receive' ? '+' : '-'}
        {transaction.amount.toFixed(2)}
      </Text>
    </HStack>
  );
};
