// Logic/Service Layer: Transformation + Business Logic + Caching

import { WeatherData } from '../types/weather.types';
import { fetchWeatherData } from '../api/weatherApi';

class WeatherService {
  private cache: Map<string, { data: WeatherData; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000;

  private getWeatherInfo(code: string): { icon: string; condition: string } {
    const mapping: { [key: string]: { icon: string; condition: string } } = {
      "01d": { icon: "clear-day", condition: "Clear Sky" },
      "01n": { icon: "clear-night", condition: "Clear Sky" },
      "02d": { icon: "partly-cloudy", condition: "Partly Cloudy" },
      "02n": { icon: "partly-cloudy", condition: "Partly Cloudy" },
      "03d": { icon: "cloudy", condition: "Cloudy" },
      "03n": { icon: "cloudy", condition: "Cloudy" },
      "04d": { icon: "cloudy", condition: "Overcast" },
      "04n": { icon: "cloudy", condition: "Overcast" },
      "09d": { icon: "rain", condition: "Rain" },
      "09n": { icon: "rain", condition: "Rain" },
      "10d": { icon: "rain", condition: "Rain" },
      "10n": { icon: "rain", condition: "Rain" },
      "11d": { icon: "thunderstorm", condition: "Thunderstorm" },
      "11n": { icon: "thunderstorm", condition: "Thunderstorm" },
      "13d": { icon: "snow", condition: "Snow" },
      "13n": { icon: "snow", condition: "Snow" },
      "50d": { icon: "mist", condition: "Mist" },
      "50n": { icon: "mist", condition: "Mist" },
    };
    return mapping[code] || { icon: "partly-cloudy", condition: "Unknown" };
  }

  async getWeatherForCity(city: string): Promise<WeatherData> {
    const cached = this.cache.get(city);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    const raw = await fetchWeatherData(city);

    // ✅ Transform RAW API response here:
    const data: WeatherData = {
      current: {
        location: raw.name,
        country: raw.sys.country,
        temperature: Math.round(raw.main.temp),
        condition: this.getWeatherInfo(raw.weather[0].icon).condition,
        feelsLike: Math.round(raw.main.feels_like),
        high: Math.round(raw.main.temp_max),
        low: Math.round(raw.main.temp_min),
        date: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        icon: this.getWeatherInfo(raw.weather[0].icon).icon,
      },

      hourly: Array(7).fill(null).map((_, i) => ({
        time: new Date(Date.now() + i * 3600 * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
        }),
        temperature: Math.round(raw.main.temp),
        icon: this.getWeatherInfo(raw.weather[0].icon).icon,
      })),

      daily: [
        {
          day: 'Tomorrow',
          temperature: Math.round(raw.main.temp),
          condition: this.getWeatherInfo(raw.weather[0].icon).condition,
          icon: this.getWeatherInfo(raw.weather[0].icon).icon,
        },
      ],

      highlights: {
        chanceOfRain: 30,
        uvIndex: 5,
        windSpeed: Math.round(raw.wind.speed * 3.6),
        windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][
          Math.round(((raw.wind.deg || 0) % 360) / 45) % 8
        ],
        humidity: raw.main.humidity,
      },

      sunriseSunset: {
        sunrise: new Date(raw.sys.sunrise * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        sunset: new Date(raw.sys.sunset * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        lengthOfDay: (() => {
          const diff = raw.sys.sunset - raw.sys.sunrise;
          const hours = Math.floor(diff / 3600);
          const minutes = Math.round((diff % 3600) / 60);
          return `${hours}h ${minutes}m`;
        })(),
      },

      otherCities: [
        { city: 'New York', country: 'US', temperature: 20, high: 22, low: 18, icon: 'partly-cloudy' },
        { city: 'London', country: 'GB', temperature: 15, high: 17, low: 13, icon: 'cloudy' },
        { city: 'Tokyo', country: 'JP', temperature: 25, high: 27, low: 23, icon: 'clear-day' },
        { city: 'Paris', country: 'FR', temperature: 18, high: 20, low: 16, icon: 'partly-cloudy' },
      ],
    };

    this.cache.set(city, { data, timestamp: Date.now() });
    return data;
  }

  // Extra helper methods below...
}

export const weatherService = new WeatherService();
