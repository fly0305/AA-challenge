import React from "react";
import { Bars } from "react-loader-spinner";

class Spinner extends React.Component {
  render() {
    return (
      <div className="loader">
        <Bars color="#4fa94d" width={50} height={50} />
      </div>
    );
  }
}

export default Spinner;
