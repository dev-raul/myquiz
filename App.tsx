import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import * as themes from './src/themes';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/context/AuthProvider';
const App = () => {
  const deviceTheme = useColorScheme() || 'light';
  const [theme, setTheme] = useState<DefaultTheme>(themes.light);
  useEffect(() => {
    if (deviceTheme && themes[deviceTheme]) {
      setTheme(themes[deviceTheme]);
    }
  }, [deviceTheme]);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
