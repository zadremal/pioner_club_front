import React, { Component } from "react";

import { Mainscreen } from "../UI/landing";
class index extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };

  updateValue = event => {
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    });
  };

  submitForm = event => {
    const initinalState = {
      name: "",
      phone: "",
      email: ""
    };
    event.preventDefault();
    console.log(this.state);
    this.setState(initinalState);
  };

  render() {
    return (
      <Mainscreen>
        <form action="">
          <input
            onInput={this.updateValue}
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={this.state.name}
          />
          <input
            onInput={this.updateValue}
            name="phone"
            type="text"
            placeholder="Номер телефона"
            value={this.state.phone}
          />
          <input
            onInput={this.updateValue}
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
          />
          <button onClick={this.submitForm}>отправить</button>
        </form>
      </Mainscreen>
    );
  }
}

export default index;
