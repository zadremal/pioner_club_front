import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../UI/section";
import Modal from "../UI/Modal";
import Form from "../UI/Form/NewYearCorporate";
import { ButtonUpPr } from "../UI/buttons";
import { Image, TextBlock, Wrap, Description, PartyStart, Price } from "./Styled";

import corporate1 from "./corporate/corporate1.jpg";
import corporate2 from "./corporate/corporate2.jpg";
import corporate3 from "./corporate/corporate3.jpg";

import Lightbox from "react-images-zoom";
import Gallery from "react-photo-gallery";

import corporate from "./corporate.jpg";

const PHOTO_SET = [
  {
    src: corporate1,
    width: 2,
    height: 3
  },
  {
    src: corporate2,
    width: 2,
    height: 3
  },
  {
    src: corporate3,
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
          <title>Пионер - новогодние корпоративы в клубе Пионер</title>
          <link rel="canonical" href="https://pioner-club.com/newyear/corporate" />
        </Helmet>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Wrap>
                <TextBlock>
                  <Heading>новогодние корпоративы</Heading>
                </TextBlock>
                <Image src={corporate} alt={"Новогодние корпоративы в ночном клубе Пионер"} />
                <Price>
                  От 750 &#8381; <br /> с человека
                </Price>
              </Wrap>
              <Description>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 center-xs">
                      <PartyStart>Новогодние корпоративы в Пионере </PartyStart>
                    </div>
                    <div className="col-xs-12 ">
                      <p>
                        Приглашаем Вас отметить корпоративный Новый Год в ночном клубе Пионер! Вас ждет неповторимая
                        атмосфера клуба, специальная шоу программа, ведущий, DJ, отдельный караоке зал, большой танцпол.
                        <br />
                        <br />- Время работы клуба: 22-00 до 06-00
                        <br />- Организация частных мероприятий в нерабочее время клуба обсуждается индивидуально,
                        ставка на 1 гостя от 750 руб
                        <br />- БЕСПЛАТНЫЙ вход для всех гостей банкета
                        <br />- Специальные условия по напиткам: Алкоголь с собой или заказ у клуба по себестоимости.
                        <br />
                        Безалкогольные напитки по специальной цене
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
                        забронировать корпоратив
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
