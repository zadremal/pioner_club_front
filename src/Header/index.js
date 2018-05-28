import React, { Component, Fragment } from "react";
import { Logo, Header, HeaderFlex, NavLink } from "./Styled";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import logo from "./mainlogo.png";
import Navigation from "../UI/Navigation";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Links } from "./links";
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
    this.setState({
      menuOpen: newModalState
    });
  };

  render() {
    const { menuOpen } = this.state;
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
        <ReactCSSTransitionGroup
          transitionName="nav"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {menuOpen && (
            <Navigation onLinkClick={this.toggleMenu} links={Links} />
          )}
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default index;
