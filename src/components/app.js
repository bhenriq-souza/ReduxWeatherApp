import React, { Component } from 'react';
import Searchbar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}
