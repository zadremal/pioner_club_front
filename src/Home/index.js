import React, { Component, Fragment } from "react";

import Mainscreen from "./Mainscreen/";
import Afisha from "./Afisha/";
import Deals from "./Deals/";

class index extends Component {
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

export default index;
