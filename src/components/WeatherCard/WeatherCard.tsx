import React from "react";

import { ExtendedForecastData } from "../../api/types";
import WeatherCardItem from "../WeatherCardItem";

interface WeatherCardProps {
  data: ExtendedForecastData[];
}

class WeatherCard extends React.Component<WeatherCardProps> {
  render() {
    let data = this.props.data.slice(-4);
    return (
      <div className="weather-card">
        {data.map((item, index) => (
          <WeatherCardItem item={item} key={`weather-card-${index}`} />
        ))}
      </div>
    );
  }
}

export default WeatherCard;
