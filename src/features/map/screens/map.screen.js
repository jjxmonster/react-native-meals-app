import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';

import Search from '../components/search.component.js';

import { LocationContext } from '../../../services/location/location.context.js';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.js';

const Map = styled(MapView)`
   height: 100%;
   width: 100%;
`;

const MapScreen = () => {
   const { location } = useContext(LocationContext);
   const { restaurants = [] } = useContext(RestaurantContext);

   const [latDelta, setLatDelta] = useState();

   const [viewport] = location;

   useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southweastLat = viewportsouthweast.lat;
   }, [location]);

   return (
      <>
         <Search />
         <Map>
            {restaurants.map(restaurant => {
               return null;
            })}
         </Map>
      </>
   );
};

export default MapScreen;
