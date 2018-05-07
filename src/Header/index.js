import React, { Component } from "react";
import { Logo, Header, HeaderFlex, Nav, NavList, NavItem } from "./Styled";
import logo from "./mainlogo.png";

class index extends Component {
  render() {
    return (
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <HeaderFlex>
                <Logo src={logo} alt="Ночной клуб Пионер" />
                <Nav>
                  <NavList>
                    <NavItem children="КЛУБ" />
                    <NavItem children="КАРАОКЕ" />
                    <NavItem children="КРАФТ-БАР" />
                    <NavItem children="АФИША" />
                    <NavItem children="АКЦИИ" />
                    <NavItem children="БАНКЕТЫ" />
                    <NavItem children="МЕНЮ" />
                    <NavItem children="ФОТО" />
                    <NavItem children="КОНТАКТЫ" />
                  </NavList>
                </Nav>
              </HeaderFlex>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

export default index;
