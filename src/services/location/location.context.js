import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location.service.js';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
   const [location, setLocation] = useState(null);
   const [keyword, setKeyword] = useState('San Francisco');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const onSearch = searchKeyWord => {
      setIsLoading(true);
      setKeyword(searchKeyWord);
      if (!searchKeyWord.length) {
         // don't do anything
         return;
      }
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

   return (
      <LocationContext.Provider
         value={{ isLoading, error, location, search: onSearch, keyword }}
      >
         {children}
      </LocationContext.Provider>
   );
};
