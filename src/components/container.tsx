import { useDrawerStatus } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { useTheme, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  const { colors, config } = useTheme();
  const drawerStatus = useDrawerStatus();

  const getStatusBarTextColor = () => {
    if (config.initialColorMode === 'dark') {
      return 'light';
    }
    return drawerStatus === 'open' ? 'light' : 'dark';
  };

  return (
    <View bg={colors.secondary[500]} flex={1}>
      <StatusBar style={getStatusBarTextColor()} />
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View bg="white" flex={1} overflow="hidden">
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};
