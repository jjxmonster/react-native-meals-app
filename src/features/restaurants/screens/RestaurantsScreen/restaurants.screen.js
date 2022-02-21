import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context.js';
import { FavouritesContext } from '../../../../services/favourites/favourites.context.js';

import { SafeAreaView, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import RestaurantInfoCard from '../../components/restaurant-info-card.component.js';
import Search from '../../components/search.component.js';
import FavouritesBar from '../../../../components/Favourite/favourites-bar.component.js';
import {
   AppWrapper,
   ListView,
   LoadingIndicatorWrapper,
} from './restaurants.screen.styles.js';
import { FadeInView } from '../../../../components/Animations/fade.animation.js';

const RestaurantsScreen = ({ navigation }) => {
   const { isLoading, error, restaurants } = useContext(RestaurantsContext);
   const { favourites } = useContext(FavouritesContext);

   const [isToggled, setIsToggled] = useState(false);

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
            <Search
               isFavouritesToggled={isToggled}
               onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
               <FavouritesBar
                  onNavigate={navigation.navigate}
                  favourites={favourites}
               />
            )}

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
                           <FadeInView>
                              <RestaurantInfoCard restaurant={item} />
                           </FadeInView>
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
