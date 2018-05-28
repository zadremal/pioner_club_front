import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { colorPr, colorDark, colorAcc } from "../index";

export const Logo = styled.img`
  height: 2rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${colorDark};
  font-size: 1.5rem;
  font-family: Intro, sans-serif;
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
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  translate: all 0.2s ease-out;
  transition: all 0.2s ease-out;

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
