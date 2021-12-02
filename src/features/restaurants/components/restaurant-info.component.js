import React from 'react';

import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
   padding-top: ${({ theme }) => theme.sizes[1]};
   padding-left: ${({ theme }) => theme.sizes[0]};
   font-size: ${({ theme }) => theme.fontSizes.title};
   font-weight: ${({ theme }) => theme.fontWeights.regular};
   color: ${({ theme }) => theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)``;

const RestaurantInfo = ({ restaurant = {} }) => {
   const {
      name = 'Some restaurant',
      icon,
      photos = 'https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      address = '100 Main St',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant;
   return (
      <RestaurantCard mode='outlined'>
         <Card.Content>
            <Card.Cover source={{ uri: photos }} />
            <Title>{name}</Title>
         </Card.Content>
      </RestaurantCard>
   );
};

export default RestaurantInfo;
