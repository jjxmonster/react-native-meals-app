import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location.service.js';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
   const [location, setLocation] = useState('san francisco');
   const [keyword, setKeyword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const onSearch = (searchKeyWord = 'Antwerp') => {
      setIsLoading(true);
      setKeyword(searchKeyWord);
      locationRequest(searchKeyWord.toLowerCase())
         .then(locationTransform)
         .then(result => {
            setIsLoading(false);
            setLocation(result);
         })
         .catch(error => {
            setIsLoading(false);
            setError(error);
         });
   };

   useEffect(() => {
      onSearch();
   }, []);

   return (
      <LocationContext.Provider
         value={{ isLoading, error, location, search: onSearch, keyword }}
      >
         {children}
      </LocationContext.Provider>
   );
};
