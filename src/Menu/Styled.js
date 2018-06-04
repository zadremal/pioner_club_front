import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colorPr, colorAcc, media } from "../UI";

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lg`
    display: block;
  `};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Intro, Arial, sans-serif;
  font-size: 1em;
  display: block;
  margin: 1em 0;
  color: #000;
  ${media.sm`
    font-size: 1.5em;
  `};
  ${media.lg`
    font-size: 2em;
  `};
  &:hover {
    color: ${colorAcc};
  }

  &.menu-link--active {
    color: ${colorPr};
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1em;
`;
