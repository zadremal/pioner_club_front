import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Card from "../UI/PlaceCard";
import { MainWrap } from "./Styled";

import mainBackground from "./club.jpg";
import craftBackgruond from "./craft.jpg";
import karaokeBackgruond from "./karaoke.jpg";

import { Link } from "react-router-dom";

export default class extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <MainWrap>
        <Helmet>
          <title>ПИОНЕР - дискотека для взрослых, караоке, крафт-бар</title>
          <link rel="canonical" href="https://pioner-club.com/" />
          <meta
            name="description"
            content="Ночной клуб Пионер - дискотека для взрослых, караоке, ночной клуб, крафтовый бар. Скидки девишникам, мальчишникам, и в день рождения!"
          />
          <meta
            name="keywords"
            content="дискотека для взрослых, дискотека испытателей, пионер испытателей, крафт, крафтовое пиво, пионер, пионеры, ночной клуб пионер, вынос знамени, посвящение в пионеры ночной клуб, ночные клубы, ретро клуб, ретро клубы, ретро дискотека, вечеринка, караоке, караоке бар, караоке кафе, клуб пионер, ретро вечеринка, банкет, праздник, отпраздновать, танцевать, музыка, день рождения, Dj, клубная музыка, танцы, ночь, новый год, ресторан, банкетный зал, проведение банкетов, юбилей, девишник, мальчишник, знакомства, познакомиться, бесплатный вход, караоке, кафе, бар, коктейль, ужин, скидки, недорого"
          />
        </Helmet>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Link to="/club">
                <Card
                  heading="ночной клуб"
                  image={mainBackground}
                  text="Любимые хиты от Диско до 00-х, танцы до утра, непередаваемая атмосфера и развлекательная программа каждые выходные"
                />
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <Link to="karaoke">
                <Card
                  heading="караоке"
                  image={karaokeBackgruond}
                  text="Караоке-бар с профессиональным оборудованием, библиотекой из 45000 фонограмм, и разнообразными напитками "
                />
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <Link to="/craft">
                <Card
                  image={craftBackgruond}
                  heading="крафт-бар"
                  text="Бар с крафтовым пивом на любой вкус - 8 сортов разливного и более 40 сортов бутылочного пива с разных частей света"
                />
              </Link>
            </div>
          </div>
        </div>
      </MainWrap>
    );
  }
}
