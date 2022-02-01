import React, { useContext, useEffect, useState } from 'react';

import { Searchbar } from 'react-native-paper';
import { SearchBarWrapper } from '../screens/RestaurantsScreen/restaurants.screen.styles.js';

import { LocationContext } from '../../../services/location/location.context.js';

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);

   useEffect(() => {
      setSearchKeyword(keyword);
   }, [keyword]);

   return (
      <SearchBarWrapper>
         <Searchbar
            placeholder='Search for a location'
            value={searchKeyword}
            icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
            onIconPress={() => onFavouritesToggle()}
            onSubmitEditing={() => {
               search(searchKeyword);
            }}
            onChangeText={text => {
               setSearchKeyword(text);
            }}
         />
      </SearchBarWrapper>
   );
};

export default Search;
