import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import ym from "react-yandex-metrika";
import {
  LandingMainscreen,
  LandingMainHeading,
  Overlay,
  MainscreenWrap,
  Description
} from "../UI/";
import { ButtonUpWhite, ButtonRightPr } from "../UI/buttons";
import Section, { Heading } from "../UI/section";
import Slider from "../UI/Carousel";
import BanketMenu from "../Menu/Banket/Menu";
import {
  BanketHeading,
  Deal,
  Highlighted,
  Number,
  Advantage,
  Company,
  ContactLink,
  PhoneLink,
  Button
} from "./Styled";
import Form from "../UI/Form/Banket";
import Modal from "../UI/Modal";
import Dish from "./Dish";

import comp585 from "./org/585.jpg";
import adidas from "./org/adidas.jpg";
import bm from "./org/bm.jpg";
import hyndai from "./org/hyndai.jpg";
import ikea from "./org/ikea.jpg";
import lsssmu from "./org/lsssmu.jpg";
import sber from "./org/sber.jpg";
import sport from "./org/sport.jpg";
import dorada from "./img/dorada.jpg";
import greech from "./img/greech.jpg";
import venig from "./img/venig.jpg";
import pangassius from "./img/pangassius.jpg";
import dorada2x from "./img/dorada2x.jpg";
import greech2x from "./img/greech2x.jpg";
import venig2x from "./img/venig2x.jpg";
import pangassius2x from "./img/pangassius2x.jpg";
import banketAbout from "./img/about.jpg";
import banketContact from "./img/contact.jpg";
import background from "./img/background.jpg";

class index extends Component {
  state = {
    modalOpen: false,
    menuModalOpen: false
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  toggleModal = () => {
    ym("reachGoal", "banket__form--open");
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  toggleMenuModal = () => {
    console.log("works");
    this.setState(prevState => {
      return {
        menuModalOpen: !prevState.menuModalOpen
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            Банкеты в ночном клубе Пионер - от 1000 рублей на человека
          </title>
          <link rel="canonical" href="https://pioner-club.com/banket" />
          <meta
            name="description"
            content="Банкеты от 1000р на человека. Частичное или полное накрытие. Любые мероприятия. Банкеты со своим алкоголем."
          />
          <meta
            name="keywords"
            content="банкеты, банкет, корпоратив, аренда зала, аренда, свадебный банкет, банкет на свадьбу, проведение банкетов, банкет фуршет, организация банкетов, банкетный зал СПб, банкетный зал Санкт-Петербург, банкет в ночном клубе, банкет в ресторане, банкет недорого, заказ банкета, провести банкет"
          />
          <meta
            property="og:title"
            content="Банкеты и корпоративы в ночном клубе Пионер"
          />
          <meta
            property="og:description"
            content="Конкурентная ставка - от 1000 рублей на человека, обширное банкетное меню и уникальная атмосфера ночного клуба"
          />
          <meta property="og:url" content="https://pioner-club.com/banket" />
        </Helmet>
        <Modal
          overflow
          modalIsOpen={this.state.menuModalOpen}
          closeModal={this.toggleMenuModal}
        >
          <BanketMenu />
        </Modal>
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
                    image2x={dorada2x}
                    imageAlt="дорада запеченная"
                    heading="Дорада, запеченная с апельсином"
                    consist="дорада, апельсин, масло чесночное, лимон"
                  />
                  <Dish
                    image={pangassius}
                    image2x={pangassius2x}
                    imageAlt="Пангасиус, запеченный в конверте"
                    heading="Пангасиус, запеченный в конверте"
                    consist="пангасиус, кабачки, сливки, лук порей, томаты черри, сыр Гауда"
                  />
                  <Dish
                    image={venig}
                    image2x={venig2x}
                    imageAlt="винегрет"
                    heading="Винегрет"
                    consist="картофель, свекла, морковь, капуста квашеная, лук красный, горошек консервированный"
                  />
                  <Dish
                    image={greech}
                    image2x={greech2x}
                    imageAlt="греческий салат"
                    heading="Греческий салат"
                    consist="свежие овощи, маслины, сыр Фета, пряные травы, мятная заправка"
                  />
                </Slider>
              </div>
              <div className="col-xs-12 center-xs">
                <Button>
                  <ButtonRightPr onClick={this.toggleMenuModal} contrast>
                    смотреть всё меню
                  </ButtonRightPr>
                </Button>
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
                <Number>350</Number>
                <Advantage>
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
                <Company src={ikea} alt="ikea" title="ikea" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={lsssmu} alt="ЛенСпецСму" title="ЛенСпецСму" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={sber} alt="Сбербанк" title="Сбербанк" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={sport} alt="Спортмастер" title="Сбербанк" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={comp585} alt="585" title="585" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={adidas} alt="Адидас" title="Адидас" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={bm} alt="Банк Москвы" title="Банк Москвы" />
              </div>
              <div className="col-xs-6 col-md-3 center-xs">
                <Company src={hyndai} alt="Hyundai" title="Hyundai" />
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
            <Button>
              <ButtonUpWhite onClick={this.toggleModal}>
                забронировать мероприятие
              </ButtonUpWhite>
            </Button>
          </MainscreenWrap>
        </Section>
      </Fragment>
    );
  }
}

export default index;
