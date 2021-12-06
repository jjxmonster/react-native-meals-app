import React from 'react';

import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star.js';
import open from '../../../../assets/open.js';

const Title = styled.Text`
   padding-top: ${({ theme }) => theme.sizes[1]};
   font-size: ${({ theme }) => theme.fontSizes.title};
   font-family: ${({ theme }) => theme.fonts.heading};
   color: ${({ theme }) => theme.colors.ui.primary};
`;
const Address = styled.Text`
   font-size: ${({ theme }) => theme.fontSizes.body};
   font-family: ${({ theme }) => theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
   background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const Rating = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding-top: ${({ theme }) => theme.space[2]};
   padding-bottom: ${({ theme }) => theme.space[2]};
`;

const RestaurantInfo = ({ restaurant = {} }) => {
   const {
      name = 'Some restaurant',
      icon,
      photos = 'https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      address = '22 Jump Street',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant;

   const ratingArray = Array.from(new Array(Math.floor(rating)));

   return (
      <RestaurantCard mode='outlined'>
         <Card.Content>
            <Card.Cover source={{ uri: photos }} />
            <Title>{name}</Title>
            <Rating>
               <View style={{ flexDirection: 'row' }}>
                  {ratingArray.map(() => (
                     <SvgXml xml={star} width={20} height={20} />
                  ))}
               </View>
               {isClosedTemporarily ? (
                  <Text style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>
               ) : (
                  <SvgXml xml={open} width={20} height={20} />
               )}
            </Rating>
            <Address>{address}</Address>
         </Card.Content>
      </RestaurantCard>
   );
};

export default RestaurantInfo;
