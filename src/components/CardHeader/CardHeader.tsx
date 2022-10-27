import React from "react";
import { clsx } from "clsx";

type HeaderProps = {
  cities: string[];
  current: string;
  setCity: (country: string) => void;
};

class CardHeader extends React.Component<HeaderProps> {
  setCity = (country: string) => {
    this.props.setCity(country);
  };

  render() {
    const { cities, current } = this.props;

    return (
      <ul className="header">
        {cities.map((city, index) => (
          <li
            className={clsx("city", city === current && "active")}
            key={`${city}-${index}`}
            onClick={() => this.setCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    );
  }
}

export default CardHeader;
