import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../UI/section";
import Modal from "../UI/Modal";
import Form from "../UI/Form/NewYear";
import { ButtonUpPr } from "../UI/buttons";
import { Image, TextBlock, Wrap, Description, PartyDate, PartyStart, Price } from "./Styled";

import bar from "./tickets/bar.jpg";
import children from "./tickets/children.jpg";
import standart from "./tickets/standart.jpg";
import vip from "./tickets/vip.jpg";

import Lightbox from "react-images-zoom";
import Gallery from "react-photo-gallery";

import newYear from "./newyear.jpg";

const PHOTO_SET = [
  {
    src: bar,
    width: 2,
    height: 3
  },
  {
    src: standart,
    width: 2,
    height: 3
  },
  {
    src: vip,
    width: 2,
    height: 3
  },
  {
    src: children,
    width: 2,
    height: 3
  }
];

class index extends Component {
  state = {
    modalOpen: false,
    albumId: "",
    width: -1,
    currentImage: 0
  };

  goBack = () => {
    this.props.history.goBack();
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - новый год в клубе Пионер</title>
          <link rel="canonical" href="https://pioner-club.com/newyear" />
        </Helmet>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Wrap>
                <PartyDate>31 декабря 2018</PartyDate>
                <TextBlock>
                  <Heading>Новый год</Heading>
                </TextBlock>
                <Image src={newYear} alt={"Новый год в ночном клубе Пионер"} />
                <Price>
                  От 1.000 &#8381; <br /> с человека
                </Price>
              </Wrap>
              <Description>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 center-xs">
                      <PartyStart>Встречаем 2019-й в Пионере </PartyStart>
                    </div>
                    <div className="col-xs-12 ">
                      <p>
                        Новый 2019 год в НОЧНОМ КЛУБЕ «ПИОНЕР» - это настоящий праздник, в атмосфере которого можно с
                        удовольствием загадывать желания, получать или дарить подарки!
                        <br />
                        <br />
                        Это сказочная история, которую мы создадим для Вас в лучших традициях семейного застолья, в
                        дружеской обстановке ночного клуба «ПИОНЕР». Ровно в 22:00 двери нашего клуба откроются для Вас,
                        и вы окунетесь впо-настоящему домашнюю атмосферу самого любимого праздника! Снежный танцпол и
                        нарядные ёлочки! Самые узнаваемые новогодние песни! Традиционное знакомство и загадывание
                        желаний и, конечно же, торжественная Пионерская линейка, с выносом знамени и посвящением в
                        Пионеры! На Ваших столах будут такие любим ые салаты и закуски, которые в этот сказочный вечер
                        кажутся особенно вкусными и даже чуть -чуть волшебными! Проводы старого 2018 года, и конечно
                        речь Президента Российской Федерации на всех экранах нашего клуба!
                        <br />
                        <br />
                        Новогодняя ночь в ночном клубе «ПИОНЕР» - Лучший Новый Год в Лучших семейных традициях!!!
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-12">
                      <Gallery photos={PHOTO_SET} onClick={this.openLightbox} margin={20} columns={1} />

                      <Lightbox
                        images={PHOTO_SET}
                        backdropClosesModal={true}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        zoomable={true}
                        isOpen={this.state.lightboxIsOpen}
                      />
                    </div>
                    <div className="col-xs-12 center-xs">
                      <ButtonUpPr onClick={this.toggleModal} contrast centered>
                        забронировать столик на новый год
                      </ButtonUpPr>
                    </div>
                  </div>
                </div>
              </Description>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;
