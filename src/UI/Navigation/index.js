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
              <Link
                exact={exact ? true : false}
                onClick={onLinkClick}
                to={link}
                activeClassName={activeClassName}
              >
                {name}
              </Link>
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

export default Navigation;
