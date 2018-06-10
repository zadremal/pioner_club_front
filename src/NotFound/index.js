import React, { Component } from "react";
import { Mainscreen, Overlay } from "../UI";
import { Heading } from "../UI/section";

import background from "./back.jpg";

class index extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Mainscreen background={background}>
        <div className="container">
          <Overlay />
          <Heading contrast>
            Похоже что такой страницы не существоует. Заходитие позднее
          </Heading>
        </div>
      </Mainscreen>
    );
  }
}

export default index;
