import { BottomSheet, SearchBar } from 'react-native-elements';
import React, { useEffect, useState, useRef } from 'react';
import RestaurantList from '../common/RestaurantList';
import { RESTAURANTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function App(props) {
  const [search, setSearch] = useState('');
  const [cuisineFilter, setCuisine] = useState('All Cuisines');
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

  useEffect(() => {
    const copyRestaurants = [...restaurants];
    const newRestaurants = copyRestaurants.map((restaurant) => {
      const copyRestaurant = { ...restaurant };
      return copyRestaurant;
    });

    let filterRestaurants;

    if (prevFilter !== cuisineFilter && cuisineFilter === 'All Cuisines') {
      setRestaurants(newRestaurants);
    }

    if (prevFilter !== cuisineFilter && cuisineFilter !== 'All Cuisines') {
      //filter by cuisine
      filterRestaurants = newRestaurants.filter((restaurant) => {
        return restaurant.cuisine === cuisineFilter;
      });
      console.log(filterRestaurants);
      setRestaurants(filterRestaurants);
    }
    if (search !== prevSearch) {
      setCuisine('All Cuisines');

      filterRestaurants = newRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      });

      setRestaurants(filterRestaurants);
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
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <DropDownPicker
        items={[
          {
            label: 'All Cuisines',
            value: 'All Cuisines',
            icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: false
          },
          ...cuisine.map((r) => {
            return {
              label: r.cuisine,
              value: r.cuisine,
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: false
            };
          })
        ]}
        defaultValue={cuisineFilter}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        onChangeItem={(item) => setCuisine(item.value)}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />
      <RestaurantList restaurants={filteredRestaurants} {...props} />
    </>
  );
}
