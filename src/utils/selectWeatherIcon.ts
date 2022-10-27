export const selectWeatherIcon = (weatherType: string) => {
  switch(weatherType) {
    case "Clouds":
      return "cloudy.svg"
    case "Rain":
      return "rain.svg"
    case "Clear":
      return "sunny.svg"
    default: return
  }
}
