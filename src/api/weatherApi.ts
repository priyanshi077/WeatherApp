// Data Layer: API module for weather data
// Handles all data fetching and API communication with OpenWeatherMap API

import { WeatherData } from '../types/weather.types';


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;


const getWeatherInfo = (code: string): { icon: string; condition: string } => {
  const mapping: { [key: string]: { icon: string; condition: string } } = {
    '01d': { icon: 'clear-day', condition: 'Clear Sky' },
    '01n': { icon: 'clear-night', condition: 'Clear Sky' },
    '02d': { icon: 'partly-cloudy', condition: 'Partly Cloudy' },
    '02n': { icon: 'partly-cloudy', condition: 'Partly Cloudy' },
    '03d': { icon: 'cloudy', condition: 'Cloudy' },
    '03n': { icon: 'cloudy', condition: 'Cloudy' },
    '04d': { icon: 'cloudy', condition: 'Overcast' },
    '04n': { icon: 'cloudy', condition: 'Overcast' },
    '09d': { icon: 'rain', condition: 'Rain' },
    '09n': { icon: 'rain', condition: 'Rain' },
    '10d': { icon: 'rain', condition: 'Rain' },
    '10n': { icon: 'rain', condition: 'Rain' },
    '11d': { icon: 'thunderstorm', condition: 'Thunderstorm' },
    '11n': { icon: 'thunderstorm', condition: 'Thunderstorm' },
    '13d': { icon: 'snow', condition: 'Snow' },
    '13n': { icon: 'snow', condition: 'Snow' },
    '50d': { icon: 'mist', condition: 'Mist' },
    '50n': { icon: 'mist', condition: 'Mist' }
  };
  return mapping[code] || { icon: 'partly-cloudy', condition: 'Unknown' };
};

export const fetchWeatherData = async (city: string = 'London'): Promise<WeatherData> => {
  try {
    // Fetch current weather
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    console.log('Weather API Response:', data); // For debugging

    // Create weather data object
    const weatherData: WeatherData = {
      current: {
        location: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp), // Already in Celsius because of units=metric
        condition: getWeatherInfo(data.weather[0].icon).condition,
        feelsLike: Math.round(data.main.feels_like),
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        date: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        icon: getWeatherInfo(data.weather[0].icon).icon
      },
      hourly: Array(7).fill(null).map((_, i) => ({
        time: new Date(Date.now() + i * 3600 * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true
        }),
        temperature: Math.round(data.main.temp),
        icon: getWeatherInfo(data.weather[0].icon).icon
      })),
      daily: [{
        day: 'Tomorrow',
        temperature: Math.round(data.main.temp),
        condition: getWeatherInfo(data.weather[0].icon).condition,
        icon: getWeatherInfo(data.weather[0].icon).icon
      }],
      highlights: {
        chanceOfRain: 30, // Example value as this is not available in current weather
        uvIndex: 5, // Example value as this is not available in current weather
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][
          Math.round(((data.wind.deg || 0) % 360) / 45) % 8
        ],
        humidity: data.main.humidity
      },
      sunriseSunset: {
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        lengthOfDay: (() => {
          const diff = data.sys.sunset - data.sys.sunrise;
          const hours = Math.floor(diff / 3600);
          const minutes = Math.round((diff % 3600) / 60);
          return `${hours}h ${minutes}m`;
        })()
      },
      otherCities: [
        { city: 'New York', country: 'US', temperature: 20, high: 22, low: 18, icon: 'partly-cloudy' },
        { city: 'London', country: 'GB', temperature: 15, high: 17, low: 13, icon: 'cloudy' },
        { city: 'Tokyo', country: 'JP', temperature: 25, high: 27, low: 23, icon: 'clear-day' },
        { city: 'Paris', country: 'FR', temperature: 18, high: 20, low: 16, icon: 'partly-cloudy' }
      ]
    };

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
