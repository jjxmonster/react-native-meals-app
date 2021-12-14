import React, { useContext, useState, useEffect } from 'react';

import { Searchbar } from 'react-native-paper';
import { SearchBarWrapper } from '../screens/RestaurantsScreen/restaurants.screen.styles.js';

import { LocationContext } from '../../../services/location/location.context.js';

const Search = () => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);

   useEffect(() => {
      search(searchKeyword);
   }, []);

   return (
      <SearchBarWrapper>
         <Searchbar
            placeholder='Search for a location'
            value={searchKeyword}
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
