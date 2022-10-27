import React from "react";
import { connect } from "react-redux";

import CurrentDayCard from "../CurrentDayCard";
import WeatherCard from "../WeatherCard";
import { AppStore } from "../../store/store";
import { ExtendedForecastData } from "../../api/types";

interface StateProps {
  forecastData?: ExtendedForecastData[];
}

interface CardBodyProps extends StateProps {}

class CardBody extends React.Component<CardBodyProps> {
  render() {
    let { forecastData } = this.props;

    if (!forecastData?.length) {
      return null;
    }

    let todayData = forecastData[0];
    let nextDaysData = forecastData.slice(-4);

    return (
      <div className="body">
        <CurrentDayCard data={todayData} />
        <WeatherCard data={nextDaysData} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => ({
  forecastData: state.weather.extendedWeatherData,
});

export default connect(mapStateToProps, null)(CardBody);
