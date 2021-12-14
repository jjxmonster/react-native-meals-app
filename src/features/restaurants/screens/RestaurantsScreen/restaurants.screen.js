import React, { useContext } from 'react';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context.js';

import { SafeAreaView, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import RestaurantInfoCard from '../../components/restaurant-info-card.component.js';
import Search from '../../components/search.component.js';
import {
   AppWrapper,
   ListView,
   LoadingIndicatorWrapper,
} from './restaurants.screen.styles.js';

const RestaurantsScreen = () => {
   const { isLoading, error, restaurants } = useContext(RestaurantsContext);

   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}
      >
         {isLoading && (
            <LoadingIndicatorWrapper>
               <ActivityIndicator
                  animating={true}
                  size='large'
                  style={{ marginLeft: -25 }}
                  color={'tomato'}
               />
            </LoadingIndicatorWrapper>
         )}
         <AppWrapper>
            <Search />
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
