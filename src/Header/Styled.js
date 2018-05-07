import styled from "styled-components";
import { colorDark } from "../UI/";

export const Logo = styled.img`
  height: 2rem;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: ${colorDark};
  padding: 0.5rem 0;
  width: 100%;
`;

export const HeaderFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
`;

export const NavItem = styled.li`
  display: inline-block;
  padding: 0.8rem;
  color: #fff;
  cursor: pointer;
`;
