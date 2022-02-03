import React from 'react';
import styled from 'styled-components';
import WebView from 'react-native-webview';
import { Text, View, Image, Platform } from 'react-native';

const RestaurantWrapper = styled.View`
   align-items: center;
   max-width: 120px;
`;

const CompactImage = styled.Image`
   border-radius: 10px;
   width: 120px;
   height: 100px;
   margin-bottom: ${({ theme }) => theme.space[2]};
`;
const AndroidImageWrapper = styled(WebView)`
   border-radius: 10px;
   width: 120px;
   height: 100px;
   margin-bottom: ${({ theme }) => theme.space[2]};
`;

const isAndroid = Platform.OS === 'android';

const MapCallout = ({ restaurant, isMap }) => {
   const Image = isAndroid && isMap ? AndroidImageWrapper : CompactImage;

   return (
      <RestaurantWrapper>
         <Image source={{ uri: restaurant.photos[0] }} />
         <Text variant='caption'>{restaurant.name}</Text>
      </RestaurantWrapper>
   );
};

export default MapCallout;
