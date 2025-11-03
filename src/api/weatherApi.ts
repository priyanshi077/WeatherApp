// Data Layer: API module for weather data
// Handles all data fetching and API communication (currently mocked)

import { WeatherData } from '../types/weather.types';

export const fetchWeatherData = async (city: string = 'India'): Promise<WeatherData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    current: {
      location: city,
      country: 'India',
      temperature: 26,
      condition: 'Cloudy',
      feelsLike: 26,
      high: 27,
      low: 10,
      date: '24 Dec, 2023',
      day: 'Monday',
      icon: 'partly-cloudy'
    },
    hourly: [
      { time: '1PM', temperature: 20, icon: 'partly-cloudy' },
      { time: '2PM', temperature: 21, icon: 'partly-cloudy' },
      { time: '3PM', temperature: 20, icon: 'partly-cloudy' },
      { time: '4PM', temperature: 19, icon: 'partly-cloudy' },
      { time: '5PM', temperature: 18, icon: 'partly-cloudy' },
      { time: '6PM', temperature: 18, icon: 'partly-cloudy' },
      { time: '7PM', temperature: 15, icon: 'partly-cloudy' }
    ],
    daily: [
      { day: 'Tomorrow', temperature: 14, condition: 'Thunder storm', icon: 'thunderstorm' }
    ],
    highlights: {
      chanceOfRain: 42,
      uvIndex: 3,
      windSpeed: 12,
      windDirection: 'NE',
      humidity: 65
    },
    sunriseSunset: {
      sunrise: '6:45 AM',
      sunset: '5:30 PM',
      lengthOfDay: '10h 23m'
    },
    otherCities: [
      { city: 'USA', country: 'USA', temperature: 14, high: 23, low: 10, icon: 'partly-cloudy' },
      { city: 'Dubai', country: 'UAE', temperature: 27, high: 23, low: 10, icon: 'partly-cloudy' },
      { city: 'China Nuevo', country: 'China', temperature: 16, high: 23, low: 10, icon: 'partly-cloudy' },
      { city: 'Canada', country: 'Canada', temperature: 26, high: 23, low: 10, icon: 'partly-cloudy' }
    ]
  };
};

export const searchCity = async (query: string): Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  const cities = ['India', 'USA', 'Dubai', 'China', 'Canada', 'London', 'Paris', 'Tokyo'];
  return cities.filter(city => city.toLowerCase().includes(query.toLowerCase()));
};
