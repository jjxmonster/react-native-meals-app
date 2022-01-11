import React from 'react';

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

import { theme } from './src/infrastructure/theme';

import AppNavigator from './src/infrastructure/navigation/app.navigator.js';

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
                  <AppNavigator />
               </RestaurantsContextProvider>
            </LocationContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style='auto' />
      </>
   );
}
