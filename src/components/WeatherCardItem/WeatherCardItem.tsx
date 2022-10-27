import React from "react";

import { ExtendedForecastData } from "../../api/types";
import { selectWeatherIcon } from "../../utils/selectWeatherIcon";

interface WeatherCardItemProps {
  item: ExtendedForecastData;
}

class WeatherCardItem extends React.Component<WeatherCardItemProps> {
  render() {
    const { item } = this.props;
    const icon = selectWeatherIcon(item.weather.main);

    return (
      <div className="weather-card-item">
        <div>{item.day}</div>
        <img src={`/assets/weather/${icon}`} alt="weather-icon" />
        <div className="weather-detail-highlight">
          <span>{item.temp.toFixed(1)}</span>
          <span>&deg;</span>
        </div>
      </div>
    );
  }
}

export default WeatherCardItem;
