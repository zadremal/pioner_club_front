import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import { Image } from "./Styled";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import MarkdownRenderer from "react-markdown-renderer";

import background from "./craft_background.jpg";
import fishburger from "./fishburger.jpg";
import hamburger from "./hamburger.jpg";
import cheeseburger from "./cheeseburger.jpg";

import beer from "./beer.jpg";

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
          price: data[2].price,
          openHours: data[2].open_hours
        })
      );
  };

  render() {
    const { openHours } = this.state;
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast>Крафт бургер бар</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  Разнообразный ассортимент розливного пива , который придется
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
              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours && (
                  <Card heading="мы открыты">
                    <MarkdownRenderer markdown={openHours} />
                  </Card>
                )}
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
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Мини-фишбургер"
                  image={fishburger}
                  imageAlt="Мини-фишбургер"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Мини-Гамбургер"
                  image={hamburger}
                  imageAlt="Мини-Гамбургер"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature
                  heading="Мини-Чизбургер"
                  image={cheeseburger}
                  imageAlt="Мини-Чизбургер"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Image src={beer} alt="более 40 сортов пива" />
              </div>
              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                <Card heading="Более 40 сортов пива">
                  <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio commodi dolore molestias dolorum dicta, neque alias
                    saepe perferendis culpa deleniti corporis, iste aliquam
                    delectus explicabo, inventore praesentium. Vel, officia
                    saepe!
                  </Description>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
