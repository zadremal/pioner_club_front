import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { colorPr, colorDark, colorAcc } from "../UI";

export const Logo = styled.img`
  height: 2rem;
`;

export const Menu = styled.div`
  position: fixed;
  width: 250px;
  top: 0;
  bottom: 0;
  right: 0;
  background: transtarent;
  z-index: 500;
  transition: transform 0.4s cubic-bezier(0.67, 0.1, 0.32, 0.98);
  transform: ${props =>
    props.menuIsOpen ? "translateX(0)" : "translateX(250px)"};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${colorDark};
  font-size: 1.25rem;
  font-family: Intro, sans-serif;
  font-weight: 300;
  transition: color 0.1s ease-in;
  &:visited {
    color: ${colorDark};
  }
  &:hover {
    color: ${colorPr};
  }
  &:active {
    color: ${colorAcc};
  }
  &.router-link--active {
    color: ${colorAcc};
  }
`;

const linkAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-200%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);

  }
`;

export const Nav = styled.nav`
  position: relative;
  z-index: 200;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;

  &.nav-enter {
    opacity: 0.01;
    transform: translateY(-100%);
  }
  &.nav-enter.nav-enter-active {
    opacity: 1;
    transition: all 200ms ease-out;
    transform: translateY(0%);
  }
  &.nav-leave {
    opacity: 1;
    transform: translateY(0%);
  }

  &.nav-leave.nav-leave-active {
    opacity: 0.01;
    transition: all 200ms ease-out;
    transform: translateY(-100%);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
`;

export const Item = styled.li`
  width: 100%;

  display: block;
  margin: 0 auto;
  opacity: 0;
  padding: 0.8rem;
  color: #fff;
  cursor: pointer;
  animation-name: ${linkAnimation};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 190;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all .4s ease-in;
  opacity: ${props => (props.menuIsOpen ? 1 : 0)}
  visibility: ${props => (props.menuIsOpen ? "visible" : "hidden")};

`;
