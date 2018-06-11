import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Section, { Heading } from "../UI/section";
import { Map, TextBlock, Wrap, Contact, Feedback, FormBox } from "./Styled";
import Form from "../UI/Form/Contacts";

class index extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
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
      if (res.status === 201) {
        alert("Сообщение успешно отправлено!");
      }
    });
    this.setState(initinalState);
  };

  render() {
    return (
      <Section>
        <Helmet>
          <title>Пионер - кнотактная информация</title>
          <link rel="canonical" href="https://pioner-club.com/club" />
          <meta
            name="description"
            content="Дискотека для взрослых с десятилетней историей. Ноповторимый интерьер, обширное меню, скидки и акции каждую неделю."
          />
          <meta
            name="keywords"
            content="дискотека для взрослых, дискотека испытателей, пионер испытателей, крафт, крафтовое пиво, пионер, пионеры, ночной клуб пионер, вынос знамени, посвящение в пионеры ночной клуб, ночные клубы, ретро клуб, ретро клубы, ретро дискотека, вечеринка, караоке, караоке бар, караоке кафе, клуб пионер, ретро вечеринка, банкет, праздник, отпраздновать, танцевать, музыка, день рождения, Dj, клубная музыка, танцы, ночь, новый год, ресторан, банкетный зал, проведение банкетов, юбилей, девишник, мальчишник, знакомства, познакомиться, бесплатный вход, караоке, кафе, бар, коктейль, ужин, скидки, недорого"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Wrap>
                <TextBlock>
                  <Heading>Контакты</Heading>
                  <Contact>г. Санкт-Петербург, пр-кт Испытателей 26 к2</Contact>
                  <Contact>тел: 8 (812) 981-53-35</Contact>
                  <Contact>retro@pioner-club.com</Contact>
                </TextBlock>
                <Map>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.520011552468!2d30.265994116099762!3d60.006452681900875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696343be8afe5d7%3A0x8c0a80070d563725!2z0J_QuNC-0L3QtdGA!5e0!3m2!1sru!2sru!4v1528031541930"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen
                    title="pioner map"
                  />
                </Map>
              </Wrap>
            </div>
            <div className="col-xs-12">
              <Feedback>
                <div className="row">
                  <div className="col-xs-12 col-lg-6">
                    <Heading>Напишите нам</Heading>
                    Если у Вас есть какие-либо вопросы, предложения, пожелания,
                    или Вы просто хотели бы оставить отзыв о Нашей работе, Вы
                    можете это сделать с помощью формы обратной связи. Мы
                    постараемся оперативно Вам ответить
                  </div>
                  <div className="col-xs-12 col-lg-6">
                    <FormBox>
                      <Form />
                    </FormBox>
                  </div>
                </div>
              </Feedback>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
