import React, { Component } from "react";
import { Image } from "../Styled";
import { Helmet } from "react-helmet";
import kitchen1 from "./kitch1.jpg";
import kitchen2 from "./kitch2.jpg";

class Menu extends Component {
  state = {
    menu: []
  };
  componentDidMount = () => {
    const menuPart = 1;
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
          <title>Пионер - меню кухни</title>
          <link rel="canonical" href="https://pioner-club.com/menu/kitchen" />
        </Helmet>
        <Image src={kitchen1} />
        <Image src={kitchen2} />
      </div>
    );
  }
}

export default Menu;
