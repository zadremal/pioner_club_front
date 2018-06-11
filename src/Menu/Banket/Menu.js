import React, { Component } from "react";
import { Image } from "../Styled";
import { Helmet } from "react-helmet";
import banket1 from "./banket1.jpg";
import banket2 from "./banket2.jpg";
import banket3 from "./banket3.jpg";
import banket4 from "./banket4.jpg";
import banket5 from "./banket5.jpg";

class Menu extends Component {
  state = {
    menu: []
  };
  componentDidMount = () => {
    const menuPart = 3;
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
          <title>Пионер - банкетное меню</title>
          <link rel="canonical" href="https://pioner-club.com/menu/banket" />
        </Helmet>
        <Image src={banket1} />
        <Image src={banket2} />
        <Image src={banket3} />
        <Image src={banket4} />
        <Image src={banket5} />
      </div>
    );
  }
}

export default Menu;
