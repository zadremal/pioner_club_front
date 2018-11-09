import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import ym from "react-yandex-metrika";
import { LandingMainHeading, HeadingHighlighted, LandingMainscreen, Overlay, MainscreenWrap, Description } from "../UI";
import { ButtonUpWhite } from "../UI/buttons";
import Section, { Heading } from "../UI/section";
import Modal from "../UI/Modal";
import Form from "../UI/Form/Birthday";
import { Detail, DealImg, DealDescription, Highlighted, CardWrap, Special } from "./Styled";
import Card from "./Card";

import background from "./img/background.jpg";
import karaoke from "./img/karaoke.jpg";
import dance from "./img/dance.jpg";
import party from "./img/party.jpg";
import pioner from "./img/pioner.jpg";
import prisyaga from "./img/prisyaga.jpg";
import fencing from "./img/fencing.svg";
import trumpet from "./img/trumpet.svg";
import percentage from "./img/percentage.svg";

class index extends Component {
  state = {
    modalIsOpen: false
  };

  toggleModal = () => {
    ym("reachGoal", "birthday__form--open");
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>День рождения в ночном клубе Пионер</title>
          <link rel="canonical" href="https://pioner-club.com/birthday" />
          <meta
            name="description"
            content="День рождения в ночном клубе Пионер - скидки именинникам 50%! Возможность принести свой алкоголь. Бксплатный вход на компанию."
          />
          <meta
            name="keywords"
            content="день рождения, день рождения в клубе, отметить день рождения, отметить день рождения спб, отпраздновать день рождения спб, день рождения Санкт-Петербург, скидки на День Рождения, скидки день рождения Санкт-Петербург, день рождения со своим алкоголем, отмечаем день рождения"
          />
        </Helmet>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <LandingMainscreen background={background}>
          <MainscreenWrap>
            <LandingMainHeading>
              У вас скоро день рождения? Подарим Вам <br />
              <HeadingHighlighted>скидку 50% на любой депозит*</HeadingHighlighted>
            </LandingMainHeading>
            <Detail>
              *выбирайте любой столик, приходите до 00-00, и платите за него в 2 раза меньше! (не включает стоимость
              обслуживания)
            </Detail>
            <ButtonUpWhite onClick={this.toggleModal}>Получить скидку</ButtonUpWhite>
          </MainscreenWrap>
          <Overlay />
        </LandingMainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading children="отмечаем день рождения в ретро-клубе пионер" />
              </div>
              <div className="col-xs-12 col-md-4 center-xs">
                <DealImg src={percentage} />
                <DealDescription>
                  <Highlighted>Скидка 50 % </Highlighted>
                  на все меню бара и кухни , при оплате депозита за стол.
                </DealDescription>
              </div>
              <div className="col-xs-12 col-md-4  center-xs">
                <DealImg src={fencing} />
                <DealDescription>
                  <Highlighted>Бесплатный вход </Highlighted>
                  для именинника и 5-и гостей
                </DealDescription>
              </div>
              <div className="col-xs-12 col-md-4  center-xs">
                <DealImg src={trumpet} />
                <DealDescription>
                  <Highlighted>Торжественное посвящение </Highlighted>в ряды Пионеров!
                </DealDescription>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading children="скучно не будет" />
              </div>
              <div className="col-xs-12">
                <Description>
                  Ночной клуб "ПИОНЕР" знает толк в проведении праздников. Особенно, если это День Рождения! Мы рады
                  предложить для именинников и их друзей отпраздновать свой День Рождения в уникальной атмосфере XX
                  века, в которой Вы совершите увлекательное путешествие в дни своей молодости и получите незабываемые
                  эмоции! Вот что Вас ожидает у нас в клубе:
                </Description>
                <CardWrap>
                  <Card background={party} heading="Только Хиты: лучшая музыка от 70-х до современной" />
                  <Card background={dance} heading="Культовые выступления персонала" />
                  <Card background={karaoke} heading="Караоке-бар с фонотекой на 45 000 песен" />
                  <Card background={pioner} heading="Настоящая пионерская линейка и вынос знамени под гимн СССР" />
                </CardWrap>
              </div>
            </div>
          </div>
        </Section>
        <Section background={prisyaga} fixed>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Special>
                  <Heading contrast children="спецпрограмма для именинников" />
                  <Description contrast>
                    Каждые выходные для именинников мы устраиваем специальную церемонию - посвящение Пионеры! Для тех
                    кто успел в свое время побыть в рядах пионеров - это шанс пережить заново этот момент. Для остальных
                    - уникальный шанс вступить в самое масштабное в мире объединение молодежи!
                  </Description>
                  <Description contrast>
                    Пионерские галстуки, торжественная музыка и присяга на верность Советскому Союзу прилагаются!
                  </Description>
                </Special>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Heading children="день рождения выпадает на будни?" />
              </div>
              <div className="col-xs-12 col-md-6">
                <Description>
                  Приходите к нам в ближайшие выходные! Наше предложение действует для всех именинников неделю до, и
                  неделю после дня рождения! Заполните форму обратной связи, и наш менеджер свяжется с вами и ответит на
                  все интересущие вопросы
                  <br />
                  <br />
                  Действует при бронировании стола. Предложение по данной акции может быть ограничено.
                </Description>
              </div>
              <div className="col-xs-12 col-md-6">
                <Form />
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
