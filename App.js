import React from 'react';
import { initializeApp, getApp } from 'firebase/app';
import { FIREBASE_API_KEY } from '@env';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context.js';
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

import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
   apiKey: FIREBASE_API_KEY,
   authDomain: 'meals-to-go-4d722.firebaseapp.com',
   projectId: 'meals-to-go-4d722',
   storageBucket: 'meals-to-go-4d722.appspot.com',
   messagingSenderId: '157312654518',
   appId: '1:157312654518:web:9dc40e990637fd7c069a17',
};

const createFirebaseApp = (config = {}) => {
   try {
      return getApp();
   } catch (err) {
      return initializeApp(config);
   }
};

const firebaseApp = createFirebaseApp(firebaseConfig);

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
            <AuthenticationContextProvider firebaseApp={firebaseApp}>
               <FavouritesContextProvider>
                  <LocationContextProvider>
                     <RestaurantsContextProvider>
                        <Navigation />
                     </RestaurantsContextProvider>
                  </LocationContextProvider>
               </FavouritesContextProvider>
            </AuthenticationContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style='auto' />
      </>
   );
}
