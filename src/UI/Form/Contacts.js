import React, { Component, Fragment } from "react";

import {
  Form,
  Input,
  StandartInput,
  Label,
  TextArea,
  Submit,
  Error,
  Response
} from "./Styled";
import { colorPr } from "../index";
import { ButtonUpPr } from "../buttons";
import axios from "axios";
import ReactLoading from "react-loading";
class index extends Component {
  state = {
    name: "",
    email: "",
    textarea: "...",
    submitted: false,
    success: false,
    error: false,
    message: ""
  };

  handleInput = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
      error: false,
      message: ""
    });
  };

  checkFormFilled = () => {
    if (
      this.state.name.length !== 0 &&
      this.state.email.length > 6 &&
      this.state.text.length > 10
    ) {
      return true;
    } else {
      this.setState({
        error: true,
        message: "пожалуйста, заполните поля формы перед отправкой"
      });
      return false;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.checkFormFilled() && this.submitForm();
  };

  submitForm = () => {
    this.setState({
      submitted: true
    });
    const data = JSON.stringify({
      name: this.state.name.replace(/ /g, ""),
      email: this.state.email,
      text: this.state.text
    });

    const apiServer = process.env.REACT_APP_API_SERVER;
    const apiServerToken = process.env.REACT_APP_API_SERVER_TOKEN;

    axios({
      method: "POST",
      url: `${apiServer}/api/v1/submit/feedback/`,
      data: data,
      headers: {
        Authorization: apiServerToken,
        "Content-Type": "application/json"
      }
    })
      .catch(error => {
        this.setState({
          error: true,
          message:
            "что-то пошло не так. повторите попытку позднее, или позвоните нам"
        });
        return new Error(error);
      })
      .then(res => {
        res.status === 201
          ? this.setState({
              success: true,
              message:
                "Спасибо! Мы получили Вашу сообщение. Будем рады ответить на него"
            })
          : this.setState({
              error: true,
              message:
                "что-то пошло не так. повторите попытку позднее, или позвоните нам"
            });
      });

    this.setState({
      name: "",
      text: "",
      email: ""
    });
  };

  render() {
    const { name, email, text, error, message, submitted } = this.state;
    return (
      <Fragment>
        {submitted ? (
          <Response>
            {message || <ReactLoading type={"spin"} color={colorPr} />}
          </Response>
        ) : (
          <Form>
            {error && <Error>{message}</Error>}
            <Label for="name">Ваше имя:*</Label>
            <Input
              id="name"
              required
              transform="capitalize"
              mask="******************"
              maskChar=""
              alwaysShowMask={false}
              onChange={this.handleInput}
              type="text"
              formatChars={{
                "*": "[A-Za-zА-ЯА-яЁё]"
              }}
              name="name"
              value={name}
            />

            <Label htmlFor="email">Email:*</Label>
            <StandartInput
              required
              onChange={this.handleInput}
              type="email"
              name="email"
              id="email"
              value={email}
            />
            <Label for="text">Ваше сообщение:*</Label>
            <TextArea
              value={text}
              onChange={this.handleInput}
              name="text"
              id="text"
              cols="60"
              rows="10"
            />
            <Submit>
              <ButtonUpPr onClick={this.onSubmit} contrast>
                Отправить
              </ButtonUpPr>
            </Submit>
          </Form>
        )}
      </Fragment>
    );
  }
}

export default index;
