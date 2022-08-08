import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StickyScrollProvider } from './contexts/sticky-scroll-context';
import { Navigator } from './navigation';
import { THEME } from './styles/theme';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config} theme={THEME}>
      <SafeAreaProvider>
        <StickyScrollProvider>
          <Navigator />
        </StickyScrollProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
