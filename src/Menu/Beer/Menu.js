import React, { Component, Fragment } from "react";
import { BottleList, BeerList } from "./List";
import { Helmet } from "react-helmet";
import Loader from "../../UI/Loader";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      beer: [],
      bottleBeer: []
    };

    this.fetchMenu = this.fetchMenu.bind(this);
  }

  fetchMenu = (url, stateName) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          [stateName]: data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const bottleUrl = `${apiServer}/api/v1/menu/beer/bottle`;
    const beerUrl = `${apiServer}/api/v1/menu/beer`;

    this.fetchMenu(bottleUrl, "bottleBeer");
    this.fetchMenu(beerUrl, "beer");
  };

  render() {
    const { bottleBeer, beer } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - меню пивного бара</title>
          <link rel="canonical" href="https://pioner-club.com/menu/beer" />
        </Helmet>
        {bottleBeer.length > 0 ? (
          <BottleList array={bottleBeer} title="Бутылочное пиво" />
        ) : (
          <Loader />
        )}
        {beer.length > 0 ? (
          <BeerList array={beer} title="Разливное пиво" />
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

export default Menu;
