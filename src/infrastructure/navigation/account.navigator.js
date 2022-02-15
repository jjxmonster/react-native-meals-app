import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../features/account/screens/login.screen.js';
import RegisterScreen from '../../features/account/screens/register.screen.js';
import AccountScreen from '../../features/account/screens/account.screen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
   <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={AccountScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
   </Stack.Navigator>
);

export default AccountNavigator;
