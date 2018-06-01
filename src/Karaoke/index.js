import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import MarkdownRenderer from "react-markdown-renderer";

import backvocal from "./backvocal.jpg";
import mics from "./mics.jpg";
import songs from "./songs.jpg";

import background from "./karaoke_background.jpg";

class index extends Component {
  state = {
    price: "",
    openHours: ""
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/places/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .catch(err => console.log("Looks like there was an error", err))
      .then(data =>
        this.setState({
          price: data[1].price,
          openHours: data[1].open_hours
        })
      );
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
                  Караоке-бар 100ПудовНеХундертвассер - одно из лучших мест для
                  отдыха и развлечений. Авторский дизайн и всегда дружеская
                  обстановка! Уже на входе вас встретит внимательный персонал и
                  сопроводит в мир, наполненный яркими красками. В «...»
                  установлено только лучшее оборудование, что позволит вам
                  получить максимум удовольствия. Гостей также приятно удивит
                  богатый репертуар: в списке песен как российские, так и
                  зарубежные хиты.
                </Description>
                <Description>
                  Кроме того, караоке-бар предлагает большой выбор крафтового
                  пива, так и более крепких напитков и коктейлей. Наши бармены с
                  удовольствием расскажут Вам про любой сорт и помогут сделать
                  правильный выбор. Профессиональные повара не заставят гостей
                  томиться в ожидании, попробуйте наши сеты из авторских
                  мини-бургеров и оригинальные закуски к пиву! По четвергам и
                  воскресеньем вы можете петь свои любимые песни абсолютно
                  бесплатно! В баре проводятся трансляции спортивных матчей.
                  Банкеты, корпоративы и частные мероприятия!
                </Description>
              </div>

              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && (
                  <Card heading="мы открыты">
                    <MarkdownRenderer markdown={openHours} />
                  </Card>
                )}
                {price && (
                  <Card heading="стоимость песни">
                    <MarkdownRenderer markdown={price} />
                  </Card>
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
                  heading="Бэк-вокал в арранжировка"
                  image={backvocal}
                  imageAlt="Бэк-вокал в арранжировка"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Более 40000 песен"
                  image={songs}
                  imageAlt="Более 40000 песен"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Микрофоны SurePro"
                  image={mics}
                  imageAlt="Микрофоны SurePro"
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
