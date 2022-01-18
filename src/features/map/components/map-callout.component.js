import React from 'react';
import styled from 'styled-components';
import { Text, View, Image, Platform } from 'react-native';

const RestaurantWrapper = styled.View`
   align-items: center;
`;

const CompactImage = styled.Image`
   border-radius: 10px;
   width: 120px;
   height: 100px;
   margin-bottom: ${({ theme }) => theme.space[2]};
`;

const isAndroid = Platform.OS === 'android';

const MapCallout = ({ restaurant }) => {
   return (
      <RestaurantWrapper>
         <CompactImage source={{ uri: restaurant.photos[0] }} />
         <Text variant='caption'>{restaurant.name}</Text>
      </RestaurantWrapper>
   );
};

export default MapCallout;
