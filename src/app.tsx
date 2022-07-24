import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './screens/home';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
