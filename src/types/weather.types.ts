// Data Layer: Type definitions for weather data structures
// Defines interfaces for all weather-related data entities

export interface CurrentWeather {
  location: string;
  country: string;
  temperature: number;
  condition: string;
  feelsLike: number;
  high: number;
  low: number;
  date: string;
  day: string;
  icon: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  icon: string;
}

export interface DailyForecast {
  day: string;
  temperature: number;
  condition: string;
  icon: string;
}

export interface TodayHighlight {
  chanceOfRain: number;
  uvIndex: number;
  windSpeed: number;
  windDirection: string;
  humidity: number;
}

export interface SunriseSunset {
  sunrise: string;
  sunset: string;
  lengthOfDay: string;
}

export interface CityWeather {
  city: string;
  country: string;
  temperature: number;
  high: number;
  low: number;
  icon: string;
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  highlights: TodayHighlight;
  sunriseSunset: SunriseSunset;
  otherCities: CityWeather[];
}
