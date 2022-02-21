import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import RestaurantsNavigator from './restaurants.navigator.js';
import SettingsNavigator from './settings.navigator.js';
import Map from '../../features/map/screens/map.screen.js';
// nav icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
//context
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context.js';
import { LocationContextProvider } from '../../services/location/location.context.js';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context.js';

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
         <Tab.Screen name='Settings' component={SettingsNavigator} />
      </Tab.Navigator>
   );
}

const AppNavigator = () => {
   return (
      <FavouritesContextProvider>
         <LocationContextProvider>
            <RestaurantsContextProvider>
               <MyTabs />
            </RestaurantsContextProvider>
         </LocationContextProvider>
      </FavouritesContextProvider>
   );
};

export default AppNavigator;
