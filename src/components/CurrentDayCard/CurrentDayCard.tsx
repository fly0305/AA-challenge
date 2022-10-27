import React from "react";

import { selectWeatherIcon } from "../../utils/selectWeatherIcon";

interface CurrentDayCardProps {
  data: {
    day: string;
    temp: number;
    weather: {
      id: number;
      main: string;
    };
  };
}

class CurrentDayCard extends React.Component<CurrentDayCardProps> {
  render() {
    const weatherData = this.props.data;
    const icon = selectWeatherIcon(weatherData.weather.main);
    return (
      <div className="current-card">
        <div className="current-card-body">
          <p className="current-card-title">Today</p>
          <div className="current-card-content">
            <div>
              <img
                src={`/assets/weather/${icon}`}
                alt="weather icon"
                width={100}
                height={110}
              />
            </div>
            <div className="weather-detail">
              <div className="weather-detail-highlight">
                <span>{weatherData.temp.toFixed(1)}</span>
                <span>&deg;</span>
              </div>
              <div>{weatherData.weather.main}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentDayCard;
