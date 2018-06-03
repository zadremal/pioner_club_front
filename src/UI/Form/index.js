import React, { Component, Fragment } from "react";

import { Form, Input, Label, Heading, Submit, Error } from "./Styled";
import { ButtonUpPr } from "../buttons";
import axios from "axios";

class index extends Component {
  state = {
    name: "",
    phone: "",
    success: false,
    error: false,
    errorMessage: ""
  };

  handleInput = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
      error: false,
      errorMessage: ""
    });
  };

  checkFormFilled = () => {
    if (
      this.state.name.length !== 0 &&
      this.state.phone.replace(/ /g, "").length === 12
    ) {
      console.log("here");
      return true;
    } else {
      this.setState({
        error: true,
        errorMessage: "пожалуйста, заполните поля формы перед отправкой"
      });
      return false;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.checkFormFilled() && this.submitForm();
  };

  submitForm = () => {
    const data = JSON.stringify({
      name: this.state.name.replace(/ /g, ""),
      phone: this.state.phone.replace(/ /g, "")
    });

    const apiServer = process.env.REACT_APP_API_SERVER;
    const apiServerToken = process.env.REACT_APP_API_SERVER_TOKEN;

    axios({
      method: "POST",
      url: `${apiServer}/api/v1/lead/submit/`,
      data: data,
      headers: {
        Authorization: apiServerToken,
        "Content-Type": "application/json"
      }
    })
      .catch(error => {
        this.setState({
          error: true,
          errorMessage:
            "что-то пошло не так. повторите попытку позднее, или позвоните нам"
        });
        return new Error(error);
      })
      .then(res => {
        res.status === 201
          ? this.setState({
              success: true
            })
          : this.setState({
              error: true,
              errorMessage:
                "что-то пошло не так. повторите попытку позднее, или позвоните нам"
            });
      });
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    const { name, phone, success, error, errorMessage } = this.state;
    return (
      <Fragment>
        <Heading>
          {success
            ? "Спасибо! Мы подтвердим Вашу бронь ближе к выходным"
            : "Оставьте свои контакты, и мы зарезервируем столик для Вас"}
        </Heading>

        {error && <Error>{errorMessage}</Error>}

        <Form>
          <Label for="name">Ваше имя:*</Label>
          <Input
            required
            mask="Aaaaaaaaaaaaaaaaaaaaa"
            placeholderChar=" "
            onChange={this.handleInput}
            type="text"
            name="name"
            value={name}
            formatCharacters={{
              a: {
                validate(char) {
                  return /([a-zа-яё]+)/.test(char);
                },
                transform(char) {
                  return char.toLowerCase();
                }
              },
              A: {
                validate(char) {
                  return /([A-Za-zА-ЯЁа-яё]+)/.test(char);
                },
                transform(char) {
                  return char.toUpperCase();
                }
              }
            }}
          />
          <Label for="phone">Номер телефона:*</Label>
          <Input
            required
            mask="\+7 111 111 11 11"
            onChange={this.handleInput}
            placeholderChar=" "
            type="text"
            name="phone"
            value={phone}
          />
          <Submit>
            <ButtonUpPr onClick={this.onSubmit} contrast>
              Зарезервировать
            </ButtonUpPr>
          </Submit>
        </Form>
      </Fragment>
    );
  }
}

export default index;
