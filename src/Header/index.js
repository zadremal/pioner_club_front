import React, { Component } from "react";
import {
  Logo,
  Header,
  HeaderFlex,
  Nav,
  NavList,
  NavItem,
  NavLink
} from "./Styled";
import logo from "./mainlogo.png";

class index extends Component {
  render() {
    return (
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <HeaderFlex>
                <NavLink exact to="/">
                  <Logo src={logo} alt="Ночной клуб Пионер" />
                </NavLink>
                <Nav>
                  <NavList>
                    <NavItem>
                      <NavLink to="/club" activeClassName="router-link--active">
                        КЛУБ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/karaoke"
                        activeClassName="router-link--active"
                      >
                        КАРАОКЕ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/craft"
                        activeClassName="router-link--active"
                      >
                        КРАФТ-БАР
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/aifsha"
                        activeClassName="router-link--active"
                      >
                        АФИША
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/deals"
                        activeClassName="router-link--active"
                      >
                        АКЦИИ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/banket"
                        activeClassName="router-link--active"
                      >
                        БАНКЕТЫ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/menu" activeClassName="router-link--active">
                        МЕНЮ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/photo"
                        activeClassName="router-link--active"
                      >
                        ФОТО
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/contacts"
                        activeClassName="router-link--active"
                      >
                        КОНТАКТЫ
                      </NavLink>
                    </NavItem>
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
