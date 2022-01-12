import React from 'react';
import { Text } from 'react-native';

import {
   createStackNavigator,
   TransitionPresets,
} from '@react-navigation/stack';

import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen/restaurants.screen.js';
import RestaurantDetailsScreen from '../../features/restaurants/screens/RestaurantDetailsScreen/restaurantDetails.screen.js';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
   return (
      <RestaurantStack.Navigator
         headerMode='none'
         screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
      >
         <RestaurantStack.Screen
            name='Restaurants'
            component={RestaurantsScreen}
         />
         <RestaurantStack.Screen
            name='RestaurantDetail'
            component={RestaurantDetailsScreen}
         />
      </RestaurantStack.Navigator>
   );
};

export default RestaurantsNavigator;
