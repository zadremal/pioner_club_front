import React, { Component, Fragment } from "react";
import {
  Detail,
  DealImg,
  DealDescription,
  Highlighted,
  CardWrap,
  Special
} from "./Styled";
import Card from "./Card";
import bitrhdayBackground from "./background.jpg";
import karaoke from "./karaoke.jpg";
import dance from "./dance.jpg";
import party from "./party.jpg";
import pioner from "./pioner.jpg";
import prisyaga from "./prisyaga.jpg";

import {
  LandingMainHeading,
  HeadingHighlighted,
  LandingMainscreen,
  Overlay,
  MainscreenWrap,
  Description
} from "../UI";
import { ButtonUpWhite } from "../UI/buttons";
import Section, { Heading } from "../UI/section";
import fencing from "./fencing.svg";
import trumpet from "./trumpet.svg";
import percentage from "./percentage.svg";
import Form from "../UI/Form/Birthday";
import Modal from "../UI/Modal";

class index extends Component {
  state = {
    modalIsOpen: false
  };

  toggleModal = () => {
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
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <LandingMainscreen background={bitrhdayBackground}>
          <MainscreenWrap>
            <LandingMainHeading>
              У вас скоро день рождения? Подарим Вам <br />
              <HeadingHighlighted>
                скидку 50% на любой депозит*
              </HeadingHighlighted>
            </LandingMainHeading>
            <Detail>
              *выбирайте любой столик, приходите до 00-00, и платите за него в 2
              раза меньше! (не включает стоимость обслуживания)
            </Detail>
            <ButtonUpWhite onClick={this.toggleModal}>
              Получить скидку
            </ButtonUpWhite>
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
                  <Highlighted>Скидка 50 % </Highlighted>на все меню бара и
                  кухни , при оплате депозита за стол.
                </DealDescription>
              </div>
              <div className="col-xs-12 col-md-4  center-xs">
                <DealImg src={fencing} />
                <DealDescription>
                  <Highlighted>Бесплатный вход </Highlighted>для именинника и
                  5-и гостей
                </DealDescription>
              </div>
              <div className="col-xs-12 col-md-4  center-xs">
                <DealImg src={trumpet} />
                <DealDescription>
                  <Highlighted>Торжественное посвящение </Highlighted>в ряды
                  Пионеров!
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
                  Ночной клуб "ПИОНЕР" знает толк в проведении праздников.
                  Особенно, если это День Рождения! Мы рады предложить для
                  именинников и их друзей отпраздновать свой День Рождения в
                  уникальной атмосфере XX века, в которой Вы совершите
                  увлекательное путешествие в дни своей молодости и получите
                  незабываемые эмоции! Вот что Вас ожидает у нас в клубе:
                </Description>
                <CardWrap>
                  <Card
                    background={party}
                    heading="Только Хиты: лучшая музыка от 70-х до современной"
                  />
                  <Card
                    background={dance}
                    heading="Культовые выступления персонала"
                  />
                  <Card
                    background={karaoke}
                    heading="Караоке-бар с фонотекой на 45 000 песен"
                  />
                  <Card
                    background={pioner}
                    heading="Настоящая пионерская линейка и вынос знамени под гимн СССР"
                  />
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
                    Каждые выходные для именинников мы устраиваем специальную
                    церемонию - посвящение Пионеры! Для тех кто успел в свое
                    время побыть в рядах пионеров - это шанс пережить заново
                    этот момент. Для остальных - уникальный шанс вступить в
                    самое масштабное в мире объединение молодежи!
                  </Description>
                  <Description contrast>
                    Пионерские галстуки, торжественная музыка и присяга на
                    верность Советскому Союзу прилагаются!
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
                  Приходите к нам в ближайшие выходные! Наше предложение
                  действует для всех именинников неделю до, и неделю после дня
                  рождения! Заполните форму обратной связи, и наш менеджер
                  свяжется с вами и ответит на все интересущие вопросы
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
