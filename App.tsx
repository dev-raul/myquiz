import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import * as themes from './src/themes';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
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
      <NavigationContainer>
        <StatusBar
          barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
