import React from 'react';

import {
   SafeAreaView,
   View,
   Text,
   Platform,
   StyleSheet,
   StatusBar,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from '../components/restaurant-info.component.js';

const isAndroid = Platform.OS === 'android';

const RestaurantsScreen = () => {
   return (
      <SafeAreaView
         style={{
            flex: 1,
            marginTop: isAndroid ? StatusBar.currentHeight : 0,
         }}
      >
         <View style={styles.container}>
            <View style={styles.searchBar}>
               <Searchbar placeholder='Search' />
            </View>
            <View style={styles.listView}>
               <RestaurantInfo />
            </View>
         </View>
      </SafeAreaView>
   );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   searchBar: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      paddingLeft: 10,
      minHeight: 48,
   },
   listView: {
      flex: 15,
      width: '100%',
      backgroundColor: 'blue',
      paddingLeft: 10,
      paddingTop: 10,
   },
});
