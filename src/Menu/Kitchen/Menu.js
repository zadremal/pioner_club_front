import React, { Component } from "react";
import MenuList from "../MenuList";

class Menu extends Component {
  state = {
    menu: []
  };
  componentDidMount = () => {
    const menuPart = 1;
    const fetchUrl = `http://localhost:8000/api/v1/menu/${menuPart}/`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          menu: data
        });
      });
  };

  render() {
    const { menu } = this.state;
    return <MenuList data={menu} />;
  }
}

export default Menu;
