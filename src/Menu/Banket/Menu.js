import React, { Component } from "react";
import MenuList from "../MenuList";
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
    const { menu } = this.state;
    return <MenuList data={menu} />;
  }
}

export default Menu;