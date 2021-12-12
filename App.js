import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js';
import { LocationContextProvider } from './src/services/location/location.context.js';

// fonts
import {
   useFonts as useOswald,
   Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

//screens
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen/restaurants.screen.js';
import SettingsScreen from './src/features/restaurants/screens/settings.screen.js';
import Map from './src/features/restaurants/screens/map.screen.js';

import { theme } from './src/infrastructure/theme';

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
         })}
      >
         <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
         <Tab.Screen name='Map' component={Map} />
         <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
   );
}

export default function App() {
   const [oswaldLoaded] = useOswald({
      Oswald_400Regular,
   });
   const [latoLoaded] = useLato({
      Lato_400Regular,
   });

   if (!oswaldLoaded || !latoLoaded) {
      return null;
   }

   return (
      <>
         <ThemeProvider theme={theme}>
            <LocationContextProvider>
               <RestaurantsContextProvider>
                  <NavigationContainer>
                     <MyTabs />
                  </NavigationContainer>
               </RestaurantsContextProvider>
            </LocationContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style='auto' />
      </>
   );
}
