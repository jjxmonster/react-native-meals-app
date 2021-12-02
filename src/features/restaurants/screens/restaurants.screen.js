import React from 'react';

import { SafeAreaView, View, Text, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import RestaurantInfo from '../components/restaurant-info.component.js';

const AppWrapper = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;
const SearchBarWrapper = styled.View`
   flex: 1;
   width: 100%;
   justify-content: center;
   padding-left: ${({ theme }) => theme.sizes[1]};
   min-height: 48px;
`;
const ListView = styled.View`
   flex: 15;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.bg.secondary};
   padding: ${({ theme }) => theme.sizes[0]};
   padding-top: ${({ theme }) => theme.sizes[1]};
`;

const isAndroid = Platform.OS === 'android';

const RestaurantsScreen = () => {
   return (
      <SafeAreaView
         style={{
            flex: 1,
            marginTop: isAndroid ? StatusBar.currentHeight : 0,
         }}
      >
         <AppWrapper>
            <SearchBarWrapper>
               <Searchbar placeholder='Search' />
            </SearchBarWrapper>
            <ListView>
               <RestaurantInfo />
            </ListView>
         </AppWrapper>
      </SafeAreaView>
   );
};

export default RestaurantsScreen;
