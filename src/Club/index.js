import React, { Component, Fragment } from "react";

import Section, { Heading } from "../UI/section";
import { Mainscreen, Overlay, Description } from "../UI";
import Youtube from "../UI/Youtube";
import { Plan } from "./Styled";
import Card from "../UI/PlaceInfo";
import background from "./main_background.jpg";
import plan from "./plan.jpg";
import MarkdownRenderer from "react-markdown-renderer";
import Feature from "../UI/PlaceFeature";
import Lightbox from "react-images";

import bar from "./bar.jpg";
import pioner from "./pioner.jpg";
import show from "./show.jpg";

class index extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      openHours: "",
      currentImage: 0,
      lightboxIsOpen: false
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: 1,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false
    });
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/places/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .catch(err => console.log("Looks like there was an error", err))
      .then(data =>
        this.setState({
          price: data[0].price,
          openHours: data[0].open_hours
        })
      );
  };

  render() {
    const { price, openHours } = this.state;
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast>Ночной клуб Пионер</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  «ПИОНЕР» - неповторимая эклектика современного дизайна и духа
                  эпохи 70-80х годов. Все необходимые детали ретро-диско-клуба -
                  в наличии: вместительный танцпол, сцена для live-выступлений,
                  световое и музыкальное оборудование, зал на 350 мест,
                  VIP-зона.
                </Description>
                <Description>
                  Атмосферу задают красно-серые тона интерьера и узнаваемые
                  атрибуты того времени: фотографии, учебные стенды, раритетные
                  пластинки, вымпелы, портреты вождей. Расторопные официанты в
                  пионерских галстуках с удовольствием порекомендуют что-нибудь
                  из широкого ассортимента алкогольных и безалкогольных
                  напитков, коктейлей и холодных закусок.
                </Description>
                <Description>
                  Специальными гостями вечеринок диско-зала выступают
                  вокально-инструментальные ансамбли и известные ди-джеи.
                  Полуночным апогеем является торжественный вынос знамени и
                  исполнение гимна СССР. Восторг и энергетику этого действа
                  невозможно передать словами – лучше увидеть. И, вопреки
                  известной фразе, не один раз увидеть. Диско-зал «ПИОНЕР» - это
                  лучшее место для настроения пионерской молодости и
                  комсомольской юности. Мы говорим: «нет» – ностальгии и «да» –
                  приятным воспоминаниям и новым впечатлениям!
                </Description>
                <Description>
                  Ретро-клуб "ПИОНЕР"- единственное место в Петербурге, где
                  ощущения ушедшей молодости вновь оживают. Приглашаем Вас
                  окунуться в атмосферу безудержного веселья, поверьте, мы
                  делаем всё, чтобы Вы хотели возвращаться к нам снова и снова!
                  Вас ждут яркие огни ретро-диско-клуба и зажигательные мелодии
                  пионерской молодости. Вдохните воздух нового СССР, воплощенный
                  в музыку свободы и перемен, и получите новые эмоции от любимых
                  мотивов!
                </Description>
              </div>
              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && (
                  <Card heading="мы открыты">
                    <MarkdownRenderer markdown={openHours} />
                  </Card>
                )}
                {price && (
                  <Card heading="цены на вход">
                    <MarkdownRenderer markdown={price} />
                  </Card>
                )}
                <Card heading="план зала">
                  <Plan
                    onClick={this.openLightbox}
                    src={plan}
                    alt="план зала ночной клуб Пионер"
                  />
                </Card>
                <Lightbox
                  images={[{ src: `${plan}` }, { src: `${plan}` }]}
                  onClose={this.closeLightbox}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  preloadNextImage={false}
                  showImageCount={false}
                  backdropClosesModal={true}
                />
              </div>
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
