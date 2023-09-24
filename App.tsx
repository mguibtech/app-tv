import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={styles.container}>
        <Text>Initial project</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
