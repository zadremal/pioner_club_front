import React, { Component, Fragment } from "react";
import "./App.css";
import Mainscreen from "./Mainscreen";
import Header from "./Header";
import Afisha from "./Mainscreen/Afisha";
import Deals from "./Mainscreen/Deals";
import Footer from "./Footer";
import Birthday from "./Birthday";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./UI";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Main>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/birthday" component={BirthdayRoute} />
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
