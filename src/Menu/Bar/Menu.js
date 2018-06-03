import React, { Component } from "react";
import { Image } from "../Styled";

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
        <Image src={bar1} />
        <Image src={bar2} />
      </div>
    );
  }
}

export default Menu;
