import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends React.Component {
  renderWeather(cityData){
    const temps = cityData.list.map( weather => weather.main.temp );
    const pressures = cityData.list.map( weather => weather.main.pressure );
    const humidities = cityData.list.map( weather => weather.main.humidity );
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color='orange' units='K'/></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='yellow' units='%' /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}
function mapStateToProps({ weather }){ //ES6 = same of using 'state' as the function argument and acessing only the property 'weather'
  return { weather }; //The key and the value of the object is the exactly the same. = { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
