import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import {useTheme} from 'styled-components';
import SignUp from '../pages/SignUp';
const Stack = createStackNavigator();

const Routes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitle: '',
        headerTintColor: colors.heading,
      }}
      initialRouteName="Welcome">
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Routes;
