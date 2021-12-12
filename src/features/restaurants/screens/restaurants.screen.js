import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.js';

import { SafeAreaView, FlatList, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component.js';

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
   padding-right: ${({ theme }) => theme.sizes[1]};
   min-height: 48px;
`;
const ListView = styled.View`
   flex: 15;
   width: 100%;
   padding-left: ${({ theme }) => theme.sizes[1]};
   padding-right: ${({ theme }) => theme.sizes[1]};
`;

const RestaurantsScreen = () => {
   const { isLoading, error, restaurants } = useContext(RestaurantsContext);
   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}
      >
         <AppWrapper>
            <SearchBarWrapper>
               <Searchbar placeholder='Search' />
            </SearchBarWrapper>
            <ListView>
               <FlatList
                  data={restaurants}
                  renderItem={({ item }) => {
                     return <RestaurantInfoCard restaurant={item} />;
                  }}
                  keyExtractor={item => item.name}
               />
            </ListView>
         </AppWrapper>
      </SafeAreaView>
   );
};

export default RestaurantsScreen;
