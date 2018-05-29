import React, { Component, Fragment } from "react";

import { Form, Input, Label, Heading, Submit } from "./Styled";
import { ButtonUp } from "../buttons";
import { colorPr } from "../index";

class index extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleInput = e => {
    const name = e.target.name;
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({
      name: this.state.name.replace(/ /g, ""),
      phone: this.state.phone.replace(/\W/g, "")
    });
    console.log(data);
  };

  render() {
    return (
      <Fragment>
        <Heading>
          Оставьте свои контакты, и мы зарезервируем столик для Вас
        </Heading>
        <Form>
          <Label fhtmlFor="name">Ваше имя:*</Label>
          <Input
            mask="Aaaaaaaaaaaaaa"
            placeholderChar=" "
            onChange={this.handleInput}
            type="text"
            name="name"
            formatCharacters={{
              a: {
                validate(char) {
                  return /([а-яё]+)/.test(char);
                },
                transform(char) {
                  return char.toLowerCase();
                }
              },
              A: {
                validate(char) {
                  return /([А-яё]+)/.test(char);
                },
                transform(char) {
                  return char.toUpperCase();
                }
              }
            }}
            autoFocus
          />
          <Label htmlFor="phone">Номер телефона:*</Label>
          <Input
            mask="\+7 111 111 11 11"
            onChange={this.handleInput}
            placeholderChar=" "
            type="text"
            name="phone"
          />
          <Submit>
            <ButtonUp onClick={this.onSubmit} contrast color={colorPr}>
              Зарезервировать
            </ButtonUp>
          </Submit>
        </Form>
      </Fragment>
    );
  }
}

export default index;
