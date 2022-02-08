import React, { useState, useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { FIREBASE_API_KEY } from '@env';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js';
import { LocationContextProvider } from './src/services/location/location.context.js';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context.js';

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

const firebaseConfig = {
   apiKey: FIREBASE_API_KEY,
   authDomain: 'meals-to-go-4d722.firebaseapp.com',
   projectId: 'meals-to-go-4d722',
   storageBucket: 'meals-to-go-4d722.appspot.com',
   messagingSenderId: '157312654518',
   appId: '1:157312654518:web:9dc40e990637fd7c069a17',
};
if (!getApps().length) initializeApp(firebaseConfig);

export default function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            <FavouritesContextProvider>
               <LocationContextProvider>
                  <RestaurantsContextProvider>
                     <AppNavigator />
                  </RestaurantsContextProvider>
               </LocationContextProvider>
            </FavouritesContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style='auto' />
      </>
   );
}
