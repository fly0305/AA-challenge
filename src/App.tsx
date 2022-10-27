import React from "react";
import { connect } from "react-redux";

import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { fetchWeather } from "./store/fetchWeather";
import { AnyAction } from "redux";

import "./app.less";
import "@fontsource/work-sans";
import "@fontsource/teko";
import { AppStore } from "./store/store";
import { ThunkDispatch } from "redux-thunk";
import Spinner from "./components/Spinner";

const cities = ["OTTAWA", "TORONTO", "BURNABY"];

type DispatchProps = {
  fetchWeather: (city: string) => void;
};

type StateProps = {
  loading: boolean;
};

type AppState = {
  country: string;
};

interface IAppProps extends DispatchProps, StateProps {}

class App extends React.Component<IAppProps, AppState> {
  state: AppState = {
    country: "OTTAWA",
  };

  componentDidMount(): void {
    this.props.fetchWeather("OTTAWA");
  }

  setCity = (country: string) => {
    this.setState({
      ...this.state,
      country,
    });
    this.props.fetchWeather(country);
  };

  render() {
    const loading = this.props.loading;
    return (
      <div className="app">
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <CardHeader
              cities={cities}
              setCity={this.setCity}
              current={this.state.country}
            />
            <CardBody />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => ({
  loading: state.app.isLoading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppStore, {}, AnyAction>
) => ({
  fetchWeather: (city: string) => dispatch(fetchWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
