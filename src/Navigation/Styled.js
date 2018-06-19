import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colorPr, colorDark, colorAcc, media } from "../UI";

export const Logo = styled.img`
  height: 2rem;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 500;
  width: 250px;
  background: transparent;
  transition: transform 0.4s cubic-bezier(0.67, 0.1, 0.32, 0.98);
  transform: ${props =>
    props.menuIsOpen ? "translateX(0)" : "translateX(250px)"};

  ${media.md`
    width: 380px;
    transform: ${props =>
      props.menuIsOpen ? "translateX(0)" : "translateX(380px)"};
  `};
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 540;
  height: 20px;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: Intro, sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  border-bottom: 1px solid ${colorDark};
  transition: all 0.1s ease-in;
  color: ${colorDark};

  &:visited {
    color: ${colorDark};
  }

  &:hover {
    color: ${colorPr};
    border-bottom: 1px solid ${colorPr};
  }

  &:active {
    color: ${colorAcc};
    border-bottom: 1px solid ${colorAcc};
  }

  &.router-link--active {
    color: ${colorAcc};
    border-bottom: 1px solid ${colorAcc};
  }
`;

export const Nav = styled.nav`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding-top: 2rem;
  background: #fff;
  overflow: auto;
`;

export const List = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0.8rem;
  width: 100%;
  color: #fff;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 190;
  opacity: ${props => (props.menuIsOpen ? 1 : 0)}
  visibility: ${props => (props.menuIsOpen ? "visible" : "hidden")};
  background-color: rgba(0, 0, 0, 0.7);
  transition: all .4s ease-in;
`;
