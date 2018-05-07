import React, { Component, Fragment } from "react";
import "./App.css";
import Mainscreen from "./Mainscreen";
import Header from "./Header";
import Afisha from "./Mainscreen/Afisha";
import Deals from "./Mainscreen/Deals";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Mainscreen />
        <Afisha />
        <Deals />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
