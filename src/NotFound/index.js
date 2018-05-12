import React, { Component } from "react";
import { Mainscreen } from "../UI/landing";
import { Heading } from "../UI/section";

class index extends Component {
  render() {
    return (
      <Mainscreen>
        <div className="container">
          <Heading>
            Похоже что такой страницы не существоует. Заходитие позднее
          </Heading>
        </div>
      </Mainscreen>
    );
  }
}

export default index;
