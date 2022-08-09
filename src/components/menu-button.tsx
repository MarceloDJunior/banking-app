import { Box, Button, useTheme } from 'native-base';

type Props = {
  onPress: () => void;
};

const LINE_HEIGHT = 3.5;

export const MenuButton = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Button bg="white" p={0} _pressed={{ bg: colors.white }} onPress={onPress}>
      <Box
        bg={colors.gray[700]}
        mb={1}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 24 }}
      />
      <Box
        bg={colors.gray[700]}
        mb={1}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 16 }}
      />
      <Box
        bg={colors.gray[700]}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 20 }}
      />
    </Button>
  );
};
