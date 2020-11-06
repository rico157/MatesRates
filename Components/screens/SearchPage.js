import { SearchBar } from 'react-native-elements';
import React from 'react';
import mock from '../../mock';
// import RestaurantCard from '../common/RestaurantCard';
import RestaurantList from '../common/RestaurantList';

export default class App extends React.Component {
  state = {
    search: 'BarBurrito'
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    console.log(this.props);
    const { search } = this.state;
    const { restaurants } = mock;

    return (
      <>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <RestaurantList restaurants={restaurants} {...this.props} />
        {/* <RestaurantCard restaurants={restaurants} /> */}
      </>
    );
  }
}
