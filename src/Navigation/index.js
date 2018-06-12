import React, { Fragment } from "react";

import { Nav, List, Item, Link, Menu, Overlay, CloseButton } from "./Styled";

import Links from "./links";
import closeIcon from "./close-button.svg";
import ScrollLock from "react-scrolllock";

const index = ({ onMenuToggle, menuIsOpen }) => {
  return (
    <Fragment>
      <Overlay onClick={onMenuToggle} menuIsOpen={menuIsOpen} />
      {menuIsOpen && <ScrollLock />}
      <Menu menuIsOpen={menuIsOpen} id="navigation">
        <CloseButton src={closeIcon} alt="закрыть" onClick={onMenuToggle} />
        <Nav>
          <List>
            {Links.map(linkItem => {
              const { link, name, exact, activeClassName } = linkItem;
              return (
                <Item key={link}>
                  {exact ? (
                    <Link
                      onClick={onMenuToggle}
                      activeClassName={activeClassName}
                      to={link}
                      exact
                    >
                      {name}
                    </Link>
                  ) : (
                    <Link
                      onClick={onMenuToggle}
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
};

export default index;
