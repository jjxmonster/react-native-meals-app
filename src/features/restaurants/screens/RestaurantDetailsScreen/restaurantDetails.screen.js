import React from 'react';
import RestaurantInfoCard from '../../components/restaurant-info-card.component.js';

const RestaurantDetailsScreen = ({ restaurant }) => {
   return <RestaurantInfoCard restaurant={restaurant} />;
};

export default RestaurantDetailsScreen;
