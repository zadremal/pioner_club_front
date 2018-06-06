import React, { Component, Fragment } from "react";

import { Nav, List, Item, Link, Menu, Overlay } from "./Styled";

import Links from "./links";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Overlay
          onClick={this.props.onMenuToggle}
          menuIsOpen={this.props.menuIsOpen}
        />
        <Menu menuIsOpen={this.props.menuIsOpen}>
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
