import React, { Component } from "react";
import axios from "axios";

import Section, { Heading } from "../UI/section";
import { Map, TextBlock, Wrap, Contact } from "./Styled";

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

    console.log(JSON.stringify(this.state));
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
      <Section>
        <Wrap>
          <TextBlock>
            <Heading>Контакты</Heading>
            <Contact>г. Санкт-Петербург, пр-кт Испытателей 26 к2</Contact>
            <Contact>тел: 8 (812) 981-53-35</Contact>
            <Contact>retro@pioner-club.com</Contact>
          </TextBlock>
          <Map>
            <iFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.520011552468!2d30.265994116099762!3d60.006452681900875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696343be8afe5d7%3A0x8c0a80070d563725!2z0J_QuNC-0L3QtdGA!5e0!3m2!1sru!2sru!4v1528031541930"
              width="100%"
              height="600"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen
            />
          </Map>
        </Wrap>
      </Section>
    );
  }
}

export default index;
