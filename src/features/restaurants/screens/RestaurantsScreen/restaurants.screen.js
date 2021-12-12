import React, { useContext } from 'react';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context.js';

import { SafeAreaView, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

import RestaurantInfoCard from '../../components/restaurant-info-card.component.js';
import {
   AppWrapper,
   SearchBarWrapper,
   ListView,
   LoadingIndicatorWrapper,
} from './restaurants.screen.styles.js';

const RestaurantsScreen = () => {
   const { isLoading, error, restaurants } = useContext(RestaurantsContext);

   return isLoading ? (
      <LoadingIndicatorWrapper>
         <ActivityIndicator animating={true} size='large' color={'tomato'} />
      </LoadingIndicatorWrapper>
   ) : (
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
