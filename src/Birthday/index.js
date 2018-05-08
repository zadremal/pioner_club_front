import React, { Component, Fragment } from "react";
import bitrhdayBackground from "./background.jpg";
import {
  Content,
  Detail,
  DealImg,
  DealDescription,
  Highlighted,
  BoringDescription,
  BoringCard,
  BoringWrap,
  BoringHeading,
  Pioner,
  PionerText,
  BirthdayText,
  Form,
  Input,
  Submit
} from "./Styled";
import karaoke from "./karaoke.jpg";
import dance from "./dance.jpg";
import party from "./party.jpg";
import pioner from "./pioner.jpg";
import prisyaga from "./prisyaga.jpg";

import { MainHeading, HeadingHighlighted, Mainscreen } from "../UI";
import { ButtonUpWhite } from "../UI/buttons";
import Section, { Heading } from "../UI/section";
import fencing from "./fencing.svg";
import cake from "./cake.svg";
import percentage from "./percentage.svg";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Mainscreen background={bitrhdayBackground}>
          <div className="center-xs">
            <MainHeading>
              У вас скоро день рождения? Подарим Вам <br />
              <HeadingHighlighted>
                скидку 50% на любой депозит*
              </HeadingHighlighted>
            </MainHeading>
            <Detail>
              *выбирайте любой столик, приходите до 00-00, и платите за него в 2
              раза меньше! (не включает стоимость обслуживания)
            </Detail>
            <ButtonUpWhite>Получить скидку</ButtonUpWhite>
          </div>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading children="отмечаем день рождения в ретро-клубе пионер" />
              </div>
              <div className="col-xs-4 center-xs">
                <DealImg src={percentage} />
                <DealDescription>
                  <Highlighted>Скидка 50 % </Highlighted>на все меню бара и
                  кухни , при оплате депозита за стол.
                </DealDescription>
              </div>
              <div className="col-xs-4 center-xs">
                <DealImg src={fencing} />
                <DealDescription>
                  <Highlighted>Бесплатный вход </Highlighted>для именинника и
                  5-и гостей
                </DealDescription>
              </div>
              <div className="col-xs-4 center-xs">
                <DealImg src={cake} />
                <DealDescription>
                  <Highlighted>Сладкий подарок </Highlighted>при заказе банкета
                  от 10-и человек
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
                <BoringDescription>
                  Ночной клуб "ПИОНЕР" знает толк в проведении праздников.
                  Особенно, если это День Рождения! Мы рады предложить для
                  именинников и их друзей отпраздновать свой День Рождения в
                  уникальной атмосфере XX века, в которой Вы совершите
                  увлекательное путешествие в дни своей молодости и получите
                  незабываемые эмоции! Вот что Вас ожидает у нас в клубе:
                </BoringDescription>
                <BoringWrap>
                  <BoringCard background={party}>
                    <BoringHeading children="Только Хиты: лучшая музыка от 70-х до современной" />
                  </BoringCard>
                  <BoringCard background={dance}>
                    <BoringHeading children="Культовые выступления персонала" />
                  </BoringCard>
                  <BoringCard background={karaoke}>
                    <BoringHeading children="Караоке-бар с фонотекой на 40 000 песен" />
                  </BoringCard>
                  <BoringCard background={pioner}>
                    <BoringHeading children="Настоящая пионерская линейка и вынос знамени под гимн СССР" />
                  </BoringCard>
                </BoringWrap>
              </div>
            </div>
          </div>
        </Section>
        <Pioner background={prisyaga}>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <Heading contrast children="спецпрограмма для именинников" />
                  <PionerText>
                    Каждые выходные для именинников мы устраиваем специальную
                    церемонию - посвящения Пионеры! Для тех кто успел в свое
                    время побыть в рядах пионеров - это шанс пережть заново этот
                    момент. Для остальных - унакальный шанс вступить в самое
                    масштабное в мире объединение молодежи!
                  </PionerText>
                  <PionerText>
                    Пионерские галстуки, торжественная музыка и присяга на
                    верность Советскому Союзу прилагаются!
                  </PionerText>
                </div>
              </div>
            </div>
          </div>
        </Pioner>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Heading children="день рождения выпадает на будни?" />
              </div>
              <div className="col-xs-12">
                <BirthdayText>
                  Приходите к нам в ближайшие выходные! Наше предложение
                  действует для всех именинников неделю до, и неделю после дня
                  рождения! Заполните форму обратной связи, и наш менеджер
                  свяжется с вами и ответит на все интересущие вопросы
                </BirthdayText>
              </div>
              <div className="col-xs-12">
                <Form>
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Ваш номер телефона" />
                  <Input placeholder="День рождения" />
                  <Submit defaultValue="отпраздновать" />
                </Form>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
