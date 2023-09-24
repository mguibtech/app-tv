import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import Text from './src/common/components/Text';
import Spacer from './src/common/components/Spacer';
import Container from './src/common/components/Container';
import { Content } from './src/common/components/Content';
import { Icon } from './src/common/components/Icon';
import { Avatar } from './src/common/components/Avatar';
import { NotFound } from './src/common/components/NotFound';
import { Input } from './src/common/components/Input';
import ShowCover from './src/common/components/ShowCover';
import { EpisodeCover } from './src/common/components/EpisodeCover';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <Input loading/>
          <EpisodeCover size="large" url="https://static.tvmaze.com/uploads/images/medium_landscape/15/38639.jpg"/>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
