import React from 'react';
import styled from 'styled-components/native';

import { View } from 'react-native';
import { Card } from 'react-native-paper';
import { Text } from '../../../components/Typography/text.component.js';
import { Spacer } from '../../../components/Spacer/spacer.component.js';

import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star.js';
import open from '../../../../assets/open.js';

import {
   Address,
   RestaurantCard,
   Rating,
} from './restaurant-info-card.styles.js';

const RestaurantInfoCard = ({ restaurant = {} }) => {
   const {
      name = 'Some restaurant',
      icon,
      photos = 'https://www.photoblog.com/learn/wp-content/uploads/2018/11/weeattogether.com-2.jpg',
      address = '22 Jump Street',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant;

   const ratingArray = Array.from(new Array(Math.floor(rating)));

   return (
      <RestaurantCard mode='outlined'>
         <Card.Content>
            <Card.Cover source={{ uri: photos[0] }} />
            <Spacer position='top' size='large'>
               <Text variant='label'>{name}</Text>
               <Rating>
                  <View style={{ flexDirection: 'row' }}>
                     {ratingArray.map((number, index) => (
                        <SvgXml xml={star} key={index} width={20} height={20} />
                     ))}
                  </View>
                  {isClosedTemporarily ? (
                     <Text variant='error'>CLOSED TEMPORARILY</Text>
                  ) : (
                     isOpenNow && <SvgXml xml={open} width={20} height={20} />
                  )}
               </Rating>
               <Address>{address}</Address>
            </Spacer>
         </Card.Content>
      </RestaurantCard>
   );
};

export default RestaurantInfoCard;
