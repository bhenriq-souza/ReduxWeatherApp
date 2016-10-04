import axios from 'axios';

const API_KEY = 'b904966b56a632141b8259ff5788714e';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = ROOT_URL + '&q=' + city + ',us';
  const request = axios.get(url); //returns a promise
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
