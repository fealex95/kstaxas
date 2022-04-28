import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';
import { Home } from './src/screens/Home';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Poppins_300Light } from '@expo-google-fonts/poppins'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Poppins_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" barStyle='light-content' translucent />
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>

  );
}
