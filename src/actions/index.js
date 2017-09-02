import axios from 'axios';

const API_KEY = 'e73114467ab7f9a16493f2bf0a9718b5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);   // returns a promise

    console.log('Request:', request);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
}
