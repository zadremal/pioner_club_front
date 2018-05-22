import React, { Component, Fragment } from "react";

class Menu extends Component {
  state = {
    menu: []
  };
  componentDidMount = () => {
    const menuPart = 4;
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
    return (
      <Fragment>
        {menu.map(category => {
          return (
            <div key={category.id}>
              <h1> {category.dish_category}</h1>
              {category.dish.map(dish => {
                return (
                  <span key={dish.id}>
                    <h3>{dish.name}</h3>
                    <h6>{dish.consist}</h6>
                    <h6>{dish.price} p</h6>
                  </span>
                );
              })}
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Menu;
