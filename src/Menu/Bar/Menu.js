import React, { Component } from "react";
import { Image } from "../Styled";
import { Helmet } from "react-helmet";

import bar1 from "./bar1.jpg";
import bar2 from "./bar2.jpg";

class Menu extends Component {
  state = {
    menu: []
  };
  componentDidMount = () => {
    const menuPart = 2;
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/menu/${menuPart}/`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          menu: data
        });
      });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Пионер - меню бара</title>
          <link rel="canonical" href="https://pioner-club.com/menu/bar" />
        </Helmet>
        <Image src={bar1} alt="Меню бара клуба Пионер" />
        <Image src={bar2} alt="Меню бара клуба Пионер" />
      </div>
    );
  }
}

export default Menu;
