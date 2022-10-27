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
    let forecastData = this.props.forecastData;
    return (
      <div className="body">
        {forecastData?.length && (
          <React.Fragment>
            <CurrentDayCard data={forecastData[0]} />
            <WeatherCard data={forecastData} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => ({
  forecastData: state.weather.extendedWeatherData,
});

export default connect(mapStateToProps, null)(CardBody);
