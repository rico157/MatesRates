import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState, useRef } from 'react';
import RestaurantList from '../common/RestaurantList';
import { RESTAURANTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function App(props) {
  const [search, setSearch] = useState('');
  const [cuisineFilter, setCuisine] = useState('All Cuisines');
  const [cityFilter, setCity] = useState('All Cities');
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
  const prevFilter = prevRef(cuisineFilter);
  const prevCityFilter = prevRef(cityFilter);

  useEffect(() => {
    const copyRestaurants = [...restaurants];
    const newRestaurants = copyRestaurants.map((restaurant) => {
      const copyRestaurant = { ...restaurant };
      return copyRestaurant;
    });

    if (prevCityFilter !== cityFilter && cityFilter === 'All Cities') {
      setRestaurants(newRestaurants);
    }

    if (prevFilter !== cuisineFilter && cuisineFilter === 'All Cuisines') {
      setRestaurants(newRestaurants);
    }

    if (prevCityFilter !== cityFilter || prevFilter !== cuisineFilter) {
      const filterRestaurants = newRestaurants.filter((restaurant) => {
        if (cityFilter === 'All Cities' && cuisineFilter === 'All Cuisines') {
          return true;
        }
        if (cityFilter === 'All Cities' && cuisineFilter !== 'All Cuisines') {
          return restaurant.cuisine === cuisineFilter;
        }
        if (cuisineFilter === 'All Cuisines' && cityFilter !== 'All Cities') {
          return restaurant.city.name === cityFilter;
        }
        return (
          restaurant.city.name === cityFilter &&
          restaurant.cuisine === cuisineFilter
        );
      });
      setRestaurants(filterRestaurants);
    }

    let filterRestaurants;

    if (search !== prevSearch) {
      setCuisine('All Cuisines');
      setCity('All Cities');

      filterRestaurants = newRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      });

      setRestaurants(filterRestaurants);
    }
  });

  const cities = [];
  restaurants.forEach((restaurant) => {
    if (!cities.some((city) => city.city.name === restaurant.city.name)) {
      cities.push(restaurant);
    }
  });

  const cuisine = [];
  restaurants.forEach((r) => {
    if (!cuisine.some((c) => c.cuisine === r.cuisine)) {
      cuisine.push(r);
    }
  });

  return (
    <>
      <DropDownPicker
        items={[
          {
            label: 'All Cuisines',
            value: 'All Cuisines',
            icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: false,
          },
          ...cuisine.map((r) => {
            return {
              label: r.cuisine,
              value: r.cuisine,
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: false,
            };
          }),
        ]}
        defaultValue={cuisineFilter}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={(item) => setCuisine(item.value)}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <DropDownPicker
        items={[
          {
            label: 'All Cities',
            value: 'All Cities',
            icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: false,
          },
          ...cities.map((restaurant) => {
            return {
              label: restaurant.city.name,
              value: restaurant.city.name,
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: false,
            };
          }),
        ]}
        defaultValue={cityFilter}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={(item) => setCity(item.value)}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />
      <RestaurantList restaurants={filteredRestaurants} {...props} />
    </>
  );
}
