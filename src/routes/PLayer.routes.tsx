import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';
import DashBoardPlayer from '../pages/DashBoardPlayer';
const Stack = createStackNavigator();

const PLayerRoutes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
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
      initialRouteName="DashBoardPlayer">
      <Stack.Screen
        options={{header: () => null}}
        name="DashBoardPlayer"
        component={DashBoardPlayer}
      />
    </Stack.Navigator>
  );
};

export default PLayerRoutes;
