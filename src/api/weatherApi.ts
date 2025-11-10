// Data Layer: API module for weather data
// Handles all data fetching and API communication with OpenWeatherMap API




const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export const fetchWeatherData = async (city: string = 'London') => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );


if (!response.ok) {
    throw new Error('City not found');
  }

  return await response.json(); // Return RAW API RESPONSE (no transformation)
};
