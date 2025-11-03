// Logic/Service Layer: Custom React hook for weather state management
// Manages weather data fetching and state updates

import { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather.types';
import { weatherService } from '../services/weatherService';

export const useWeather = (initialCity: string = 'India') => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<string>(initialCity);
  const [temperatureUnit, setTemperatureUnit] = useState<'C' | 'F'>('C');

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await weatherService.getWeatherForCity(currentCity);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [currentCity]);

  const changeCity = (city: string) => {
    setCurrentCity(city);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(prev => prev === 'C' ? 'F' : 'C');
  };

  return {
    weatherData,
    loading,
    error,
    currentCity,
    temperatureUnit,
    changeCity,
    toggleTemperatureUnit
  };
};
