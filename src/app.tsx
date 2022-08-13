import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContextProvider, useAppContext } from './contexts/app-context';
import { StickyScrollProvider } from './contexts/sticky-scroll-context';
import { Navigator } from './navigation';
import { DARK_THEME } from './themes/dark';
import { LIGHT_THEME } from './themes/light';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const ThemedApp = () => {
  const { theme } = useAppContext();
  return (
    <NativeBaseProvider
      config={config}
      theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}
    >
      <SafeAreaProvider>
        <StickyScrollProvider>
          <Navigator />
        </StickyScrollProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <ThemedApp />
    </AppContextProvider>
  );
}
