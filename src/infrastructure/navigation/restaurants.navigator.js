import React from 'react';
import { Text } from 'react-native';

import {
   createStackNavigator,
   TransitionPresets,
} from '@react-navigation/stack';

import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen/restaurants.screen.js';

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
            component={() => <Text>DETAIL</Text>}
         />
      </RestaurantStack.Navigator>
   );
};

export default RestaurantsNavigator;
