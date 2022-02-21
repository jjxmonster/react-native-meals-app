import React, { useContext } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/favourites.context.js';

import RestaurantInfoCard from '../../restaurants/components/restaurant-info-card.component.js';

import { ListView } from '../../restaurants/screens/RestaurantsScreen/restaurants.screen.styles.js';

const FavouritesScreen = () => {
   const { favourites } = useContext(FavouritesContext);
   return (
      <ListView>
         <FlatList
            data={favourites}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity
                     onPress={() =>
                        navigation.navigate('RestaurantDetail', {
                           restaurant: item,
                        })
                     }
                  >
                     <RestaurantInfoCard restaurant={item} />
                  </TouchableOpacity>
               );
            }}
            keyExtractor={item => item.name}
         />
      </ListView>
   );
};

export default FavouritesScreen;
