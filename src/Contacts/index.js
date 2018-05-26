import React, { Component } from "react";
import axios from "axios";

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
    event.preventDefault();

    const initinalState = {
      name: "",
      phone: "",
      email: ""
    };

    axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/lead/submit/",
      data: JSON.stringify(this.state),
      headers: {
        Authorization: "Token f9b9ba6e60a9a40a05aa216017566dfa803c5b70",
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
      if (res.status === 201) {
        alert("Сообщение успешно отправлено!");
      }
    });
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
