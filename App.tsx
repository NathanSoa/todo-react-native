import { StatusBar } from 'react-native';
import Home from './src/presentation/screens/home';
import { colors } from './src/presentation/styles/color';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor={colors.gray700} barStyle={'light-content'}/>
      <Home />
    </>
  );
}
