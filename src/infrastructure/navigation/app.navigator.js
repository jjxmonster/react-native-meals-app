import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import RestaurantsNavigator from './restaurants.navigator.js';
import SettingsScreen from '../../features/restaurants/screens/settings.screen.js';
import Map from '../../features/restaurants/screens/map.screen.js';
// nav icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               switch (route.name) {
                  case 'Restaurants':
                     return (
                        <Ionicons name='restaurant' size={24} color={color} />
                     );

                  case 'Map':
                     return <Entypo name='map' size={24} color={color} />;

                  case 'Settings':
                     return <Feather name='settings' size={24} color={color} />;

                  default:
                     break;
               }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
         })}
      >
         <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
         <Tab.Screen name='Map' component={Map} />
         <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
   );
}

const AppNavigator = () => {
   return (
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
   );
};

export default AppNavigator;
