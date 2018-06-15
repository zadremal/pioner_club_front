import styled from "styled-components";
import { colorDark, colorAcc, colorPr, media } from "../UI/";

export const Logo = styled.img`
  height: 2rem;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 101;
  height: 60px;
  width: 100%;
  padding: 0;
  background-color: ${colorDark};
  transition: transform 0.4s cubic-bezier(0.67, 0.1, 0.32, 0.98);
  transform: ${props =>
    props.menuIsOpen ? "translateX(-250px)" : "translateX(0)"};

  ${media.md`
    transform: ${props =>
      props.menuIsOpen ? "translateX(-350px)" : "translateX(0)"};
  `};
`;

export const HeaderFlex = styled.div`
  position: relative;
  z-index: 60;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuFlex = styled.div`
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    display: none;
  }

  ${media.lg`
    flex-basis: 70%;
   
    &:first-child {
    display: block;
    }
  `};

  ${media.xl`
    justify-content: ${props => (props.center ? "center" : "space-between")};
    flex-basis: calc(100% / 3);
  `};
`;

export const Contact = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  transition: color 0.1s ease-out;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: ${colorAcc};
  }

  &:active {
    color: ${colorPr};
  }

  ${media.md`
    margin-left: 1rem;
    margin-right: 1rem;
  `};

  ${media.lg`
    margin-left: .5rem;
    margin-right: .5rem;
  `};

  ${media.xl`
    font-size: 1.15rem;
  `};
`;

export const Text = styled.span`
  display: none;

  ${media.md`
    display: inline;
  `};
`;

export const Icon = styled.img`
  display: inline-block;
  height: 25px;
  width: 25px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  ${media.sm`
    margin-left: 1rem;
    margin-right: 1rem;
  `};

  ${media.md`
    display: none;
  `};
`;
