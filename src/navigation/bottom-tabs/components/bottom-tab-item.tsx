import { Text, useTheme, VStack } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
  Gear as SettingsIcon,
  IconWeight,
} from 'phosphor-react-native';

import { BottomTabsRoutes } from '../../routes/bottom-tabs-routes';

type Props = {
  isCurrent: boolean;
  label: string;
  route: string;
};

export const BottomTabItem = ({ isCurrent, label, route }: Props) => {
  const { colors } = useTheme();
  const color = isCurrent ? colors.primary[500] : colors.gray[500];

  const renderIcon = () => {
    const weight: IconWeight = isCurrent ? 'fill' : 'regular';
    const props = {
      color,
      size: 24,
      weight,
    };

    switch (route) {
      case BottomTabsRoutes.Cards:
        return <CardIcon {...props} />;
      case BottomTabsRoutes.Home:
        return <HouseIcon {...props} />;
      case BottomTabsRoutes.Settings:
        return <SettingsIcon {...props} />;
      default:
        return null;
    }
  };

  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="center"
      height="full"
      p={2}
    >
      {renderIcon()}
      <Text fontSize="2xs" color={color}>
        {label}
      </Text>
    </VStack>
  );
};
