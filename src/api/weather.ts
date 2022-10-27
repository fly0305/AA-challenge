const baseUrl = 'https://api.openweathermap.org/data/2.5';
const REACT_APP_WEATHER_API_KEY = "54cdc7c4e02804d23aecdfa73cc1b25e"

export const fetchWeatherData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${REACT_APP_WEATHER_API_KEY}`;
  }
  
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/forecast?q=${city}&units=metric&cnt=5&appid=${REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/forecast/lat=${city.lat}&lon=${city.lng}&appid=${REACT_APP_WEATHER_API_KEY}`;
  }

  return await (await fetch(url)).json();
};
