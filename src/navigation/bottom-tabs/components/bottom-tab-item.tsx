import { Text, useTheme, VStack } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
  Gear as SettingsIcon,
} from 'phosphor-react-native';

type Props = {
  isCurrent: boolean;
  label: string;
  route: string;
};

export const BottomTabItem = ({ isCurrent, label, route }: Props) => {
  const { colors } = useTheme();
  const color = isCurrent ? colors.primary[500] : colors.gray[500];

  const renderIcon = () => {
    switch (route) {
      case 'Cards':
        return <CardIcon color={color} size={30} />;
      case 'Home':
        return <HouseIcon color={color} size={30} />;
      case 'Settings':
        return <SettingsIcon color={color} size={30} />;
      default:
        return null;
    }
  };

  return (
    <VStack w="full" alignItems="center" justifyContent="center" height="full">
      {renderIcon()}
      <Text fontSize="2xs" color={color}>
        {label}
      </Text>
    </VStack>
  );
};
