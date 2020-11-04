import { SearchBar } from 'react-native-elements';
import React from 'react';
import mock from '../../mock';
import RestaurantListComponent from '../SharedComponents/RestaurantListComponent';

export default class App extends React.Component {
  state = {
    search: ''
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const { restaurants } = mock;

    return (
      <>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <RestaurantListComponent restaurants={restaurants} />
      </>
    );
  }
}
