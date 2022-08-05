import React from 'react';
import { Button, HStack, Text, useTheme, VStack } from 'native-base';
import {
  Money as CashInIcon,
  UploadSimple as SendIcon,
  DownloadSimple as ReceiveIcon,
  QrCode as PayQr,
  Bank as WithdrawIcon,
  Receipt as PayBillsIcon,
  Coins as ExchangeIcon,
  CirclesFour as MoreIcon,
} from 'phosphor-react-native';

type ServiceItemType = {
  id: number;
  title: string;
  icon: React.ReactElement;
};

const SERVICES_LINE_1: ServiceItemType[] = [
  {
    id: 1,
    title: 'Cash In',
    icon: <CashInIcon />,
  },
  {
    id: 2,
    title: 'Send',
    icon: <SendIcon />,
  },
  {
    id: 3,
    title: 'Receive',
    icon: <ReceiveIcon />,
  },
  {
    id: 4,
    title: 'Pay QR',
    icon: <PayQr />,
  },
];

const SERVICES_LINE_2 = [
  {
    id: 5,
    title: 'Withdraw',
    icon: <WithdrawIcon />,
  },
  {
    id: 6,
    title: 'Pay Bills',
    icon: <PayBillsIcon />,
  },
  {
    id: 7,
    title: 'Exchange',
    icon: <ExchangeIcon />,
  },
  {
    id: 8,
    title: 'More',
    icon: <MoreIcon />,
  },
];

const ServiceItem = ({ icon, title }: ServiceItemType) => {
  const { colors } = useTheme();

  return (
    <VStack alignItems="center">
      <Button
        rounded="full"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        size="16"
        _pressed={{ bg: 'gray.200' }}
      >
        {React.cloneElement(icon, {
          size: 30,
          color: colors.primary[500],
        })}
      </Button>
      <Text fontSize="xs" fontWeight="bold" mt={2}>
        {title}
      </Text>
    </VStack>
  );
};

export const ServicesGrid = () => {
  return (
    <VStack px={4} my={3} width="full">
      <HStack width="full" justifyContent="space-evenly">
        {SERVICES_LINE_1.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </HStack>
      <HStack width="full" justifyContent="space-evenly" mt={6}>
        {SERVICES_LINE_2.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </HStack>
    </VStack>
  );
};
