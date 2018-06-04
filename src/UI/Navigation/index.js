import React from "react";

import { Nav, List, Item, Link } from "./Styled";

export const Navigation = ({ onLinkClick, links }) => {
  return (
    <Nav>
      <List>
        {links.map((linkItem, index) => {
          const { link, name, exact, activeClassName } = linkItem;
          return (
            <Item key={name} delay={index * 0.075 + "s"}>
              {exact ? (
                <Link
                  exact
                  onClick={onLinkClick}
                  to={link}
                  activeClassName={activeClassName}
                >
                  {name}
                </Link>
              ) : (
                <Link
                  onClick={onLinkClick}
                  to={link}
                  activeClassName={activeClassName}
                >
                  {name}
                </Link>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

export default Navigation;
