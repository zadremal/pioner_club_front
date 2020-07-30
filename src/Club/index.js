import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import MarkdownRenderer from "react-markdown-renderer";
import Lightbox from "react-images";
import fetchData from "../UTILS/Fetch";
import { Mainscreen, Overlay, Description } from "../UI";
import Card from "../UI/PlaceInfo";
import Section, { Heading } from "../UI/section";
import Youtube from "../UI/Youtube";
import Feature from "../UI/PlaceFeature";
import Loader from "../UI/Loader";
import { Plan } from "./Styled";

import plan from "./img/plan.jpg";
import planBig from "./img/plan_big.jpg";
import background from "./img/background.jpg";
import bar from "./img/bar.jpg";
import pioner from "./img/pioner.jpg";
import show from "./img/show.jpg";

class index extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      openHours: "",
      currentImage: 0,
      lightboxIsOpen: false,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  };
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    });
  };

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  updateState = (data) => {
    this.setState({
      price: data[0].price,
      openHours: data[0].open_hours,
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    fetchData("/api/v1/places/", this.updateState);
  };

  render() {
    const { price, openHours } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - главная дискотека для взрослых в СПб</title>
          <link rel="canonical" href="https://pioner-club.com/club" />
          <meta
            name="description"
            content="Дискотека для взрослых с десятилетней историей. Неповторимый интерьер, обширное меню, скидки и акции каждую неделю."
          />
          <meta
            name="keywords"
            content="дискотека для взрослых, дискотека испытателей, пионер испытателей, крафт, крафтовое пиво, пионер, пионеры, ночной клуб пионер, вынос знамени, посвящение в пионеры ночной клуб, ночные клубы, ретро клуб, ретро клубы, ретро дискотека, вечеринка, караоке, караоке бар, караоке кафе, клуб пионер, ретро вечеринка, банкет, праздник, отпраздновать, танцевать, музыка, день рождения, Dj, клубная музыка, танцы, ночь, новый год, ресторан, банкетный зал, проведение банкетов, юбилей, девишник, мальчишник, знакомства, познакомиться, бесплатный вход, караоке, кафе, бар, коктейль, ужин, скидки, недорого"
          />
        </Helmet>

        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast>Ресторан Пионер</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  «ПИОНЕР» - ресторан с более чем десятилетней историей,
                  пронизанный духом эпохи 70-80х годов. Все необходимые детали -
                  в наличии: вместительный танцпол, сцена для live-выступлений,
                  световое и музыкальное оборудование, зал на 350 мест,
                  VIP-зона.
                </Description>
                <Description>
                  Атмосферу задают красно-серые тона интерьера и узнаваемые
                  атрибуты того времени: фотографии, учебные стенды, раритетные
                  пластинки, вымпелы, портреты вождей. Всегда в наличии обширный
                  ассортимент алкогольных и безалкогольных напитков, горячих
                  блюд, кальянов, и изысканных закусок.
                </Description>
                <Description>
                  Специальными гостями вечеринок ресторана выступают
                  вокально-инструментальные ансамбли и известные ди-джеи.
                  Полуночным апогеем является торжественный вынос знамени и
                  исполнение гимна СССР. Восторг и энергетику этого действа
                  невозможно передать словами – лучше увидеть. И, вопреки
                  известной фразе, не один раз увидеть. Ресторан «ПИОНЕР» - это
                  лучшее место для настроения пионерской молодости и
                  комсомольской юности. Мы говорим: «нет» – ностальгии и «да» –
                  приятным воспоминаниям и новым впечатлениям!
                </Description>
                <Description>
                  "ПИОНЕР"- единственное место в Петербурге, где ощущения
                  ушедшей молодости вновь оживают. Приглашаем Вас окунуться в
                  атмосферу безудержного веселья, поверьте, мы делаем всё, чтобы
                  Вы хотели возвращаться к нам снова и снова! Вас ждут яркие
                  огни ресторана и зажигательные мелодии пионерской молодости.
                  Вдохните воздух нового СССР, воплощенный в музыку свободы и
                  перемен, и получите новые эмоции от любимых мотивов!
                </Description>
              </div>

              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && price ? (
                  <div>
                    <Card heading="мы открыты">
                      <MarkdownRenderer markdown={openHours} />
                    </Card>

                    <Card heading="цены на вход">
                      <MarkdownRenderer markdown={price} />
                    </Card>
                    <Card heading="план зала">
                      <Plan
                        onClick={this.openLightbox}
                        src={plan}
                        alt="план зала ресторан Пионер"
                      />
                    </Card>
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
              <Lightbox
                images={[{ src: `${planBig}` }, { src: `${plan}` }]}
                onClose={this.closeLightbox}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                preloadNextImage={false}
                showImageCount={false}
                backdropClosesModal={true}
              />
            </div>
          </div>
        </Section>
        <Section>
          <Youtube videoId="7VC-hPemn30" />
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading>каждые выходные</Heading>
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="бесплатный розлив алкоголя от барменов"
                  image={bar}
                  imageAlt="бесплатный розлив от барменов в ночном клубе Пионер"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="посвящение в Пионеры и пионерская линейка"
                  image={pioner}
                  imageAlt="посвящение в Пионеры и пионерская линейка"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="шоу-программа и выступления персонала"
                  image={show}
                  imageAlt="шоу-программа и выступления персонала"
                />
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
