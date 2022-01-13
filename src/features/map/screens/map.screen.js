import React from 'react';
import MapView from 'react-native-maps';
import { SafeAreaView, Text } from 'react-native';

const Map = () => {
   return (
      <SafeAreaView>
         <MapView style={{ height: '100%' }} />
      </SafeAreaView>
   );
};

export default Map;
