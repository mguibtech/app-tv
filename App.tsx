import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import Text from './src/common/components/Text';
import Spacer from './src/common/components/Spacer';
import Container from './src/common/Container';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text size={20} color="onSecondary">Testando teste</Text>
        <Spacer height={20} />
        <Text size={20} color="secondary">Testando teste</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
