import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import {useTheme} from 'styled-components';
const Stack = createStackNavigator();

const Routes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default Routes;
