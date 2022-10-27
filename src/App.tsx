import React from "react";
import { connect } from "react-redux";

import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { fetchWeather } from "./store/fetchWeather";
import { AnyAction } from "redux";
import { AppStore } from "./store/store";
import { ThunkDispatch } from "redux-thunk";
import Spinner from "./components/Spinner";

import "@fontsource/work-sans";
import "@fontsource/teko";

const cities = ["OTTAWA", "TORONTO", "BURNABY"];

type DispatchProps = {
  fetchWeather: (city: string) => void;
};

type StateProps = {
  loading: boolean;
};

type AppState = {
  city: string;
};

interface IAppProps extends DispatchProps, StateProps {}

class App extends React.Component<IAppProps, AppState> {
  state: AppState = {
    city: "OTTAWA",
  };

  interval: NodeJS.Timer | null = null;

  componentDidMount(): void {
    this.interval = setInterval(() => {
      this.props.fetchWeather(this.state.city);
    }, 5000);
  }

  componentWillUnmount(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setCity = (city: string) => {
    this.setState({
      ...this.state,
      city,
    });
    this.props.fetchWeather(city);
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="app">
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <CardHeader
              cities={cities}
              setCity={this.setCity}
              current={this.state.city}
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
