import { StatusBar } from 'expo-status-bar';
import { useTheme, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  const { colors } = useTheme();

  return (
    <View bg={colors.darkBlue[700]} flex={1}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View bg="white" flex={1}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};
