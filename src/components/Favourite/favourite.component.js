import React, { useContext } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context.js';

const FavouriteButton = styled(TouchableOpacity)`
   position: absolute;
   top: 10px;
   right: 10px;
   z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
   const { favourites, addToFavourites, removeFromFavourites } =
      useContext(FavouritesContext);

   const isFavorite = favourites.find(r => r.placeId === restaurant.placeId);
   return (
      <FavouriteButton
         onPress={() =>
            !isFavorite
               ? addToFavourites(restaurant)
               : removeFromFavourites(restaurant)
         }
      >
         <AntDesign
            name={isFavorite ? 'heart' : 'hearto'}
            size={24}
            color={isFavorite ? 'red' : 'white'}
         />
      </FavouriteButton>
   );
};
