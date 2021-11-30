import React from 'react';

import { Text } from 'react-native';

const RestaurantInfo = ({ restaurant = {} }) => {
   const {
      name = 'Some restaurant',
      icon,
      photos,
      address = '100 Main St',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant;
   return <Text>{name}</Text>;
};

export default RestaurantInfo;
