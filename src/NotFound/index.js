import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LandingMainscreen, Overlay } from "../UI";
import { Heading } from "../UI/section";

import background from "./back.jpg";

class index extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <LandingMainscreen background={background}>
        <div className="container">
          <Overlay />
          <Heading contrast>Похоже что такой страницы не существует</Heading>
          <Heading contrast>
            посмотрите лучше наши <Link to="/deals">Акции</Link>
          </Heading>
        </div>
      </LandingMainscreen>
    );
  }
}

export default index;
