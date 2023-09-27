import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import Routes from './src/navigation';
import { SeasonsModal } from './src/screens/Detail/localComponents/SeasonsModal';
import { seasonMocked } from './src/common/constants/mocks/season.mock';
import { FavoritesShows } from './src/common/contexts/FavoritesShows';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <FavoritesShows>
          <Routes />
        </FavoritesShows>
      </NavigationContainer>
    </ThemeProvider>
  );
}
