import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MarkdownRenderer from "react-markdown-renderer";
import fetchData from "../UTILS/Fetch";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import Loader from "../UI/Loader";

import background from "./img/background.jpg";
import updates from "./img/updates.jpg";
import mic from "./img/mic.jpg";
import songs from "./img/songs.jpg";

class index extends Component {
  state = {
    price: "",
    openHours: "",
  };

  updateState = (data) =>
    this.setState({
      price: data[1].price,
      openHours: data[1].open_hours,
    });

  componentDidMount = () => {
    window.scrollTo(0, 0);
    fetchData("/api/v1/places/", this.updateState);
  };

  render() {
    const { price, openHours } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - караоке бар</title>
          <link rel="canonical" href="https://pioner-club.com/karaoke" />
          <meta
            name="description"
            content="Караоке бар с профессиональным оборудованием. Бесплатно в четверг и воскресенье! Более 45 000 песен. Профессиональные микрофоны, бэк-вокал. "
          />
          <meta
            name="keywords"
            content="караоке, поем караоке, караоке бесплатно, караоке бар, караоке бар СПб, караоке бар Санкт-Петербург, караоке клуб, караоке со словами, караоке ночь"
          />
        </Helmet>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast children="Караоке" />
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  Караоке-бар в ресторане Пионер - место где можно сполна
                  насладиться любимыми песнями. Для гостей есть посадочные места
                  от 2 до 8 человек, обширное меню кухни и напитков.
                  Караоке-система бара оснащена качественными фонограммами
                  (более 45 000 песен) отечественных и зарубежных исполнителей,
                  мощной акустической системой и профессиональными микрофонами.
                  Несколько ТВ, на которых выводится текст песен, расположены в
                  разных частях бара - можно петь не вставая из-за столика!
                </Description>
                <Description>
                  Для тех, кто сомневается в своих вокальных данных - всегда
                  есть поддержка в виде наших замечательных девушек, которые
                  готовы помочь с бэк-вокалом в любой песне. Так же в баре можно
                  отведать много разнообразного крафтового{" "}
                  <Link to="/craft">пива. </Link>
                </Description>
              </div>

              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && price ? (
                  <Fragment>
                    <Card heading="мы открыты">
                      <MarkdownRenderer markdown={openHours} />
                    </Card>

                    <Card heading="стоимость песни">
                      <MarkdownRenderer markdown={price} />
                    </Card>
                  </Fragment>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Регулярное обновление фонотеки"
                  image={updates}
                  imageAlt="Регулярное обновление фонотеки"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Более 45 000 фонограм"
                  image={songs}
                  imageAlt="Более 45 000 фонограм"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Профессиональные микрофоны Shure"
                  image={mic}
                  imageAlt="Профессиональные микрофоны Shure"
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
