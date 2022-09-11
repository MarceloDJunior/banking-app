import { Box, Button, useTheme } from 'native-base';

type Props = {
  onPress: () => void;
};

const LINE_HEIGHT = 3.5;

export const MenuButton = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Button
      bg={colors.secondary[500]}
      p={2}
      _pressed={{ bg: colors.secondary[500] }}
      onPress={onPress}
    >
      <Box
        bg={colors.text[500]}
        mb={1}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 24 }}
      />
      <Box
        bg={colors.text[500]}
        mb={1}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 16 }}
      />
      <Box
        bg={colors.text[500]}
        rounded={2}
        style={{ height: LINE_HEIGHT, width: 20 }}
      />
    </Button>
  );
};
