// Logic/Service Layer: Custom React hook for weather state management
// Manages weather data fetching and state updates

import { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather.types';
import { weatherService } from '../services/weatherService';

export const useWeather = (initialCity: string = 'London') => {
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
        setError('City not found. Please try another city name.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [currentCity]);

  const changeCity = async (city: string) => {
    
    setCurrentCity(city.trim())
  }

  const toggleTemperatureUnit = () => {
    if (!weatherData) return;

    const currentTemp = weatherData.current.temperature;

    const updatedTemp =
      temperatureUnit === 'C'
        ? (currentTemp * 9) / 5 + 32 // C → F
        : ((currentTemp - 32) * 5) / 9; // F → C

    setWeatherData({
      ...weatherData,
      current: {
        ...weatherData.current,
        temperature: Number(updatedTemp.toFixed(1)),
      },
    });
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
