import React, { Component, Fragment } from "react";
import {
  LandingMainscreen,
  LandingMainHeading,
  Overlay,
  MainscreenWrap,
  Description
} from "../UI/";
import background from "./banket_background.jpg";
import { ButtonUpWhite, ButtonRightPr } from "../UI/buttons";
import Section, { Heading } from "../UI/section";
import {
  BanketHeading,
  Deal,
  Highlighted,
  Number,
  Advantage,
  Company,
  ContactLink,
  PhoneLink
} from "./Styled";

import Form from "../UI/Form/Banket";
import Modal from "../UI/Modal";

import Dish from "./Dish";
import Slider from "../UI/Carousel";

import comp585 from "./org/585.jpg";
import adidas from "./org/adidas.jpg";
import bm from "./org/bm.jpg";
import hyndai from "./org/hyndai.jpg";
import ikea from "./org/ikea.jpg";
import lsssmu from "./org/lsssmu.jpg";
import sber from "./org/sber.jpg";
import sport from "./org/sport.jpg";

import dorada from "./dorada.jpg";
import greech from "./greech.jpg";
import venig from "./venig.jpg";
import pangassius from "./pangassius.jpg";
import banketAbout from "./banket_about.jpg";
import banketContact from "./banket_contact.jpg";

class index extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <LandingMainscreen background={background}>
          <MainscreenWrap>
            <LandingMainHeading>Корпоратив или банкет? </LandingMainHeading>
            <BanketHeading children="поможем провести любое мероприятие в одном из самых атмосферных ночных клубов Санкт-Петербурга от 1000 рублей на человека" />
            <ButtonUpWhite
              onClick={this.toggleModal}
              children="забронировать мероприятие"
            />
          </MainscreenWrap>
          <Overlay />
        </LandingMainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Heading children="индивидуальный подход - каждому" />
              </div>
              <div className="col-xs-12">
                <Description>
                  Мы стремимся сделать всё, чтобы Ваше мероприятие прошло на
                  самом высоком уровне. Для каждого гостя мы готовы обсуждать
                  условия индивидуально, неизменными остаются лишь наши
                  преимущества под любое событие
                </Description>
              </div>
              <div className="col-xs-6 col-md-3">
                <Deal>
                  Банкеты и корпоративы
                  <Highlighted> от 5-и человек</Highlighted>
                </Deal>
              </div>
              <div className="col-xs-6 col-md-3">
                <Deal>
                  Специальные условия по алкоголю:
                  <Highlighted> можно со своим!</Highlighted>
                </Deal>
              </div>
              <div className="col-xs-6 col-md-3">
                <Deal>
                  Конкурентная ставка:
                  <Highlighted> от 1000 рублей</Highlighted> на человека
                </Deal>
              </div>
              <div className="col-xs-6 col-md-3">
                <Deal>
                  Обширное банкетное меню:
                  <Highlighted> более 50 позиций</Highlighted>
                </Deal>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading children="банкетное меню" />
              </div>
              <div className="col-xs-12">
                <Slider
                  settings={{
                    responsive: [
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2
                        }
                      },
                      {
                        breakpoint: 576,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                    ]
                  }}
                >
                  <Dish
                    image={dorada}
                    imageAlt="дорада запеченая"
                    heading="Дорада запечёная с апельсином"
                    consist="дорада, апельсин, масло чесночное, лимон"
                  />
                  <Dish
                    image={pangassius}
                    imageAlt="дорада запеченая"
                    heading="Дорада запечёная с апельсином"
                    consist="дорада, апельсин, масло чесночное, лимон"
                  />
                  <Dish
                    image={venig}
                    imageAlt="дорада запеченая"
                    heading="Дорада запечёная с апельсином"
                    consist="дорада, апельсин, масло чесночное, лимон"
                  />
                  <Dish
                    image={greech}
                    imageAlt="дорада запеченая"
                    heading="Дорада запечёная с апельсином"
                    consist="дорада, апельсин, масло чесночное, лимон"
                  />
                </Slider>
              </div>
              <div className="col-xs-12 center-xs">
                <ButtonRightPr contrast>смотреть всё меню</ButtonRightPr>
              </div>
            </div>
          </div>
        </Section>
        <Section background={banketAbout}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading contrast children="немного о нас" />
              </div>
              <div className="col-xs-12">
                <Description contrast>
                  Ночной клуб "ПИОНЕР" - первая и главная ретродискотека в
                  Санкт-Петербурге. Со времени своего появления в 2007-м году
                  клуб сразу обрел собственную публику и постоянных посетителей
                  благодаря своей неповторимой атмосфере. В наших стенах
                  проходило немало интересных мероприятий, и мы предлагаем Вам
                  стать частью нашей истории и провести вместе Ваш праздник. Для
                  этого у нас имеется:
                </Description>
              </div>
              <div className="col-xs-4 center-xs">
                <Advantage>
                  <Number>500</Number>
                  человек - полная вместимость клуба, с возможностью накрытия
                  столов
                </Advantage>
              </div>
              <div className="col-xs-4 center-xs">
                <Number>4 500</Number>
                <Advantage>
                  Ватт звука и профессиональное световое оборудование
                </Advantage>
              </div>
              <div className="col-xs-4 center-xs">
                <Number>11</Number>
                <Advantage>
                  лет опыта в организации и проведения любых мероприятий
                </Advantage>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading>с нами отмечают</Heading>
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={ikea} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={lsssmu} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={sber} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={sport} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={comp585} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={adidas} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={bm} />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={hyndai} />
              </div>
            </div>
          </div>
        </Section>
        <Section background={banketContact}>
          <Overlay />

          <MainscreenWrap>
            <Heading contrast> по вопросам бронирования </Heading>

            <PhoneLink href="tel:+79111811375">+7 (911) 181 13 75</PhoneLink>
            <ContactLink href="mailto:retro@pioner-club.com">
              retro@pioner-club.com
            </ContactLink>
            <ContactLink href="https://www.google.ru/maps/place/%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80/@60.0064527,30.2659941,17z/data=!3m1!4b1!4m5!3m4!1s0x4696343be8afe5d7:0x8c0a80070d563725!8m2!3d60.0064527!4d30.2681828">
              г. Санкт-Петербург, пр-тк Испытателей 26/2
            </ContactLink>
            <ButtonUpWhite onClick={this.toggleModal}>
              забронировать мероприятие
            </ButtonUpWhite>
          </MainscreenWrap>
        </Section>
      </Fragment>
    );
  }
}

export default index;
