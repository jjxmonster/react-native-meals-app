import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';

import Search from '../components/search.component.js';
import MapCallout from '../components/map-callout.component.js';

import { LocationContext } from '../../../services/location/location.context.js';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.js';

const Map = styled(MapView)`
   height: 100%;
   width: 100%;
`;

const MapScreen = ({ navigation }) => {
   const { location } = useContext(LocationContext);
   const { restaurants = [] } = useContext(RestaurantsContext);

   const [latDelta, setLatDelta] = useState();

   const { viewport, lat, lng } = location;

   useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southweastLat = viewport.southwest.lat;

      setLatDelta(northeastLat - southweastLat);
   }, [location]);

   return (
      <>
         <Search />
         <Map
            region={{
               latitude: lat,
               longitude: lng,
               latitudeDelta: latDelta,
               longitudeDelta: 0.02,
            }}
         >
            {restaurants.map(restaurant => {
               return (
                  <MapView.Marker
                     key={restaurant.name}
                     title={restaurant.name}
                     coordinate={{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng,
                     }}
                  >
                     <MapView.Callout
                        onPress={() =>
                           navigation.navigate('RestaurantDetail', {
                              restaurant,
                           })
                        }
                     >
                        <MapCallout restaurant={restaurant} />
                     </MapView.Callout>
                  </MapView.Marker>
               );
            })}
         </Map>
      </>
   );
};

export default MapScreen;
