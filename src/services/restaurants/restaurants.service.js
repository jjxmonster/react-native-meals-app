import camelize from 'camelize';
import { mocks, mockImages } from './mock';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
   return new Promise((resolve, reject) => {
      const mock = mocks[location];
      if (!mock) reject('not found');
      resolve(mock);
   });
};

export const restaurantsTransform = ({ results = [] }) => {
   const mappedResult = results.map(restaurant => {
      const { business_status, opening_hours } = restaurant;

      restaurant.photos = restaurant.photos.map(p => {
         return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });

      return {
         ...restaurant,
         address: restaurant.vicinity,
         isOpenNow: opening_hours && opening_hours.open_now,
         isClosedTemporarily: business_status === 'CLOSED_TEMPORARILY',
      };
   });
   return camelize(mappedResult);
};
