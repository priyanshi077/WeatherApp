// Logic/Service Layer: Weather service for business logic
// Transforms and manages weather data, handles state logic

import { WeatherData, CurrentWeather, HourlyForecast, TodayHighlight } from '../types/weather.types';
import { fetchWeatherData } from '../api/weatherApi';

class WeatherService {
  private cache: Map<string, { data: WeatherData; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000;

  async getWeatherForCity(city: string): Promise<WeatherData> {
    const cached = this.cache.get(city);

    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    const data = await fetchWeatherData(city);
    this.cache.set(city, { data, timestamp: Date.now() });

    return data;
  }

  formatTemperature(temp: number, unit: 'C' | 'F' = 'C'): string {
    if (unit === 'F') {
      return `${Math.round((temp * 9) / 5 + 32)}°F`;
    }
    return `${Math.round(temp)}°C`;
  }

  getUVIndexLevel(uvIndex: number): string {
    if (uvIndex <= 2) return 'Low';
    if (uvIndex <= 5) return 'Moderate';
    if (uvIndex <= 7) return 'High';
    if (uvIndex <= 10) return 'Very High';
    return 'Extreme';
  }

  getHumidityLevel(humidity: number): string {
    if (humidity < 30) return 'Low';
    if (humidity < 60) return 'Comfortable';
    return 'High';
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const weatherService = new WeatherService();
