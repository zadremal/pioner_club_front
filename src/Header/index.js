import React, { Component } from "react";
import { Link } from "react-router-dom";
import ym from "react-yandex-metrika";
import Hamburger from "react-hamburgers";
import Headroom from "react-headroom";
import { colorPr } from "../UI/";
import { ButtonUpPr } from "../UI/buttons";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {
  Logo,
  Header,
  HeaderFlex,
  Contact,
  MenuFlex,
  Text,
  Icon
} from "./Styled";
import "./hamburger.css";

import map from "./img/map.svg";
import phone from "./img/phone.svg";
import logo from "./img/mainlogo.png";

class index extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    ym("reachGoal", "party__form--open");
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  render() {
    const { menuIsOpen, onMenuToggle } = this.props;
    return (
      <Headroom>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <Header menuIsOpen={menuIsOpen} id="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <HeaderFlex>
                  <MenuFlex>
                    <Link to="/">
                      <Logo src={logo} alt="Ночной клуб Пионер" />
                    </Link>
                  </MenuFlex>
                  <MenuFlex center>
                    <ButtonUpPr onClick={this.toggleModal} color={colorPr}>
                      забронировать столик
                    </ButtonUpPr>
                  </MenuFlex>
                  <MenuFlex>
                    <Contact href="tel:88129815335" title="позвоните нам">
                      <Text>981-53-35</Text>
                      <Icon
                        src={phone}
                        alt="Ночной клуб Пионер - 981-53-35"
                        title="наберите нам"
                      />
                    </Contact>
                    <Contact
                      href="https://www.google.ru/maps/place/%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80/@60.0064527,30.2659941,17z/data=!3m1!4b1!4m5!3m4!1s0x4696343be8afe5d7:0x8c0a80070d563725!8m2!3d60.0064527!4d30.2681828"
                      target="_blank"
                    >
                      <Text>Испытателей 26/2</Text>
                      <Icon
                        src={map}
                        alt="Ночной клуб Пионер на Испыталей 26/2"
                        title="мы на карте"
                      />
                    </Contact>
                    <Hamburger
                      type="arrow"
                      active={menuIsOpen}
                      onClick={onMenuToggle}
                    />
                  </MenuFlex>
                </HeaderFlex>
              </div>
            </div>
          </div>
        </Header>
      </Headroom>
    );
  }
}

export default index;
