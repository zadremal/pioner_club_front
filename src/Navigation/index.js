import React, { Component, Fragment } from "react";

import { Nav, List, Item, Link, Menu, Overlay, CloseButton } from "./Styled";

import Links from "./links";
import closeIcon from "./close-button.svg";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Overlay
          onClick={this.props.onMenuToggle}
          menuIsOpen={this.props.menuIsOpen}
        />

        <Menu menuIsOpen={this.props.menuIsOpen}>
          <CloseButton
            src={closeIcon}
            alt="закрыть"
            onClick={this.props.onMenuToggle}
          />
          <Nav>
            <List>
              {Links.map(linkItem => {
                const { link, name, exact, activeClassName } = linkItem;
                return (
                  <Item key={link}>
                    {exact ? (
                      <Link
                        onClick={this.props.onMenuToggle}
                        activeClassName={activeClassName}
                        to={link}
                        exact
                      >
                        {name}
                      </Link>
                    ) : (
                      <Link
                        onClick={this.props.onMenuToggle}
                        activeClassName={activeClassName}
                        to={link}
                      >
                        {name}
                      </Link>
                    )}
                  </Item>
                );
              })}
            </List>
          </Nav>
        </Menu>
      </Fragment>
    );
  }
}

export default index;
