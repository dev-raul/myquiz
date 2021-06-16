import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import {useTheme} from 'styled-components';
import UserIdentification from '../pages/Auth/UserIdentification';
import UserBirthDay from '../pages/Auth/UserBirthDay';
const Stack = createStackNavigator();

const AuthRoutes = () => {
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
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="UserBirthDay" component={UserBirthDay} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
