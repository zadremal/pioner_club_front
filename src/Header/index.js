import React, { Component, Fragment } from "react";
import { Logo, Header, HeaderFlex, NavLink } from "./Styled";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import logo from "./mainlogo.png";
import Menu from "./Menu";

const body = document.querySelector("body");

class index extends Component {
  state = {
    menuOpen: false
  };

  componentWillUnmount = () => {
    clearAllBodyScrollLocks();
  };

  toggleMenu = () => {
    const newModalState = !this.state.menuOpen;
    newModalState ? disableBodyScroll(body) : enableBodyScroll(body);
    this.setState(prevState => {
      return { menuOpen: newModalState };
    });
  };

  render() {
    return (
      <Fragment>
        <Header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <HeaderFlex>
                  <NavLink exact to="/">
                    <Logo src={logo} alt="Ночной клуб Пионер" />
                  </NavLink>
                  <button onClick={this.toggleMenu}>menu</button>
                </HeaderFlex>
              </div>
            </div>
          </div>
        </Header>
        {this.state.menuOpen && <Menu onLinkClick={this.toggleMenu} />}
      </Fragment>
    );
  }
}

export default index;
