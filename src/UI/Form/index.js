import React, { Component, Fragment } from "react";
import ym from "react-yandex-metrika";
import { Form, Input, Label, Heading, Submit, Error, Response } from "./Styled";
import { colorPr } from "../index";
import { ButtonUpPr } from "../buttons";
import axios from "axios";
import ReactLoading from "react-loading";
class index extends Component {
  state = {
    name: "",
    phone: "",
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
      this.state.phone.replace(/_/g, "").length === 16
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
    ym("reachGoal", "party__form--conversion");
    this.setState({
      submitted: true
    });
    const data = JSON.stringify({
      name: this.state.name.replace(/ /g, ""),
      phone: this.state.phone.replace(/ /g, "")
    });

    const apiServer = process.env.REACT_APP_API_SERVER;
    const apiServerToken = process.env.REACT_APP_API_SERVER_TOKEN;

    axios({
      method: "POST",
      url: `${apiServer}/api/v1/submit/lead/`,
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
                "Спасибо! Мы получили Вашу заявку и подтвердим бронь ближе к выходным"
            })
          : this.setState({
              error: true,
              message:
                "что-то пошло не так. повторите попытку позднее, или позвоните нам"
            });
      });

    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    const { name, phone, error, message, submitted } = this.state;
    return (
      <Fragment>
        <Heading>
          Оставьте свои контакты, и мы зарезервируем столик для Вас
        </Heading>
        {submitted ? (
          <Response>
            {message || <ReactLoading type={"spin"} color={colorPr} />}
          </Response>
        ) : (
          <Form>
            {error && <Error>{message}</Error>}
            <Label for="name">Ваше имя:*</Label>
            <Input
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
            <Label for="phone">Номер телефона:*</Label>
            <Input
              required
              mask="\+7 999 999 99 99"
              onChange={this.handleInput}
              type="text"
              name="phone"
              value={phone}
            />
            <Submit>
              <ButtonUpPr onClick={this.onSubmit} contrast>
                Забронировать
              </ButtonUpPr>
            </Submit>
          </Form>
        )}
      </Fragment>
    );
  }
}

export default index;
