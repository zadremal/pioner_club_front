import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./UI";
import Mainscreen from "./Mainscreen";
import Header from "./Header";
import Afisha from "./Mainscreen/Afisha";
import Deals from "./Mainscreen/Deals";
import Footer from "./Footer";
import Birthday from "./Birthday";
import Banket from "./Banket";
import Club from "./Club";
import Karaoke from "./Karaoke";
import Craft from "./Craft";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Main>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/birthday" component={BirthdayRoute} />
            <Route path="/club" component={ClubRoute} />
            <Route path="/karaoke" component={KaraokeRoute} />
            <Route path="/banket" component={BanketRoute} />
            <Route path="/craft" component={CraftRoute} />
          </Main>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

class HomeRoute extends Component {
  render() {
    return (
      <Fragment>
        <Mainscreen />
        <Afisha />
        <Deals />
      </Fragment>
    );
  }
}

class BirthdayRoute extends Component {
  render() {
    return (
      <Fragment>
        <Birthday />
      </Fragment>
    );
  }
}

class BanketRoute extends Component {
  render() {
    return (
      <Fragment>
        <Banket />
      </Fragment>
    );
  }
}

class ClubRoute extends Component {
  render() {
    return (
      <Fragment>
        <Club />
      </Fragment>
    );
  }
}
class KaraokeRoute extends Component {
  render() {
    return (
      <Fragment>
        <Karaoke />
      </Fragment>
    );
  }
}

class CraftRoute extends Component {
  render() {
    return (
      <Fragment>
        <Craft />
      </Fragment>
    );
  }
}
