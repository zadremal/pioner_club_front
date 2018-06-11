import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import DealsList from "./List";
import DealsDetail from "./Detail";
import { Helmet } from "react-helmet";
class index extends Component {
  state = {
    deals: []
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .catch(err => console.log("Looks like there was an error", err))
      .then(data => {
        this.setState({
          deals: data
        });
      })
      .catch(err => console.log("Looks like there was an error", err));
  };

  render() {
    const { path } = this.props.match;
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
            return <DealsList deals={this.state.deals} />;
          }}
        />
        <Route
          path="/deals/:id"
          render={props => {
            return (
              <Fragment>
                <DealsDetail deals={this.state.deals} {...props} />
              </Fragment>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default index;
