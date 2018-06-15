import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import fetchData from "../UTILS/Fetch";
import DealsList from "./List";
import DealsDetail from "./Detail";

class index extends Component {
  state = {
    deals: []
  };

  updateState = data => {
    this.setState({
      deals: data
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    fetchData("/api/v1/deals/", this.updateState);
  };

  render() {
    const { path } = this.props.match;
    const { deals } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title> Пионер - акции и спецпредложения</title>
          <link rel="canonical" href="https://pioner-club.com/deals" />
          <meta
            name="description"
            content="скидки и подарки каждые выходные: скидки на день рождения, скидки для мальчишников и девишников, скидки для больших компаний."
          />
          <meta
            name="keywords"
            content="дискотека для взрослых, дискотека испытателей, пионер испытателей, крафт, крафтовое пиво, пионер, пионеры, ночной клуб пионер, вынос знамени, посвящение в пионеры ночной клуб, ночные клубы, ретро клуб, ретро клубы, ретро дискотека, вечеринка, караоке, караоке бар, караоке кафе, клуб пионер, ретро вечеринка, банкет, праздник, отпраздновать, танцевать, музыка, день рождения, Dj, клубная музыка, танцы, ночь, новый год, ресторан, банкетный зал, проведение банкетов, юбилей, девишник, мальчишник, знакомства, познакомиться, бесплатный вход, караоке, кафе, бар, коктейль, ужин, скидки, недорого"
          />
        </Helmet>
        <Route
          exact
          path={`${path}`}
          render={() => {
            return <DealsList deals={deals} />;
          }}
        />
        <Route
          path="/deals/:id"
          render={props => {
            return <DealsDetail deals={deals} {...props} />;
          }}
        />
      </Fragment>
    );
  }
}

export default index;
