import camelize from 'camelize';

import { locations } from './location.mock.js';

export const locationRequest = searchTerm => {
   return new Promise((resolve, reject) => {
      const locationMock = location[lsearchTerm];
      if (!locationMock) {
         reject('not found');
      }
      resolve(locationMock);
   });
};

export const locationTransform = result => {
   const { geometry = {} } = camelize(result.results)[0];
   const { lat, lng } = geometry.location;

   return { lat, lng };
};
