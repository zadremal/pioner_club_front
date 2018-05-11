import React, { Component, Fragment } from "react";
import {
  Mainscreen,
  Description,
  Schedule,
  ScheduleHeading,
  ScheduleText
} from "../UI/landing";
import Section, { Heading } from "../UI/section";
import { Card, CardText, CardWrap, Beer } from "./Styled";

import background from "./craft_background.jpg";
import fishburger from "./fishburger.jpg";
import hamburger from "./hamburger.jpg";
import cheeseburger from "./cheeseburger.jpg";

import BeerCard from "./Card";
import cherry from "./cherry.png";
import crazy from "./crazy.png";
import california from "./california.png";
import over from "./over.png";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Heading contrast>Крафт бургер бар</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-7">
                <Description>
                  разнообразный ассортимент розливного пива , который придется
                  по душе как любителям насыщенного эля, так и ценителям легкого
                  лагера. В ассортименте представлены производители таких стран
                  как Бельгия, Чехия , Германия, Англия , Россия .
                </Description>
                <Description>
                  Тщательно подобранный ассортимент бутылочного пива не оставит
                  равнодушным ценителя хорошего и вкусного пенного. Представлены
                  как и классические известные сорта, так и более редкие и
                  необычные.
                </Description>
              </div>
              <div className="col-xs-5">
                <ScheduleHeading>Мы открыты</ScheduleHeading>
                <Schedule>
                  <ScheduleText>ежедневно</ScheduleText>
                  <ScheduleText>с 17:00 до 03:00</ScheduleText>
                </Schedule>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading>Бургеры по 100 рублей</Heading>
                <Description>
                  В качестве основной закуски к нашему ассортименту крафтового
                  пива предлагаем Вам попробовать мини-бургеры по 100 рублей за
                  штуку
                </Description>
              </div>
              <div className="col-xs-12">
                <CardWrap>
                  <Card background={fishburger}>
                    <CardText>Фишбургер</CardText>
                  </Card>
                  <Card background={hamburger}>
                    <CardText>Чизбургер</CardText>
                  </Card>
                  <Card background={cheeseburger}>
                    <CardText>Гамбургер</CardText>
                  </Card>
                </CardWrap>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading>Более 40 сортов пива</Heading>
              </div>
              <div className="col-xs-12">
                <CardWrap>
                  <Beer>
                    <BeerCard
                      name="Apa Crazy Moose"
                      image={crazy}
                      alcohol="6,5"
                      ibu="65"
                      description="Американский IPA.
Темное, нефильтрованное, непастеризованное. Питкий классический светлый Американский IPA, с присущей этому стилю аромати... "
                      price="250"
                    />
                  </Beer>
                  <Beer>
                    <BeerCard
                      name="Apa Crazy Moose"
                      image={crazy}
                      alcohol="6,5"
                      ibu="65"
                      description="Американский IPA.
Темное, нефильтрованное, непастеризованное. Питкий классический светлый Американский IPA, с присущей этому стилю аромати... "
                      price="250"
                    />
                  </Beer>
                  <Beer>
                    <BeerCard
                      name="Apa Crazy Moose"
                      image={crazy}
                      alcohol="6,5"
                      ibu="65"
                      description="Американский IPA.
Темное, нефильтрованное, непастеризованное. Питкий классический светлый Американский IPA, с присущей этому стилю аромати... "
                      price="250"
                    />
                  </Beer>
                  <Beer>
                    <BeerCard
                      name="Apa Crazy Moose"
                      image={crazy}
                      alcohol="6,5"
                      ibu="65"
                      description="Американский IPA.
Темное, нефильтрованное, непастеризованное. Питкий классический светлый Американский IPA, с присущей этому стилю аромати... "
                      price="250"
                    />
                  </Beer>
                </CardWrap>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
