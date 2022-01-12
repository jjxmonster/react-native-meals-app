import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

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

const RestaurantsScreen = ({ navigation }) => {
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
                     return (
                        <TouchableOpacity
                           onPress={() =>
                              navigation.navigate('RestaurantDetail', {
                                 restaurant: item,
                              })
                           }
                        >
                           <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>
                     );
                  }}
                  keyExtractor={item => item.name}
               />
            </ListView>
         </AppWrapper>
      </SafeAreaView>
   );
};

export default RestaurantsScreen;
