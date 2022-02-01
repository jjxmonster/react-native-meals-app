import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import CompactRestaurantInfo from '../../features/map/components/map-callout.component.js';
import { Spacer } from '../Spacer/spacer.component.js';
import { Text } from '../Typography/text.component.js';

const FavouritesWrapper = styled.View`
   padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
   if (!favourites.length) null;

   return (
      <FavouritesWrapper>
         <Spacer position='left' size='medium'>
            <Spacer position='bottom' size='medium'>
               <Text variant='caption'>Favourites</Text>
            </Spacer>
         </Spacer>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favourites.map(restaurant => {
               const key = restaurant.name;
               return (
                  <Spacer key={key} position='left' size='medium'>
                     <TouchableOpacity
                        onPress={() =>
                           onNavigate('RestaurantDetail', { restaurant })
                        }
                     >
                        <CompactRestaurantInfo restaurant={restaurant} />
                     </TouchableOpacity>
                  </Spacer>
               );
            })}
         </ScrollView>
      </FavouritesWrapper>
   );
};

export default FavouritesBar;
