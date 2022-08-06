import { Box, Button } from 'native-base';

type Props = {
  onPress: () => void;
};

export const MenuButton = ({ onPress }: Props) => {
  return (
    <Button bg="white" p={0} _pressed={{ bg: 'white' }} onPress={onPress}>
      <Box bg="gray.600" h={1} w={6} mb={1} rounded={2} />
      <Box bg="gray.600" h={1} w={4} mb={1} rounded={2} />
      <Box bg="gray.600" h={1} w={5} rounded={2} />
    </Button>
  );
};
