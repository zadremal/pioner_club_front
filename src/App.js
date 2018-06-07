import React, { Component, Fragment } from "react";
import "./App.css";
import "whatwg-fetch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Main } from "./UI";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Birthday from "./Birthday";
import Banket from "./Banket";
import Club from "./Club";
import Karaoke from "./Karaoke";
import Menu from "./Menu";
import Craft from "./Craft";
import Photo from "./Photo/";
import PartyList from "./Party/List";
import PartyDetail from "./Party/Detail";
import Deals from "./Deals";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

import { Content } from "./UI";

class App extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        menuOpen: !prevState.menuOpen
      };
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Navigation
            onMenuToggle={this.toggleMenu}
            menuIsOpen={this.state.menuOpen}
          />
          <Header
            menuIsOpen={this.state.menuOpen}
            onMenuToggle={this.toggleMenu}
          />
          <Content menuIsOpen={this.state.menuOpen}>
            <Main id="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/birthday" component={Birthday} />
                <Route path="/club" component={Club} />
                <Route path="/karaoke" component={Karaoke} />
                <Route path="/banket" component={Banket} />
                <Route path="/craft" component={Craft} />
                <Route path="/photo" component={Photo} />
                <Route exact path="/parties" component={PartyList} />
                <Route path="/parties/:id" component={PartyDetail} />
                <Route
                  exact
                  path="/deals/1"
                  render={() => <Redirect to="/birthday" />}
                />
                <Route path="/deals" component={Deals} />
                <Route path="/menu" component={Menu} />
                <Route path="/contacts" component={Contacts} />
                <Route component={NotFound} />
              </Switch>
            </Main>
            <Footer />
          </Content>
        </Fragment>
      </Router>
    );
  }
}

export default App;
