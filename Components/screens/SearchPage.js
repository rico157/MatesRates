import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState, useRef } from 'react';
import mock from '../../mock';
// import RestaurantCard from '../common/RestaurantCard';
import RestaurantList from '../common/RestaurantList';
import { RESTAURANTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function App(props) {
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setRestaurants] = useState([]);
  const { data } = useQuery(RESTAURANTS);
  const { restaurants } = data;
  const updateSearch = (search) => {
    setSearch(search);
  };

  const prevRef = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevSearch = prevRef(search);

  useEffect(() => {
    if (search !== prevSearch) {
      const copyRestaurants = [...restaurants];
      const newRestaurants = copyRestaurants.map((restaurant) => {
        const copyRestaurant = { ...restaurant };
        return copyRestaurant;
      });
      const filterRestaurants = newRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      });

      setRestaurants(filterRestaurants);
    }
  });

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <RestaurantList restaurants={filteredRestaurants} {...props} />
    </>
  );
}
