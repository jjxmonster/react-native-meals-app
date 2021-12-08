import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
   useFonts as useOswald,
   Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen.js';
import SettingsScreen from './src/features/restaurants/screens/settings.screen.js';

import { theme } from './src/infrastructure/theme';

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator>
         <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
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
            <NavigationContainer>
               <MyTabs />
            </NavigationContainer>
         </ThemeProvider>
         <ExpoStatusBar style='auto' />
      </>
   );
}
