import React, { Component } from "react";
import { Mainwrap, Mainheading, Content } from "./Styled";
import { ButtonRight } from "../../UI/buttons";
import { colorPr } from "../../UI/index";
import Slider from "react-slick";

import mainBackground from "../../assets/img/background.jpg";
import hunderBackgruond from "../../assets/img/braslet.jpg";
import karaokeBackgruond from "../../assets/img/free_karaoke.jpg";

const sliderContent = [
  {
    title: "Ночной клуб Пионер",
    description: "Старейший ночной клуб Санкт-Петербурга",
    backgroundImage: mainBackground
  },
  {
    title: "Караоке бар",
    description: "Самый пиздатый ночной бар",
    backgroundImage: hunderBackgruond
  },
  {
    title: "Караоке",
    description: "С отрывом головы охранниками",
    backgroundImage: karaokeBackgruond
  }
];

export default class extends Component {
  render() {
    const settings = {
      dots: true,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      fade: true,
      pauseOnHover: false
    };
    return (
      <Slider {...settings}>
        {sliderContent.map((article, index) => (
          <Mainwrap background={article.backgroundImage} key={index}>
            <div className="container">
              <div className="row center-xs middle-xs">
                <div className="col-xs-12">
                  <Content>
                    <Mainheading>{article.title}</Mainheading>
                    <p>{article.description}</p>
                    <ButtonRight children="подробнее" color={colorPr} />
                  </Content>
                </div>
              </div>
            </div>
          </Mainwrap>
        ))}
      </Slider>
    );
  }
}
