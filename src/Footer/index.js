import React, { Component } from "react";
import {
  Footer,
  Nav,
  NavItem,
  SocialSvg,
  Contacts,
  ContactsLink,
  ContactsSvg,
  Basement,
  BasementText
} from "./Styled";
import Vk from "./Vk";
import Insta from "./Insta";
import Facebook from "./Facebook";
import Map from "./Map";
import Mail from "./Mail";

class index extends Component {
  render() {
    return (
      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Nav>
                <NavItem children="главная" />
                <NavItem children="клуб" />
                <NavItem children="караоке" />
                <NavItem children="карфт-бар" />
                <NavItem children="банкеты" />
              </Nav>
            </div>
            <div className="col-md-3">
              <Nav>
                <NavItem children="акции" />
                <NavItem children="афиша" />
                <NavItem children="фото" />
                <NavItem children="fc/dc" />
                <NavItem children="план зала" />
              </Nav>
            </div>
            <div className="col-md-3">
              <Nav>
                <NavItem children="меню кухни" />
                <NavItem children="напитки" />
                <NavItem children="банкетное меню" />
                <NavItem children="пивная карта" />
              </Nav>
            </div>

            <div className="col-md-3">
              <SocialSvg viewBox="0 0 512 512">
                <Vk />
              </SocialSvg>
              <SocialSvg viewBox="0 0 169.063 169.063">
                <Insta />
              </SocialSvg>
              <SocialSvg viewBox="0 0 512 512">
                <Facebook />
              </SocialSvg>
              <Contacts>
                <ContactsLink href="mailto: retro@pioner-club.com ">
                  <ContactsSvg viewBox="0 0 512 512">
                    <Mail />
                  </ContactsSvg>
                </ContactsLink>
                <ContactsLink
                  href="mailto: retro@pioner-club.com "
                  children="retro@pioner-club.com"
                />
              </Contacts>
              <Contacts>
                <ContactsLink href="https://www.google.ru/maps/place/%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80/@60.0064527,30.2659941,17z/data=!3m1!4b1!4m5!3m4!1s0x4696343be8afe5d7:0x8c0a80070d563725!8m2!3d60.0064527!4d30.2681828">
                  <ContactsSvg viewBox="0 0 512 512">
                    <Map />
                  </ContactsSvg>
                </ContactsLink>
                <ContactsLink
                  href="https://www.google.ru/maps/place/%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80/@60.0064527,30.2659941,17z/data=!3m1!4b1!4m5!3m4!1s0x4696343be8afe5d7:0x8c0a80070d563725!8m2!3d60.0064527!4d30.2681828"
                  children="пр-кт Испытателей 26 к2"
                />
              </Contacts>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <Basement>
                <BasementText>2007-2018г. Санкт-Петербург.</BasementText>
                <ContactsLink children="Политика конфиденциальности" />
              </Basement>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}

export default index;
