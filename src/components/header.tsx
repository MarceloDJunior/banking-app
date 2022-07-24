import { Heading, HStack, useTheme } from 'native-base';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const { colors } = useTheme();

  return (
    <>
      <HStack
        height={52}
        bg={colors.blue[500]}
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize="md">
          {title}
        </Heading>
      </HStack>
    </>
  );
};
