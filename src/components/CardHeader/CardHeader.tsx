import React from "react";
import { clsx } from "clsx";

type HeaderProps = {
  cities: string[];
  current: string;
  setCity: (city: string) => void;
};

class CardHeader extends React.Component<HeaderProps> {
  setCity = (city: string) => {
    this.props.setCity(city);
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
