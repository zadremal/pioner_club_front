import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import MarkdownRenderer from "react-markdown-renderer";
import { Link } from "react-router-dom";
import updates from "./updates.jpg";
import mic from "./mic.jpg";
import songs from "./songs.jpg";
import Loader from "../UI/Loader";
import background from "./karaoke_background.jpg";

class index extends Component {
  state = {
    price: "",
    openHours: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/places/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          price: data[1].price,
          openHours: data[1].open_hours
        })
      )
      .catch(err => console.log("Looks like there was an error", err));
  };

  render() {
    const { price, openHours } = this.state;
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast children="Караоке" />
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  Караоке-бар в ночном клубе Пионер - место где можно сполна
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
                <Description>
                  И самое главное - каджый четверг и воскресенье у нас все поют
                  абсолютно бесплатно!
                </Description>
              </div>

              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && price ? (
                  <div>
                    <Card heading="мы открыты">
                      <MarkdownRenderer markdown={openHours} />
                    </Card>

                    <Card heading="стоимость песни">
                      <MarkdownRenderer markdown={price} />
                    </Card>
                  </div>
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
