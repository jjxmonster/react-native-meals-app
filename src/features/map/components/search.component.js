import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context.js';

export const SearchBarWrapper = styled.View`
   flex: 1;
   width: 100%;
   justify-content: center;
   padding-left: ${({ theme }) => theme.sizes[1]};
   padding-right: ${({ theme }) => theme.sizes[1]};
   min-height: 48px;
   position: absolute;
   top: 50px;
   z-index: 999;
`;

const Search = () => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);

   useEffect(() => {
      setSearchKeyword(keyword);
   }, [keyword]);

   return (
      <SearchBarWrapper>
         <Searchbar
            icon='heart'
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
