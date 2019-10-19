import axios from 'axios';

const API_KEY = '8edc8745f9f9307f7a8e2bc2d1e4b4a3';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
 const url = `${ROOT_URL}&q=${city},us`;
 const request = axios.get(url);

 return {
  type: FETCH_WEATHER,
  payload: request
 };
}