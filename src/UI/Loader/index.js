import React, { Component } from "react";
import { Loader } from "./Styled";
import { colorPr } from "../index";

import ReactLoading from "react-loading";

class index extends Component {
  state = {
    error: false
  };

  componentDidMount = () => {
    this.errorTimeout = setTimeout(this.handleError, 7000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.errorTimeout);
  };

  handleError = () => {
    this.setState({
      error: true
    });
  };

  render() {
    return (
      <Loader>
        {!this.state.error ? (
          <ReactLoading type={"spin"} color={colorPr} />
        ) : (
          "Похоже что у нас возникли проблемы с сайтом. Позвоните нам "
        )}
      </Loader>
    );
  }
}

export default index;
