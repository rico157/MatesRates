import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import mock from '../../mock';
// import RestaurantCard from '../common/RestaurantCard';
import RestaurantList from '../common/RestaurantList';
import {RESTAURANTS} from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function App(props) {
  const [ search, setSearch ] = useState('');
  const [ filteredRestaurants, setRestaurants ] = useState([]);
  const { loading, error, data } = useQuery(RESTAURANTS);
  const { restaurants } = data;
  const updateSearch = (search) => {
    setSearch(search);

  };

  useEffect(() => {
    const copyRestaurants = [...restaurants];
    const newRestaurants = copyRestaurants.map(restaurant => {
      const copyRestaurant = {...restaurant};
      return copyRestaurant;
    });
    const filterRestaurants = newRestaurants.filter(restaurant => {
      return restaurant.name.toLowerCase() === search.toLowerCase();
    });
    console.log(filterRestaurants);
    console.log(search);
    setRestaurants(filterRestaurants);
  });


  const searchFilterFunction = (text) => {
    if (text) {

    }
  };

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <RestaurantList restaurants={restaurants} {...props} />
      {/* <RestaurantCard restaurants={restaurants} /> */}
    </>
  );
  
}
