import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background: #420;
  padding: 20px;
  margin: 20px;
  color: #fff;
  &.menu-link--active {
    color: #228;
    background: pink;
  }
`;
