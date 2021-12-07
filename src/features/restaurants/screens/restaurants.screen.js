import React from 'react';
import styled from 'styled-components/native';

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
               <FlatList
                  data={[
                     { name: 1 },
                     { name: 2 },
                     { name: 3 },
                     { name: 4 },
                     { name: 5 },
                     { name: 6 },
                  ]}
                  renderItem={() => <RestaurantInfoCard />}
                  keyExtractor={item => item.name}
               />
            </ListView>
         </AppWrapper>
      </SafeAreaView>
   );
};

export default RestaurantsScreen;
