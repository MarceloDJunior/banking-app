import { Box, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '../components/card';

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView px={6} my={4} flex={1}>
        <Box mb={3}>
          <Card type={1} />
        </Box>
        <Box mb={3}>
          <Card type={2} />
        </Box>
        <Box mb={3}>
          <Card type={3} />
        </Box>
        <Box mb={3}>
          <Card type={4} />
        </Box>
        <Box mb={3}>
          <Card type={5} />
        </Box>
        <Box>
          <Card type={6} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
